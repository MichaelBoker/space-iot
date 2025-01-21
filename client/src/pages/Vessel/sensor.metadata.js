import { SENSOR_STATUS, SENSOR_TYPES } from "../../utils/constant";

export const searchParams = [
    {
        name: "sensorName",
        type: "text",
        label: "Sensor Name"
    },
    {
      name: "type",
      type: "select",
      label: "select type",
      listValues: SENSOR_TYPES,
    },
    {
      name: "status",
      type: "select",
      label: "select status",
      listValues: SENSOR_STATUS,
    },
  ];