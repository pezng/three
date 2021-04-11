import * as d3 from "d3";
import { SatRec, twoline2satrec } from "satellite.js";
import { satrecToFeature } from "./conversion";

export class TwoLineElement {
    _properties!: (arg0: any) => { height: any; };
    _date!: number;
    _lines = (arry: any) => {
      return arry.slice(0, 2);
    };

    constructor() {}
  
    satrecs = (tles: string[][]): SatRec[] => {
      return tles.map((d) => {
        return twoline2satrec.apply(null, this._lines(d));
      });
    }
  
    features = (tles: any[]) => {
      const date = this._date || d3.now();
  
      return tles.map((d: any) => {
        const satrec = twoline2satrec.apply(null, this._lines(d));
        return satrecToFeature(satrec, new Date(date), this._properties(d));
      });
    }
  
    lines = (func: (arry: any) => any) => {
      if (!func) return this._lines;
      this._lines = func;
      return this;
    }
  
    properties = (func: any) => {
      if (!func) return this._properties;
      this._properties = func;
      return this;
    }
  
    date = (ms: any) => {
      if (!ms) return this._date;
      this._date = ms;
      return this;
    }

  }