import Handler from "../handlers/basicHandler.js";

class ChargerSupplyHandler extends Handler {
  handleRequest(req) {
    const { BatteryCharger } = req.vesselData;

    req.report.errorLogs.push({
      label: "Charger Supply",
      value: `${BatteryCharger.currentData} V`,
    });

    if (Number(BatteryCharger.currentData) > 12) {
      return super.handleRequest(req);
    }

    req.report.finalError = `Charger Malfunction`;
    req.report.suggestion = `Contact an electrician`;

    return req.report;
  }
}

class ChargerConnectionHandler extends Handler {
  handleRequest(req) {
    const { BatteryCharger } = req.vesselData;
    req.report.errorLogs.push({
      label: "Charger Connection",
      value: BatteryCharger.isConnected,
    });

    if (BatteryCharger.isConnected) {
      req.report.finalError = `too many power consumer`;
      req.report.suggestion = `reduce power consumer until battery level is OK`;

      return req.report;
    }

    return super.handleRequest(req);
  }
}

class ShorePowerSupplyHandler extends Handler {
  handleRequest(req) {
    const { ShorePower } = req.vesselData;
    req.report.errorLogs.push({
      label: "Shore Power Connection",
      value: ShorePower.isConnected ? "connected" : "off",
    });

    if (ShorePower.isConnected) {
      return super.handleRequest(req);
    }

    req.report.finalError = `Shore Power not Connected`;
    req.report.suggestion = `Connect Shore Power`;

    return req.report;
  }
}

class GenSetPowerSupplyHandler extends Handler {
  handleRequest(req) {
    const { Generators } = req.vesselData;
    req.report.errorLogs.push({
      label: "Generators",
      value: Generators.isConnected ? "running" : "off",
    });

    if (Generators.isConnected) {
      req.report.finalError = `Generators Malfunction`;
      req.report.suggestion = `Connect Shore Power, contact generators service`;

      return req.report;
    }

    return super.handleRequest(req);
  }
}

export {
  GenSetPowerSupplyHandler,
  ChargerConnectionHandler,
  ChargerSupplyHandler,
  ShorePowerSupplyHandler,
};
