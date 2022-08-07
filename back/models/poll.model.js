module.exports = (sequelize, Sequelize) => {
    const Poll = sequelize.define("poll", {
      title: {
        type: Sequelize.STRING
      }
    });
    return Poll;
  };


  