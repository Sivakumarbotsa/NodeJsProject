const Customer = require('../models/Customer');

exports.addCustomer = async (req, res) => {
  const customer = new Customer({ ...req.body, userId: req.user._id });
  await customer.save();
  res.status(201).json(customer);
};

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find({ userId: req.user._id });
  res.json(customers);
};