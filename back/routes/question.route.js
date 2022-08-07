// module.exports = app => {
    const questions = require("../controllers/question.controller.js");
    var router = require("express").Router();
    
   
    router.put("/:id", questions.update);
    
    // router.get("/", events.findAll);
    
    

  module.exports = router;
