// TLE handling in three.js https://bl.ocks.org/bwswedberg/29bda412413335b705c434e8a0af1f50
import * as satellite from 'satellite.js'

export const radiansToDegrees = (radians: number) => {
    return radians * 180 / Math.PI;
}

export const satrecToFeature = (satrec: satellite.SatRec, date: Date, props: {height: any}) => {
    var properties = props || {};
    const { position } = satellite.propagate(satrec, date);
    const gmst = satellite.gstime(date);
    const positionGd = satellite.eciToGeodetic(position as satellite.EcfVec3<number>, gmst);
    properties.height = positionGd.height;
    return {
        type: 'Feature',
        properties: properties,
        geometry: {
            type: 'Point',
            coordinates: [
                radiansToDegrees(positionGd.longitude),
                radiansToDegrees(positionGd.latitude)
            ]
        }
    };
}

export const satrecToXYZ = (satrec: satellite.SatRec, date: Date) => {
    const { position } = satellite.propagate(satrec, date);
    const gmst = satellite.gstime(date);
    const positionGd = satellite.eciToGeodetic(position as satellite.EcfVec3<number>, gmst);
    return [positionGd.longitude, positionGd.latitude, positionGd.height];
}