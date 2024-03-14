const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.contactDetails = require("./contact.model.js")(mongoose);

const db2 = {};
db2.mongoose = mongoose;
db2.url = dbConfig.url;
db2.ProductToSellDetails = require("./sell.product.model.js")(mongoose);




module.exports = db;
module.exports = db2;