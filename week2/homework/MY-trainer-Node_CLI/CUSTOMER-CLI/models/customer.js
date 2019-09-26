const mongoose = require('module');

const customerSchema = mongoose.Schema({
  firstname: {type: String},
  lastname: {type: String},
  phone: {type: String},
  email: {type: String}
});

module.exports = mongoose.model('Customer', customerSchema);
