const db = require("../models");
const Poll = db.polls;
const Question = db.questions;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  
    const event = {
        title: req.body.title,
    };
      // Save Tutorial in the database
      Poll.create(event)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Poll."
          });
        });

};

exports.createWithQuestion = (req, res) => {
  
  const event = {
      title: req.body.title,
  };
    // Save Tutorial in the database

    console.log('body ? ', req.body);

    Question.destroy({ where: {} })
    Poll.destroy({ where: {} })

    Poll.create(event)
      .then(data => {

        const questions = req.body.questions;

        if (questions.length > 0) {

          questions.forEach(function(question) {

            console.log('question', question);

            const questionObj = {
              title: question.title,
              count: 0,
              poll_id: data.id
            };

            Question.create(questionObj)
            .then(res => {
              console.log('Question', res)
            }).catch(error => {
              console.error('Question', error)
            })

          })
        }

        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Poll."
        });
      });

};


exports.update = (req, res) => {
  
    const poll = {
      title: req.body.title,
    };

    Poll.update(
      poll,
      { where: { id: req.params.id } }
    )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the Poll."
      });
    });


};


exports.findAll = async (req, res) => {
  
  const polls = await db.sequelize.query("SELECT polls.*, GROUP_CONCAT(questions.id) as question_ids FROM event_db.polls LEFT JOIN event_db.questions ON event_db.polls.id = event_db.questions.poll_id GROUP BY polls.id");

  // console.log('questions', polls);

    if (polls.length > 0) {

      console.log('question_ids', polls);

      if (polls[0].length > 0) {
        // console.log('polls', polls);

        const question_ids = polls[0][0].question_ids

        if (question_ids !== null) {
  
          let questions_array = []
          const question_ids_array = question_ids.split(',')
  
          // question_ids_array.forEach((questionId) => {
  
            const questionFound = Question.findAll({
              where: {
                id: question_ids_array
              }
            }).then(found => {
              // console.log('found? ', found)
              polls[0][0].questions = found
              res.send(polls[0])
              // questions_array.push(found.dataValues)
            })
  
          // })
  
  
          // console.log('questions_array? ', questions_array)
          // polls[0][0].questions = questions_array
  
          // res.send(polls[0])
  
        }
        else {
          polls[0][0].questions = []
          res.send(polls[0])
  
        }

      } else {
        res.send('no polls found')
      }

     

    }

};



exports.delete = (req, res) => {
  
    const id = req.params.id;
    Poll.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Event was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Event with id=" + id
        });
      });
};


