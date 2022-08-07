const db = require("../models");
const Event = db.events;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const event = {
    name: req.body.name,
    venue: req.body.venue,
    event_on: req.body.event_on,
    event_date: req.body.event_date,
    description: req.body.description,
  };
  // Save Tutorial in the database
  Event.create(event)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Event.",
      });
    });
};

exports.update = (req, res) => {
  const event = {
    name: req.body.name,
    venue: req.body.venue,
    event_on: req.body.event_on,
    description: req.body.description,
  };

  Event.update(event, { where: { id: req.params.id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Event.",
      });
    });
};

exports.findAll = (req, res) => {
  Event.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving events.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Event.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Event was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Event with id=" + id,
      });
    });
};
