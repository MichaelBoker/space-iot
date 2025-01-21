import { FINANCE_GROUP } from "../../utils/constant";

export const searchParams = [
  {
    name: "amount",
    type: "select",
    label: "amount range",
    listValues: ["0 - 499", "500 - 1999", "2000 - 4999", "5000 - 10000"],
  },
  {
    name: "date",
    type: "date",
  },
  {
    name: 'group',
    type: 'select',
    label: 'select group',
    listValues: FINANCE_GROUP
  },
];
