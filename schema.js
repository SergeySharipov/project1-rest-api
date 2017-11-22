var mongoose = require ("mongoose");

// Create schema for Customer and Order

var schema = {

customerSchema: new mongoose.Schema({
    businessName: String, 
    address: String, 
    telephone: Number,
    contactPerson: String,
    email: String
}),

orderSchema: new mongoose.Schema({
    customer: String, 
    product: String,
    amount: Number,
    discount: Number
})

};

module.exports = schema;