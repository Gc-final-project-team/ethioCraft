module.exports = app => {
    const ProductToSellDetails = require("../controllers/sell.product.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", ProductToSellDetails.create);
  
    // Retrieve all ProductToSellDetails
    router.get("/", ProductToSellDetails.findAll);
  
  
    // Retrieve a single Tutorial with id
    router.get("/:id", ProductToSellDetails.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", ProductToSellDetails.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", ProductToSellDetails.delete);
  
    // Delete all ProductToSellDetails
    router.delete("/", ProductToSellDetails.deleteAll);
  
    app.use('/api/ProductToSellDetails', router);
  };