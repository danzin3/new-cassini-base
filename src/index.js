import { readFileSync } from "fs";

class Spacecraft {
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

  constructor() {
    //
  }
}

const filesBaseDir =
  "C:\\Users\\marco\\Documents\\VivaLaVida\\projects\\new-cassini-base\\docs\\SunAsCenter\\";

const contentText = readFileSync(
  `${filesBaseDir}1_SunCassiniTelemetry.txt`,
  "utf-8",
);

console.log("Valor obtido com a leitura: ", contentText);
