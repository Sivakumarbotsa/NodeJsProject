const Loan = require('../models/Loan');

exports.createLoan = async (req, res) => {
  const loan = new Loan({ ...req.body, userId: req.user._id });
  await loan.save();
  res.status(201).json(loan);
};

exports.getLoans = async (req, res) => {
  const loans = await Loan.find({ userId: req.user._id }).populate('customerId');
  res.json(loans);
};
