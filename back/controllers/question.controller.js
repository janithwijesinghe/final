const db = require("../models");
const Event = db.events;
const Question = db.questions;
const Op = db.Sequelize.Op;


exports.update = (req, res) => {
  
  const questionFound = Question.findAll({
    where: {
      id: req.params.id
    }
  }).then(response => {
    // console.log('response', response)

    if (response.length > 0) {

      const prevCount = response[0].dataValues.count

      const updatedCount = prevCount + 1

      console.log('prevCount', prevCount)

      Question.update({ count: updatedCount }, {
        where: {
          id: req.params.id
        }
      }).then(dd => {
        res.send(dd)
      })

      
    }
    else {
      res.send("Question Not Found")
    }
    
    
  }).catch(error => {

    console.log('error', error)

  })

  console.log('questionFound', questionFound)

  // const event = {
  //     name: req.body.name,
  //     venue: req.body.venue,
  //     event_on: req.body.event_on,
  //     description: req.body.description
  //   };
    
  //   Event.update(
  //     event,
  //     { where: { id: req.params.id } }
  //   )
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while updating the Event."
  //     });
  //   });


};

