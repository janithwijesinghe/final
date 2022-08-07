// module.exports = app => {
    const events = require("../controllers/event.controller.js");
    var router = require("express").Router();
    
    router.post("/", events.create);

    router.put("/:id", events.update);
    
    router.get("/", events.findAll);
    
    
    router.delete("/:id", events.delete);

    
    // app.use('/api/events', router);
  // };

  module.exports = router;
