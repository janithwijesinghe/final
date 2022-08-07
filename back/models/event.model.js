module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      name: {
        type: Sequelize.STRING
      },
      venue: {
        type: Sequelize.STRING
      },
      event_on: {
        type: Sequelize.STRING
      },
      event_date: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
    return Event;
  };