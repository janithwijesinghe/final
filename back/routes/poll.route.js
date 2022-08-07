// module.exports = app => {
    const polls = require("../controllers/poll.controller.js");
    var router = require("express").Router();
    
    router.post("/", polls.create);

    router.put("/all", polls.createWithQuestion);

    router.put("/:id", polls.update);
    
    router.get("/", polls.findAll);
    
    
    router.delete("/:id", polls.delete);

    
    // app.use('/api/polls', router);
  // };
  module.exports = router;
