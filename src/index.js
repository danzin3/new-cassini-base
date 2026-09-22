/**
 * The local workbench
 */

import { writeFileSync } from "fs";

const filesBaseDir =
  "C:\\Users\\marco\\Documents\\VivaLaVida\\projects\\new-cassini-base\\docs\\Cassini1FullTrajectory\\";

const gregorianStart = "2000-04-12";
const gregorianEnd = "2000-04-13";

const queryParams = new URLSearchParams({
  format: "text",
  COMMAND: "@8",
  OBJ_DATA: "YES",
  MAKE_EPHEM: "YES",
  EPHEM_TYPE: "VECTORS",
  CENTER: "@0",
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
  writeFileSync(`${filesBaseDir}110_2000-04-12-ss-neptune-bcenter.txt`, data, "utf-8");
}

initModule();
