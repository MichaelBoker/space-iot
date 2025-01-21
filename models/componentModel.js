import mongoose from "mongoose";
import { SENSOR_STATUS, MESSAGE_TYPES } from "../utils/constant.js";

const notificationModel = new mongoose.Schema({
  messageType: {
    type: String,
    enum: [MESSAGE_TYPES.INFO, MESSAGE_TYPES.WARNING, MESSAGE_TYPES.ERROR],
  },
  content: {
    type: String,
  },
  resolve: {
    type: Boolean,
    default: true,
  },
  notifyTime: {
    type: Date,
    default: new Date(),
  },
});

const ComponentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    vessel: {
      type: mongoose.Types.ObjectId,
      ref: "Vessel",
    },
    status: {
      type: String,
      default: SENSOR_STATUS.OK,
      enum:[
        SENSOR_STATUS.OK,
        SENSOR_STATUS.WARN,
        SENSOR_STATUS.BAD
      ]
    },
    notifications: [{ type: notificationModel }],
    newNotifications: { type: Number, default: 0 },
    currentData: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Component", ComponentSchema);
