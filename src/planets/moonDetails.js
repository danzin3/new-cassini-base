import { CelestialBody } from "./celestialBody";

export class MoonDetails extends CelestialBody {
  constructor(name) {
    this.name = name;
  }

  getPeriapsis() {
    return this.semiMajorAxis * (1 - this.eccentricity);
  }

  getApoapsis() {
    return this.semiMajorAxis * (1 + this.eccentricity);
  }

  /**
   * Vis-Viva Equation - つき月 φεγγάρη
   * @param {Number} r The current distance from the parent planet
   * @param {Number} a The semi-major axis
   * @param {Number} massKg The mass of the parent planet
   */
  getInstantaneousVelocity(r, a, massKg) {
    return Math.sqrt(Gravitational_Constant * massKg * (2 / r - 1 / a));
  }
}
