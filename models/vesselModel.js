import mongoose from "mongoose";

const VesselSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Vessel", VesselSchema);
