const express = require("express");
const cors = require("cors");

const eventRouter =  require("./routes/event.route");
const pllRouter =  require("./routes/poll.route");
const questionRouter =  require("./routes/question.route");

const app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Event application." });
});
// set port, listen for requests
// require("./routes/event.route")(app);
// require("./routes/poll.route")(app);
app.use("/polls", pllRouter);
app.use("/events", eventRouter);
app.use("/questions", questionRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});