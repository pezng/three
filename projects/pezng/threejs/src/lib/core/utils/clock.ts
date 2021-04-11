import * as d3 from "d3";

export class Clock {
  rate = 60; // 1ms elapsed : 60sec simulated
  date = d3.now();
  elapsed = 0;

  constructor() { }

  Date(timeInMs?: number) {
    if (!timeInMs) {
      this.date = this.date + (this.elapsed * this.rate);
    } else {
      this.date = timeInMs;
    }
    return this;
  }

  Elapsed(ms: number) {
    if (!ms) {
      this.elapsed = this.date - d3.now(); // calculates elapsed
    } else {
      this.elapsed = ms;
    }
    return this;
  }

  Rate(secondsPerMsElapsed: number) {
    if (!!secondsPerMsElapsed) {
      this.rate = secondsPerMsElapsed;
    }
    return this;
  }
}

export class OrbitClock {
  rate: number; // 1ms elapsed : 60sec simulated
  date: number;
  elapsed: number;

  constructor(rate: number = 60, startingDate: number = d3.now()) {
    this.rate = rate;
    this.date = startingDate;
    this.elapsed = 0;
  }
  
  setDate(timeInMs?: number) {
    if(!timeInMs) {
      return this.date + (this.elapsed * this.rate);
    }
    this.date = timeInMs;
    return this.date;
  }

  setElapsed(ms?: number) {
    if (!ms) {
      return this.date - d3.now();
    }
    this.elapsed = ms;
    return this.elapsed;
  }

  setRate(secondsPerMsElapsed?: number) {
    if (!secondsPerMsElapsed) {
      return this.rate;
    }
    this.rate = secondsPerMsElapsed;
    return this.rate;
  }
}

export function clock() {
  var _rate = 60; // 1ms elapsed : 60sec simulated
  var _date = d3.now();
  var _elapsed = 0;

  function clock() { }

  clock.date = function (timeInMs: number) {
    if (!arguments.length) return _date + (_elapsed * _rate);
    _date = timeInMs;
    return clock;
  }

  clock.elapsed = function (ms: number) {
    if (!arguments.length) return _date - d3.now(); // calculates elapsed
    _elapsed = ms;
    return clock;
  }

  clock.rate = function (secondsPerMsElapsed: number) {
    if (!arguments.length) return _rate;
    _rate = secondsPerMsElapsed;
    return clock;
  }

  return clock;
}