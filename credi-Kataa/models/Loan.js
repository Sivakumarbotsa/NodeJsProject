const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  description: String,
  amount: Number,
  issueDate: Date,
  dueDate: Date,
  frequency: { type: String, enum: ['bi-weekly', 'monthly'] },
  interestPercent: Number,
  graceDays: Number,
  repayments: [
    {
      amount: Number,
      date: Date,
    },
  ]
});

module.exports = mongoose.model('Loan', loanSchema);