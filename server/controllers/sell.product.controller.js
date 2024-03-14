const db2 = require("../models/contact");
const ProductToSellDetails = db2.ProductToSellDetails;;

// Create and Save a new ProductToSellDetail
exports.create = (req, res) => {
   
        // Validate request
        if (!req.body.productName) {
          res.status(400).send({ message: "Content can not be empty!" });
          return;
        }
      
        // Create a ProductToSellDetail
        const ProductToSellDetail =new ProductToSellDetails({
            productName: req.body.productName,
            price: req.body.price,
            photo: req.body.photo,
            details: req.body.details,
            category:req.body.category,
        
          
        });
      
        // Save ProductToSellDetail in the database
        ProductToSellDetail
          .save(ProductToSellDetail)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the ProductToSellDetail."
            });
          });
      };
  

// Retrieve all ProductToSellDetails from the database.
exports.findAll = (req, res) => {
    const productName = req.query.productName;
    var condition = productName ? { productName: { $regex: new RegExp(productName), $options: "i" } } : {};
  
    ProductToSellDetail.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ProductToSellDetails."
        });
      });
  
};

// Find a single ProductToSellDetail with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

  ProductToSellDetail.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found ProductToSellDetail with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving ProductToSellDetail with id=" + id });
    });
  
};

// Update a ProductToSellDetail by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      ProductToSellDetail.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update ProductToSellDetail with id=${id}. Maybe ProductToSellDetail was not found!`
            });
          } else res.send({ message: "ProductToSellDetail was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating ProductToSellDetail with id=" + id
          });
        });
  
};

// Delete a ProductToSellDetail with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

  ProductToSellDetail.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete ProductToSellDetail with id=${id}. Maybe ProductToSellDetail was not found!`
        });
      } else {
        res.send({
          message: "ProductToSellDetail was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete ProductToSellDetail with id=" + id
      });
    });
  
};

// Delete all ProductToSellDetails from the database.
exports.deleteAll = (req, res) => {
    ProductToSellDetail.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} ProductToSellDetails were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all ProductToSellDetails."
      });
    });
};

// Find all published ProductToSellDetails
exports.findAllPublished = (req, res) => {
    ProductToSellDetail.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ProductToSellDetails."
      });
    });
};