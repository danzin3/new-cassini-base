/**
 * The local workbench
 */

import { readFileSync } from "fs";

const sunAsCenterBaseDir =
  "C:\\Users\\marco\\Documents\\VivaLaVida\\projects\\new-cassini-base\\docs\\SunAsCenter\\finalSunCassiniTelemetry.json";

const planetAsCenterBaseDir =
  "C:\\Users\\marco\\Documents\\VivaLaVida\\projects\\new-cassini-base\\docs\\PlanetMoonAsCenter\\finalΠλανήτηςCassiniTelemetry.json";

export class Cassini1Spacecraft {
  powerAtSaturnWatts = 660;
  starCatalogSize = 3700;
  heightMeters = 6.8;
  primarySwLanguage = "Ada";
  transmitterPowerWatts = 19;
  dataRateAtSaturnBps = 140000;
  orbiterInstruments = 12;
  totalSensors = 66;
  fuelMassKg = 3132;
  dataStorageGbits = 4;
  engineeringSubsys = 12;
  engineeringComputers = 26;
  partsCountLabel = "> 100000";
  mainEngineThrustNewtons = 445;
  telemetryMeasuresCount = 11000;
  huygensInstruments = 6;
  radarPowerWatts = 108;

  attitudeControl = {
    attMode: "3-axis stabilized",
    pointingAccuracyMrad: 2.0,
    pointingStabilityMradPer5Sec: 0.036,
  };

  navigationControl = {
    trajectorySource: "Navigation Team",
    trajectoryDataType: "concatenated",
    lastUpdate: "2018-06-29",
    postMissionReconstruction: true,
  };

  sunAsCenterTelemetry = [];
  planetAsCenterTelemetry = [];

  constructor() {
    this.sunAsCenterTelemetry = JSON.parse(
      readFileSync(sunAsCenterBaseDir, "utf8"),
    );
    this.planetAsCenterTelemetry = JSON.parse(
      readFileSync(planetAsCenterBaseDir, "utf8"),
    );
  }
}
