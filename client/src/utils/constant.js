import { PiBatteryChargingVerticalBold } from "react-icons/pi";

import { IoCheckmarkCircleOutline, IoWarningOutline, IoCloseCircleOutline } from "react-icons/io5";

export const BASE_URL = "/api/v1"

export const FINANCE_GROUP = [
    "Installation",
    "Equipment",
    "Maintenance",
    "Berthing",
    "Other"
]

export const SENSOR_TYPES = [
    "Electricity",
    "Temperature",
]

export const SENSOR_STATUS= [
    {title:"OK", value:"OK"},
    {title:"Warning", value:"WARN"},
    {title:"Error", value: "BAD"}
]

// icons
export const SENSOR_TYPES_ICON = {
    ELECTRICITY: PiBatteryChargingVerticalBold
}

export const SENSOR_STATUS_ICON = {
    OK: IoCheckmarkCircleOutline,
    WARN: IoWarningOutline,
    BAD: IoCloseCircleOutline
}

// charts
export const PIE_CHART_COLORS = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(28 255 0, 0.2)",
  ];