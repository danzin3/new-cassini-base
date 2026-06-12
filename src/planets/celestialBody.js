export class CelestialBody {
  name = "";
  
  // Physical Properties
  totalMassKg = 0.0;
  radiusEquator = 0.0;
  radiusPolar = 0.0;
  sphereOfInfluence = 0.0;

  // Orbital Elements (Keplerian - J2000 Epoch)
  semiMajorAxis = 0.0; // km
  eccentricity = 0.0; // Ellipse shape
  inclination = 0.0; // degrees
  longitudeAscendingNode = 0.0; // degrees
  argumentOfPeriapsis = 0.0; // degrees
  meanAnomalyAtEpoch = 0.0; // degrees
  epoch = 2451545.0; // Default to J2000 Julian Date
}
