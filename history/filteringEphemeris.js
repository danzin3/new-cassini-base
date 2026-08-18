/**
 * How to extract only the Ephemeris values from NASA answer.
 * 1) Read and Write files;
 * 2) String manipulation.
 */

import { readFileSync, writeFileSync } from "fs";

const filesBaseDir =
  "C:\\Users\\marco\\Documents\\VivaLaVida\\projects\\new-cassini-base\\docs\\SunAsCenter\\";

const localFileNames = [
  `${filesBaseDir}1_SunCassiniTelemetry.txt`,
  `${filesBaseDir}2_SunCassiniTelemetryVenus.txt`,
  `${filesBaseDir}3_SunCassiniTelemetryEarth.txt`,
  `${filesBaseDir}4_SunCassiniTelemetryJupiter.txt`,
  `${filesBaseDir}5_SunCassiniTelemetrySOI.txt`,
  `${filesBaseDir}6_SunCassiniTelemetryTitan.txt`,
  `${filesBaseDir}7_SunCassiniTelemetryEnceladus.txt`,
  `${filesBaseDir}8_SunCassiniTelemetryEnceladusPlume.txt`,
];

const outputScrap = [""];

for (let i = 0; i < 8; i++) {
  const contentText = readFileSync(localFileNames[i], "utf-8");
  const startIndex = contentText.indexOf("$$SOE");
  const endIndex = contentText.indexOf("$$EOE", startIndex);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    // $$SOE -> 5 char
    const payload = contentText.slice(startIndex + 5, endIndex);
    outputScrap.push(payload);
  }
}

const finalScrap = outputScrap.join("\n");
writeFileSync("outputFileName.txt", finalScrap, "utf-8");
