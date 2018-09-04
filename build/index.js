'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcPercentages = exports.calcZones = undefined;

var _calcZones = require('./calc-zones');

Object.defineProperty(exports, 'calcZones', {
  enumerable: true,
  get: function get() {
    return _calcZones.calcZones;
  }
});

var _calcPercentages = require('./calc-percentages');

Object.defineProperty(exports, 'calcPercentages', {
  enumerable: true,
  get: function get() {
    return _calcPercentages.calcPercentages;
  }
});

var _processConsole = require('./process-console');

// Process for console access
if (process.argv.length > 0) {
  var args = (0, _processConsole.processOnConsole)(process.argv);

  if (typeof args !== 'undefined') {
    console.log((0, _calcZones.calcZones)(args.watts, args.hr));

    if (args.percentages && args.percentages.length > 0) {
      console.log((0, _calcPercentages.calcPercentages)(args.watts, args.percentages));
    }
  }
}

// for other uses