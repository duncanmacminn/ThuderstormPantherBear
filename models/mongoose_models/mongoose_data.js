//const Agency = require('./Agency_model')
//const Agent = require('./Agent_model')
const Customer = require('./Customer_model')
// This function is retrieving the contact info from the DB
exports.getCustomerId = (CustomerId, callBack) => {
    if (!CustomerId)
        Customer.find({ CustomerId: {$type: "maxKey"}}, callBack);  // Gets maximum CustomerId
    else
        Customer.find({ CustomerId: agencyId }, callBack);   // Gets specified CustomerId
}

// Creates a new customer
exports.createCustomer = function (customer, callBack) {
    const mycustomer = new Customer(customer);
    //mycustomer.CustomerId = CustomerId + 1; 
    // Customer Mongoose Model
    mycustomer.save(function (err) {    // Saves the customer to the DB
        //if (err) return console.error(err);
        callBack(err, 'Ok');
        return(Customer.CustFirstName);
    })
}

/*// Get the use using the userId // UPDATE THE REST OF THIS CODE IF TIME PERMITS TO QUERY CUSTOMER DATA
exports.getUser = function (userId, callBack) {
    User.findById(userId, (err, data) => {
        //console.log('In getUser')
        //console.log(err, data);
        callBack(err, data); // Send the results back
    });
}

// Get the use using the userId
exports.getUserName = function (Username, callBack) {
    User.findOne({ Username }, (err, data) => {
        //console.log('In getUser')
        //console.log(err, data);
        callBack(err, data); // Send the results back
    });
}*/