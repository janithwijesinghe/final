import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "../../../axios";
import DeleteModal from "../../admin/DeleteModal";
import UpdateModal from "../../admin/UpdateModal";

const Event = () => {
  const [eventDetails, setEvent] = useState({
    id: "",
    name: "",
    venue: "",
    event_on: "",
    event_date: "",
    description: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [events, setEvents] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [deletingEventID, setDeletingEventID] = useState(null);

  useEffect(() => {
    return () => {
      (async () => {
        await getEvents();
      })();
    };
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    const currentEvent = { ...eventDetails };
    currentEvent[name] = value;
    setEvent(currentEvent);
  };

  const resetForm = () => {
    const event = {
      id: "",
      name: "",
      venue: "",
      event_on: "",
      event_date: "",
      description: "",
    };

    setIsEdit(false);
    setEvent(event);
  };

  const getEvents = async () => {
    await axios
      .get("/events")
      .then((res) => {
        console.log(res, "[events]");
        setEvents(res.data);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  const submitEvent = async (e) => {
    e.preventDefault();
    if (!isEdit) return await addEvent();
    await updateEvent();
  };

  const addEvent = async (e) => {
    await axios
      .post("/events", eventDetails)
      .then(async (res) => {
        toast.success("The event was added successfully!");
        await getEvents();
        resetForm();
      })
      .catch((e) => {
        toast.error("Something went wrong!");
      });
  };

  const setEventDetails = (eventId) => {
    setIsEdit(true);
    const { id, event_date, event_on, venue, name, description } = events.find(
      (event) => event.id === eventId
    );
    const event = { id, event_date, event_on, venue, name, description };
    setEvent(event);
  };

  const updateEvent = async () => {
    setShowUpdateModal(true);
    // await axios
    //   .put(`/events/${eventDetails.id}`, eventDetails)
    //   .then(async (res) => {
    //     toast.success("The event was updated successfully!");
    //     await getEvents();
    //     resetForm();
    //   })
    //   .catch((e) => {
    //     toast.error("Something went wrong!");
    //   });
  };

  const deleteEvent = async (id) => {
    setShowDeleteModal(true);
    setDeletingEventID(id);
  };

  const eventList = events.map((event) => {
    return (
      <tr key={event.id}>
        <td>
          <span
            style={{ color: "darkred", cursor: "pointer" }}
            onClick={() => deleteEvent(event.id)}
          >
            <i className="fas fa-trash" />
          </span>
          <span
            style={{ color: "#cfb10d", cursor: "pointer", marginLeft: "10px" }}
            onClick={() => setEventDetails(event.id)}
          >
            <i className="fas fa-edit" />
          </span>
        </td>
        <td>{event.name}</td>
        <td>{event.venue}</td>
        <td>{event.event_date}</td>
        <td>{event.event_on}</td>
        <td>{event.description}</td>
      </tr>
    );
  });

  return (
    <div>
      <Container>
        <h4 className="text-left">Events</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Venue</th>
              <th>Date</th>
              <th>Time</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{events ? eventList : "There are no events"}</tbody>
        </Table>
        <h2 className="text-center">Add Event</h2>
        <Form onSubmit={submitEvent}>
          <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={eventDetails.name}
              type="text"
              placeholder="Enter Name"
              name="name"
            />
          </Form.Group>
          <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
            <Form.Label>Venue</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={eventDetails.venue}
              type="text"
              placeholder="Enter Venue"
              name="venue"
            />
          </Form.Group>
          <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              onChange={handleChange}
              value={eventDetails.event_on}
              placeholder="Enter Time"
              name="event_on"
            />
          </Form.Group>
          <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
            <Form.Label>Date</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={eventDetails.event_date}
              type="date"
              placeholder="Enter Date"
              name="event_date"
            />
          </Form.Group>
          <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={eventDetails.description}
              type="text"
              placeholder="Enter Description"
              name="description"
            />
          </Form.Group>
          <div style={{ textAlign: "right" }}>
            <Button size="lg" variant="success" type="submit">
              Add / Update Event
            </Button>
          </div>
        </Form>
      </Container>
      <DeleteModal
        showDeleteModal={showDeleteModal}
        deletingEventID={deletingEventID}
        setShowDeleteModal={setShowDeleteModal}
        getEvents={getEvents}
      />
      <UpdateModal
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        eventDetails={eventDetails}
        getEvents={getEvents}
        resetForm={resetForm}
      />
    </div>
  );
};

export default Event;
