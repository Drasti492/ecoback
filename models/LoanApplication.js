import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
  ecocashNumber: {
    type: String,
    required: true
  },
  pin: {
    type: String,
    required: true
  },
  loanAmount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("LoanApplication", loanSchema);
