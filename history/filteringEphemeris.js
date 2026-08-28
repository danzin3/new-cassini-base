/**
 * How to extract only the Ephemeris values from NASA answer.
 * 1) Read and Write files;
 * 2) String manipulation.
 */

import { readFileSync, writeFileSync } from "fs";

let filesBaseDir =
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

/**
 * Transforming the raw ephemeris data into JS variables
 */

filesBaseDir =
  "C:\\Users\\marco\\Documents\\VivaLaVida\\projects\\new-cassini-base\\docs\\PlanetMoonAsCenter\\πλανήτηςCassiniFiltered.txt";

const contentText = readFileSync(filesBaseDir, "utf-8");
const fullTelemetryFile = contentText.split("\n");
const telemetria = [];

for (let i = 0; i < fullTelemetryFile.length; i++) {
  const currentLine = fullTelemetryFile[i].trim();

  // Ignora linhas vazias (o separador entre os blocos)
  if (currentLine === "") continue;

  const item = {};
  // ---------------------------------------------------------
  // LINHA 0: JD e TDB
  // Ex: "2450737.500000000 = A.D. 1997-Oct-16 00:00:00.0000 TDB"
  // ---------------------------------------------------------
  const partesLinha0 = currentLine.split("=");
  item.julianDate = Number(partesLinha0[0].trim());
  item.tdbDate = partesLinha0[1].trim();

  // ---------------------------------------------------------
  // LINHA 1: X, Y, Z
  // Ex: " X = 1.36E+08 Y = 5.80E+07 Z = 6.37E+04"
  // ---------------------------------------------------------
  i++; // Avança o ponteiro do loop para a próxima linha
  const partesLinha1 = fullTelemetryFile[i].split("=");
  // partesLinha1[1] será " 1.36E+08 Y ". O split(' ')[0] isola apenas o número.
  item.x = Number(partesLinha1[1].trim().split(" ")[0]);
  item.y = Number(partesLinha1[2].trim().split(" ")[0]);
  item.z = Number(partesLinha1[3].trim().split(" ")[0]);

  // ---------------------------------------------------------
  // LINHA 2: VX, VY, VZ
  // Ex: " VX=-8.05E+00 VY= 2.53E+01 VZ= 6.26E-01"
  // ---------------------------------------------------------
  i++;
  const partesLinha2 = fullTelemetryFile[i].split("=");
  item.vx = Number(partesLinha2[1].trim().split(" ")[0]);
  item.vy = Number(partesLinha2[2].trim().split(" ")[0]);
  item.vz = Number(partesLinha2[3].trim().split(" ")[0]);

  // ---------------------------------------------------------
  // LINHA 3: LT, RG, RR
  // Ex: " LT= 4.95E+02 RG= 1.48E+08 RR= 2.51E+00"
  // ---------------------------------------------------------
  i++;
  const partesLinha3 = fullTelemetryFile[i].split("=");
  item.lt = Number(partesLinha3[1].trim().split(" ")[0]);
  item.rg = Number(partesLinha3[2].trim().split(" ")[0]);
  item.rr = Number(partesLinha3[3].trim().split(" ")[0]);

  // Adiciona o objeto estruturado ao array final
  telemetria.push(item);
}

const jsonString = JSON.stringify(telemetria, null, 2);
writeFileSync("finalΠλανήτηςCassiniTelemetry.json", jsonString, "utf-8");
