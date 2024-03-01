module.exports = app => {
    const contactDetails = require("../controllers/contact.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", contactDetails.create);
  
    // Retrieve all contactDetails
    router.get("/", contactDetails.findAll);
  

  
    // Retrieve a single Tutorial with id
    router.get("/:id", contactDetails.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", contactDetails.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", contactDetails.delete);
  
    // Delete all contactDetails
    router.delete("/", contactDetails.deleteAll);
  
    app.use('/api/contactDetails', router);
  };