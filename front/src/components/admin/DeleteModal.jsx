import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "../../axios";
import { toast } from "react-toastify";
import "./modal.css";
import closeIcon from "../../images/close.png";

const DeleteModal = ({
  showDeleteModal,
  setShowDeleteModal,
  deletingEventID,
  getEvents,
}) => {
  const [loading, setLoading] = useState(false);
  const deleteEvent = async (id) => {
    setLoading(true);
    await axios
      .delete(`/events/${id}`)
      .then(async (res) => {
        toast.success("Event was deleted Successfully!");
        setLoading(false);
        setShowDeleteModal(false);
        await getEvents();
      })
      .catch((e) => {
        setLoading(false);
        toast.error("Something went wrong!");
        setShowDeleteModal(false);
      });
  };

  return (
    <div>
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        dialogClassName="modal-10w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body closeButton>
          <div className="modal-container">
            <img
              src={closeIcon}
              alt="close"
              className="close-icon"
              onClick={() => setShowDeleteModal(false)}
            />
            <p className="title">Do you want to delete this event?</p>
            <div className="button-wrap">
              <Button
                variant="danger"
                size="sm"
                disabled={loading}
                danger
                onClick={() => deleteEvent(deletingEventID)}
              >
                Delete
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowDeleteModal(false)}
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

export default DeleteModal;
