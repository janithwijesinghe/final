import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "../../axios";
import { toast } from "react-toastify";
import "./modal.css";
import closeIcon from "../../images/close.png";

const UpdateModal = ({
    showUpdateModal,
    setShowUpdateModal,
    eventDetails,
    getEvents,
    resetForm
}) => {
  const [loading, setLoading] = useState(false);
  const updateEvent = async (eventDetails) => {
    setLoading(true);
    await axios
    .put(`/events/${eventDetails.id}`, eventDetails)
    .then(async (res) => {
        setLoading(false);
        toast.success("The event was updated successfully!");
        setShowUpdateModal(false);
        await getEvents();
        resetForm();
    })
    .catch((e) => {
        setLoading(false);
        setShowUpdateModal(false);
        toast.error("Something went wrong!");
      });
  };
  return (
    <div>
      <Modal
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}
        dialogClassName="modal-10w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body closeButton>
          <div className="modal-container">
            <img
              src={closeIcon}
              alt="close"
              className="close-icon"
              onClick={() => setShowUpdateModal(false)}
            />
            <p className="title">This event will be updated!</p>
            <div className="button-wrap">
              <Button
                variant="danger"
                size="sm"
                disabled={loading}
                danger
                onClick={() => updateEvent(eventDetails)}
              >
                Update
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowUpdateModal(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdateModal;
