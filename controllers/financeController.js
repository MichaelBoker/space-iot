import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../utils/customErrors.js";
import Finance from "../models/financeModel.js";

const getFinance = async (req, res) => {
  const {vesselId} = req.user
  const { amount, dateFrom, dateTo, group } = req.query

  const queryObject = {
    vessel: vesselId
  }

  if(dateFrom){
    queryObject.dateFrom= {$gte:ISODate(dateFrom)}
  }
  if(dateTo){
    queryObject.dateTo = {$lte:ISODate(dateTo)}
  }
  if(amount){
    const amountRange = amount.split('-')
    queryObject.amount = {$gte:Number(amountRange[0]),$lt:Number(amountRange[0])}
  }

  if(group){
    queryObject.group = group
  }

  const finance = await Finance.find(queryObject);
  res.status(StatusCodes.OK).json({ finance });
};

const addRecord = async (req, res) => {
  req.body.vessel = req.user.vesselId;

  const record = await Finance.create(req.body);

  res
    .status(StatusCodes.CREATED)
    .json({ msg: "record created", record: record });
};

const getRecord = async (req, res) => {
  const { id } = req.params;

  const record = await Finance.findById(id);
  if (!record) throw new NotFoundError(`No record with id ${id}`);

  res.status(StatusCodes.OK).json({ record });
};

export { getFinance, getRecord, addRecord };
