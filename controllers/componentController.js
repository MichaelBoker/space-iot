import { StatusCodes } from "http-status-codes";
import Component from "../models/componentModel.js";
import { NotFoundError, UnauthorizedError } from "../utils/customErrors.js";

const createComponent = async (req, res) => {
  // req.body.vessel = req.user.vesselId;
  req.body.notifications = [];

  const component = await Component.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ msg: "Component created", component: component });
};

const getComponent = async (req, res) => {
  const { id } = req.params;
  const user = req.user;

  let component = await Component.findById(id);

  if (!component) throw new NotFoundError(`No component with id ${id}`);
  if (user.vesselId !== Component.vessel)
    throw new UnauthorizedError("Not authorized");

  res.status(StatusCodes.OK).json({ component });
};

const getAllComponents = async (req, res) => {
  const { status, type } = req.query;

  const queryObject = {};

  if (type) {
    queryObject.type = type;
  }

  if (status) {
    queryObject.status = status;
  }

  const components = await Component.find(queryObject);

  res.status(StatusCodes.OK).json({ components: components });
};

export { createComponent, getAllComponents, getComponent };
