import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    vessel: {
      type: mongoose.Types.ObjectId,
      ref: "Vessel",
    },
  },
  { timestamps: true }
);

UserSchema.methods.getUser = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", UserSchema);
