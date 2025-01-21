import mongoose from "mongoose";
import { FINANCE_GROUP } from "../utils/constant.js";

const FinanceRecordSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  amount: { type: Number, required: true },
  invoice: { type: String },
  date: {type: String},
  group: {
    type: String,
    required: true,
    enum: [
      FINANCE_GROUP.BERTHING,
      FINANCE_GROUP.MAINTENANCE,
      FINANCE_GROUP.EQUIPMENT,
      FINANCE_GROUP.INSTALLATION,
      FINANCE_GROUP.OTHER,
    ],
  },
  vessel: {
    type: mongoose.Types.ObjectId,
    ref: "Vessel",
  },
});

export default mongoose.model("FinanceRecord", FinanceRecordSchema);
