### About the project

Destinated to explore and study the Cassini-Huygens official NASA mission telemetry files,
and also some other missions as Mars Perseverance, Voyager and Parker Solar Probe.

### Folder Structure (in short)

data/* Everything associated to databases
docs/* Real telemetry infomation from NASA

src/workbench/* Code used to manipulate Arduino, ESP32, sensors and electricity handling.
The target here, is to keep growing this experiments to reach a real life propusion...
... control system in a near future.

### Curl and dates used on docs/* JPL files

curl -o 1_SunCassiniTelemetry.txt "https://ssd.jpl.nasa.gov/api/horizons.api?format=text&COMMAND='-82'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='VECTORS'&CENTER='@0'&START_TIME='1997-10-16'&STOP_TIME='1997-10-17'&STEP_SIZE='1h'"

1997-10-16^17  First Transmission
1998-04-26^27, Venus
1999-08-18^19, Earth
2000-12-31^2001-01-01, Jupiter
2004-06-30^2004-07-02, SOI
2004-10-26^27, Titan Flyby1
2005-02-17^18, Enceladus Water Discovery
2008-10-09^10, Enceladus closest flyby

Official Website used to get the params availabe on jpl API:
https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/req/naif_ids.html
