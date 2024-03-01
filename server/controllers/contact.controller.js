const db = require("../models/contact");
const contactDetails = db.contactDetails;

// Create and Save a new contactDetail
exports.create = (req, res) => {
   
        // Validate request
        if (!req.body.name) {
          res.status(400).send({ message: "Content can not be empty!" });
          return;
        }
      
        // Create a contactDetail
        const contactDetail = new contactDetails({
          name: req.body.name,
          email: req.body.email,
          subject: req.body.subject,
          message: req.body.message,
          
        });
      
        // Save contactDetail in the database
        contactDetail
          .save(contactDetail)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the contactDetail."
            });
          });
      };
  

// Retrieve all contactDetails from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    contactDetail.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving contactDetails."
        });
      });
  
};

// Find a single contactDetail with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

  contactDetail.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found contactDetail with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving contactDetail with id=" + id });
    });
  
};

// Update a contactDetail by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      contactDetail.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update contactDetail with id=${id}. Maybe contactDetail was not found!`
            });
          } else res.send({ message: "contactDetail was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating contactDetail with id=" + id
          });
        });
  
};

// Delete a contactDetail with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

  contactDetail.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete contactDetail with id=${id}. Maybe contactDetail was not found!`
        });
      } else {
        res.send({
          message: "contactDetail was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete contactDetail with id=" + id
      });
    });
  
};

// Delete all contactDetails from the database.
exports.deleteAll = (req, res) => {
    contactDetail.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} contactDetails were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all contactDetails."
      });
    });
};

// Find all published contactDetails
exports.findAllPublished = (req, res) => {
    contactDetail.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving contactDetails."
      });
    });
};