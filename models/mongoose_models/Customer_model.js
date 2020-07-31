const mongoose = require('./mongoose_connect');
const { Int32 } = require('mongodb');
// Creating the Customer Schema
var CustomerSchema = new mongoose.Schema(
    {
    /*CustomerId: {
        type: Number,
        unique: true
    },*/
    CustFirstName: {
        type: String,
        required: true
    },
    CustLastName: {
        type: String,
        required: true
    },
    CustAddress: String,
    CustCity: String,
    CustProv: String,
    CustPostal: String,
    CustCountry: String,
    CustHomePhone: {
        type: String,
        required: true
    },
    CustBusPhone: String,
    /*CustEmail: {
        type: String,
        unique: true
    },*/
    /*AgentId: Number*/
});
// Creating the Customer collection Model
module.exports = mongoose.model('Customer', CustomerSchema);
