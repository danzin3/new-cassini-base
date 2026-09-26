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
// 607         'HYPERION'              SVII
// 608         'IAPETUS'               SVIII
// 609         'PHOEBE'                SIX

const queryParams = new URLSearchParams({
  format: "text",
  COMMAND: "@10",
  OBJ_DATA: "YES",
  MAKE_EPHEM: "YES",
  EPHEM_TYPE: "VECTORS",
  CENTER: "@699",
  START_TIME: gregorianStart,
  STOP_TIME: gregorianEnd,
  STEP_SIZE: "60m",
});

async function initModule() {
  const response = await fetch(
    `https://ssd.jpl.nasa.gov/api/horizons.api?${queryParams.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.text();
  writeFileSync(
    `${filesBaseDir}132_2004-07-01-κρονος-sun.txt`,
    data,
    "utf-8",
  );
}

initModule();
