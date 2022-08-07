import React from "react";
import {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Container} from "react-bootstrap";
import {toast} from "react-toastify";
import axios from "../../../axios";
import Questions from "../../admin/questions";

const Poll = () => {
    const [pollDetails, setPoll] = useState({
        title: "",
        answers: [],
    });

    useEffect(() => {
        return () => {
            (async () => {
                await getPolls();
            })();
        };
    }, []);

    const addPoll = async (e) => {
        e.preventDefault();
        localStorage.removeItem("voted");
        const payload = {title: pollDetails.title, questions: pollDetails.answers};
        await axios
            .put("/polls/all", payload)
            .then(async (res) => {
                toast.success("The poll was added successfully!");
                resetForm();
                await getPolls();
            })
            .catch((e) => {
                toast.error("Something went wrong!");
            });
    };

    const resetForm = () => {
        const poll = {
            title: "",
            answers: [],
        };

        setPoll(poll);
    };

    const getPolls = async () => {
        await axios
            .get("/polls")
            .then((res) => {
                console.log(res, "[polls]");
                // setPolls(res.data);
                res.data !== "no polls found" &&
                setPoll({
                    title: res.data[0].title,
                    answers: res.data[0].questions,
                });
                // setPoll( res.data)
            })
            .catch((e) => {
                console.log("Error", e);
            });
    };

    const handleChange = (e) => {
        const {value, name} = e.target;
        const currentPoll = {...pollDetails};
        currentPoll[name] = value;
        setPoll(currentPoll);
    };

    /* Questions functionality */
    const removeQuestion = (questionIdx) => {
        console.log(questionIdx, "questionIdx");
        const currentPoll = {...pollDetails};
        console.log(currentPoll, "current POLL");
        currentPoll.answers.splice(questionIdx, 1);
        setPoll(currentPoll);
    };

    const editQuestion = (questionIdx, updatedQuestion) => {
        const poll = {...pollDetails};
        poll.answers[questionIdx] = updatedQuestion;
        console.log(poll, "current POLL");
        setPoll(poll);
    };

    const updateQuestions = (question) => {
        const poll = {...pollDetails};
        poll.answers.push(question);
        setPoll(poll);
    };

    const getPercentage = (count) => {
        if (!count) return 0;
        let total = 0;
        pollDetails.answers.forEach((answer) => {
            total = total + answer.count;
        });
        return (count / total) * 100;
    };

    const stats = pollDetails.answers.map((answer) => {
        return (
            <div className="mb-2" key={answer.id}>
                <div className="percentage">
                    <div style={{fontSize: "16px"}}>
                        {answer.title}
                    </div>
                    <div style={{fontSize: "20px"}}>
                        {getPercentage(answer.count).toFixed(1)}%
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div>
            <Container>
                {/* <h4 className="text-left">Polls</h4>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th/>
                        <th>Title</th>
                    </tr>
                    </thead>
                    <tbody>
                    {polls ? pollsList : "There are no Polls"}
                    </tbody>
                </Table> */}
                <div className="question-box-wrap mt-3">
                    {stats}
                </div>
                <h2 className="text-center">Add Poll</h2>
                <Form onSubmit={addPoll}>
                    <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            value={pollDetails.title}
                            type="text"
                            placeholder="Enter Name"
                            name="title"
                        />
                    </Form.Group>
                    <Questions
                        questions={pollDetails.answers}
                        updateQuestions={updateQuestions}
                        removeQuestion={removeQuestion}
                        editQuestion={editQuestion}
                    />
                    <div style={{textAlign: "right"}} className="mt-3">
                        <Button size="lg" variant="success" type="submit">
                            Add / Update Poll
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Poll;
