import { readFileSync } from "fs";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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

  /**
   * @param {string} targetDate - format: yyyy-mm-dd
   * @param {string} centerReference - barycenter reference: sun or planet
   * @returns {Array} Daily Speed by hour (24 elements)
   */
  getDailySpeed(targetDate, centerReference) {
    const [year, monthNumberStr, day] = targetDate.split("-");
    const monthIndex = parseInt(monthNumberStr, 10) - 1;
    const targetPattern = `${year}-${monthNames[monthIndex]}-${day}`;
    const response = [];
    let targetTelemetry = null;

    switch (centerReference) {
      case "sun":
        targetTelemetry = this.sunAsCenterTelemetry;
        break;

      case "planet":
        targetTelemetry = this.planetAsCenterTelemetry;
        break;

      default:
        break;
    }

    targetTelemetry.forEach((item, index) => {
      if (item.tdbDate.includes(targetPattern)) {
        response.push({
          index,
          hour: item.tdbDate.split(" ")[2],
          speed: Math.sqrt(
            Math.pow(item.vx, 2) + Math.pow(item.vy, 2) + Math.pow(item.vz, 2),
          ),
        });
      }
    });

    return response;
  }
}

const obj = new Cassini1Spacecraft();

console.log(obj.getDailySpeed("1998-04-26", "sun"));
