### About the project

A reproducible reconstruction of Cassini-Huygens mission analysis using NASA/JPL public data, JavaScript, C++, embedded telemetry and orbital mechanics.

### Folder Structure (in short)

data/* Everything associated to databases

docs/* Real telemetry infomation from NASA

src/workbench/* Code used to manipulate Arduino, ESP32, sensors and electricity handling.
The target here, is to keep growing this experiments to reach a real life propusion...
... control system in a near future.

### Curl and dates used on docs/* JPL files

curl -o outputFileName.txt "https://ssd.jpl.nasa.gov/api/horizons.api?format=text&COMMAND='-82'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='VECTORS'&CENTER='@0'&START_TIME='1997-10-16'&STOP_TIME='1997-10-17'&STEP_SIZE='5m'"

1997-10-16^17,  First Transmission

1997-11-06^7, Ela voou para longe do sol Afélio ~1.011 UA

1998-03-27^28, ήλιος περιέλιος ~0.6732 UA

1998-04-26^27, VenusFlyBy1 Altitude ~284km Δν=11.8km/s

1998-12-03^04, DSM Burn of R-4D-11 Δν + 450m/s

1998-12-07^8, Novo Afélio ~1.58 UA

1999-06-24^25, VenusFlyBy2 Altitude ~603km Δν=13.6km/s

1999-06-29^30, νέο περιέλιος ~0.7211 UA

1999-08-18^19, EarthFlyBy Altitude ~1175km Δν=19.0km/s

# Jupiter e Saturno com coordenadas do centro de massa real
1999-12-11^12, Entrando no cinturão de asteroides ~2.2 UA

2000-04-12^13, Saindo do cinturão de asteriodes ~3.3 UA
#
2000-12-30^31, JupiterFlyBy Altitude ~9722965 Δν=11.60km/s

2004-06-30^2004-07-02, SOI

Eventos internos do sistema saturniano.

Official Website used to get the params availabe on jpl API:
https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/req/naif_ids.html
