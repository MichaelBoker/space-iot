import { ChargerConnectionHandler, ChargerSupplyHandler, GenSetPowerSupplyHandler, ShorePowerSupplyHandler } from "./batteryHandler.js"


const batteryLowVolHandler =new ChargerSupplyHandler(new ChargerConnectionHandler(new GenSetPowerSupplyHandler(new ShorePowerSupplyHandler())))

export const ERRORS_MAP = {
    BATTERY_LOW_VOLTAGE : batteryLowVolHandler
}