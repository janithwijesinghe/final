import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import closeIcon from "../../images/close.png";
import "./modal.css";

const EventModal = ({ events, showEventModal,clickedEventID , setShowEventModal,  }) => {
     
    const selectedEvent =  events.find((event) => event.id == clickedEventID );
  return (
    <>
      <Modal
        show={showEventModal}
        onHide={() => setShowEventModal(false)}
        dialogClassName="modal-10w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <div className="modal-container">
          <img
            src={closeIcon}
            alt="close"
            className="event-close-icon"
            onClick={() => setShowEventModal(false)}
          />
           <p className="event-title"><span className="event-label">Title : </span> {selectedEvent?.name}</p>
          <p className="event-title"><span className="event-label">Description : </span> {selectedEvent?.description}</p>
          <p className="event-title"><span className="event-label">Date : </span> {selectedEvent?.event_date}</p>
          <p className="event-title"><span className="event-label">Time : </span> {selectedEvent?.event_on}</p>
          <p className="event-title"><span className="event-label">Venue : </span> {selectedEvent?.venue}</p>
        </div>
      </Modal>
    </>
  );
};

export default EventModal;
