/**
 * The Equatorial Bulge:
 * Planets are not perfect spheres;
 * because they spin, centrifugal force makes them
 * bulge at the equator and flatten at the poles.
 */

import { Gravitational_Constant, Sun_Mass } from "../constants/physics";
import { CelestialBody } from "./celestialBody";
import { MoonDetails } from "./moonDetails";

export class Earth extends CelestialBody {
  aphelionDistance = 0.0;
  aphelionMonths = [6, 7, 8, 9]; // Earth only
  perihelionDistance = 0.0;
  perihelionMonths = [2, 3, 4, 5]; // Earth only
  oblatenessJ2 = 0.0; // Equatorial Bulge
  escapeVelocity = 0.0;
  sphereOfInfluence = 0.0;

  // Rotational Properties
  axialTilt = 0.0; // degrees
  sideralRotationPeriod = 0.0; // hours
  rightAscensionPole = 0.0; // degrees
  declinationPole = 0.0; // degrees

  /** @type {MoonDetails[]} */
  moons = [];

  constructor() {
    super();
    this.name = "Earth";
    this.moons.push(new MoonDetails("φεγγάρι"));
  }

  /**
   * Vis-Viva Equation - Planet
   * @param {Number} r The current distance from the sun
   * @param {Number} a The semi-major axis
   */
  orbitalSpeed(r, a) {
    return Math.sqrt(Gravitational_Constant * Sun_Mass * (2 / r - 1 / a));
  }
}
