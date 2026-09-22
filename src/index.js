/**
 * The local workbench
 */

import { writeFileSync } from "fs";

const filesBaseDir =
  "C:\\Users\\marco\\Documents\\VivaLaVida\\projects\\new-cassini-base\\docs\\Cassini1FullTrajectory\\";

const gregorianStart = "2004-06-30";
const gregorianEnd = "2004-07-02";

// 601         'MIMAS'                 SI
// 602         'ENCELADUS'             SII
// 603         'TETHYS'                SIII
// 604         'DIONE'                 SIV
// 605         'RHEA'                  SV
// 606         'TITAN'                 SVI

const queryParams = new URLSearchParams({
  format: "text",
  COMMAND: "@609",
  OBJ_DATA: "YES",
  MAKE_EPHEM: "YES",
  EPHEM_TYPE: "VECTORS",
  CENTER: "@699",
  START_TIME: gregorianStart,
  STOP_TIME: gregorianEnd,
  STEP_SIZE: "5m",
});

async function initModule() {
  const response = await fetch(
    `https://ssd.jpl.nasa.gov/api/horizons.api?${queryParams.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.text();
  writeFileSync(`${filesBaseDir}129_2004-07-01-κρονος-phoebe.txt`, data, "utf-8");
}

initModule();
