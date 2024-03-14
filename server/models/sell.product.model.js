module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        productName: String,
        price: String,
        photo: String,
        details: String,
        category:String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const ProductToSellDetails = mongoose.model("ProductToSellDetail", schema);
    return ProductToSellDetails;
  };