const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost:2717/customercli', {
  useMongoClient: true
});

const Customer = require('./models/customer');

const addCustomer = (customer) => {
  Customer.create(customer).then(customer => {
    console.info('New Customer Added');
    db.close();
  });
};

const findCustomer = () => {
    
}