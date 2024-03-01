module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        email: String,
        subject: String,
        message: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const contactDetails = mongoose.model("contactDetail", schema);
    return contactDetails;
  };