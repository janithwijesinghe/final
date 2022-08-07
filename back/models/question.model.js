module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
      title: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER
      },
      poll_id: {
        type: Sequelize.INTEGER
      }
    });
    return Question;
  };

