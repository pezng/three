import * as d3 from 'd3';
import { SatRec } from 'satellite.js';
import { LineSegments, Vector3, BufferGeometry, Vector2 } from 'three';
import { satrecToXYZ } from './conversion';


// Converts a point [longitude, latitude] in degrees to a THREE.Vector3.
export const vertex = (point: number[], radius: number) => {
    var lambda = point[0] * Math.PI / 180,
        phi = point[1] * Math.PI / 180,
        cosPhi = Math.cos(phi);
    return new Vector3(
        radius * cosPhi * Math.cos(lambda),
        radius * cosPhi * Math.sin(lambda),
        radius * Math.sin(phi)
    );
}

export const satelliteVector = (satrec: SatRec, date: Date) => {
    var xyz = satrecToXYZ(satrec, date);
    var lambda = xyz[0];
    var phi = xyz[1];
    var cosPhi = Math.cos(phi);
    var r = ((xyz[2] + 6371) / 6371) * 228;
    return new Vector3(
        r * cosPhi * Math.cos(lambda),
        r * cosPhi * Math.sin(lambda),
        r * Math.sin(phi)
    );
}

// Converts a GeoJSON MultiLineString in spherical coordinates to a THREE.LineSegments.
export const wireframe = (multilinestring: {coordinates: any[]}, material: any) => {
    var geometry = new BufferGeometry;
    let vertices: Vector2[] = [];
    multilinestring.coordinates.forEach((line) => {
        d3.pairs(line.map(vertex), (a: number, b: number) => {
            vertices.push(
                new Vector2(a, b)
            )
        });
    });
    geometry.setFromPoints(vertices)
    return new LineSegments(geometry, material);
}

// See https://github.com/d3/d3-geo/issues/95
export const graticule10 = () => {

    const graticuleX = (y0: number, y1: number, dy: number) => {
        var y = d3.range(y0, y1 - epsilon, dy).concat(y1);
        return (x: number) => { return y.map(function (y) { return [x, y]; }); };
    }

    const graticuleY = (x0: number, x1: number, dx: number) => {
        var x = d3.range(x0, x1 - epsilon, dx).concat(x1);
        return (y: number) => { return x.map(function (x) { return [x, y]; }); };
    }

    var epsilon = 1e-6,
        x1 = 180, x0 = -x1, y1 = 80, y0 = -y1, dx = 10, dy = 10,
        X1 = 180, X0 = -X1, Y1 = 90, Y0 = -Y1, DX = 90, DY = 360,
        x = graticuleX(y0, y1, 2.5), y = graticuleY(x0, x1, 2.5),
        X = graticuleX(Y0, Y1, 2.5), Y = graticuleY(X0, X1, 2.5);

    return {
        type: 'MultiLineString',
        coordinates: d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X)
            .concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y))
            .concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function (x) { return Math.abs(x % DX) > epsilon; }).map(x))
            .concat(d3.range(Math.ceil(y0 / dy) * dy, y1 + epsilon, dy).filter(function (y) { return Math.abs(y % DY) > epsilon; }).map(y))
    };
}
