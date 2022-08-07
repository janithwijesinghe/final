import React, { useEffect, useState } from "react";
import Calendar from "../../../components/admin/calendar";
import EventModal from "../../admin/EventModal";
import axios from "../../../axios";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";

const Test = () => {
  const [events, setEvents] = useState([]);
  const [selectedQuizID, setSelectedQuizID] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [clickedEventID, setClickedEventID] = useState(null);
  const [pollDetails, setPoll] = useState({
    title: "",
    questions: [],
  });
  useEffect(() => {
    return () => {
      (async () => {
        await getEvents();
        await getPolls();
      })();
      const voteValue = localStorage.getItem("voted");
      if (voteValue === null) {
        localStorage.setItem("voted", "false");
      }
    };
  }, []);
  const getEvents = async () => {
    await axios
      .get("/events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  // console.log("allCounts", allCounts);

  const getPolls = async () => {
    await axios
      .get("/polls")
      .then((res) => {
        console.log(res, "[polls]");
        res.data !== "no polls found" &&
          setPoll({
            title: res.data[0].title,
            questions: res.data[0].questions,
          });
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };
  const submitVote = async (id) => {
    const voteValue = localStorage.getItem("voted");
    if (voteValue === "false") {
      if (selectedQuizID) {
        await axios
          .put(`/questions/${id}`)
          .then(() => {
            toast.success("Vote Submitted!");
            localStorage.setItem("voted", "true");
            getPolls();
          })
          .catch((e) => {
            toast.error("Something went wrong!");
          });
      } else {
        toast.error("Please add your vote!");
      }
    } else {
      toast.error("You have already voted!");
    }
  };

  const questions = pollDetails.questions.map((quiz) => {
    return (
      <div
        onClick={() => setSelectedQuizID(quiz.id)}
        key={quiz.id}
        className={
          selectedQuizID === quiz.id ? "question-box select" : "question-box"
        }
      >
        {quiz.title}
      </div>
    );
  });

  return (
    <div className="d-flex mt-3">
      <Container>
        <Calendar
          setClickedEventID={setClickedEventID}
          setShowEventModal={setShowEventModal}
          events={events.map((event) => ({
            id: event.id,
            title: event.name,
            date: event.event_date,
          }))}
        />
        <Row className="my-4">
          <Col lg={12} md={12}>
            <div>
              <h1 className="text-center">{pollDetails.title}</h1>
              {questions}
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                size="lg"
                variant="success"
                type="button"
                onClick={() => submitVote(selectedQuizID)}
              >
                Submit Vote
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <EventModal
        showEventModal={showEventModal}
        setShowEventModal={setShowEventModal}
        clickedEventID={clickedEventID}
        events={events}
      />
    </div>
  );
};

export default Test;
