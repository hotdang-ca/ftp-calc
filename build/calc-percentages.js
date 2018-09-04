'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var calcPercentages = exports.calcPercentages = function calcPercentages(averageWatts, percentagesString) {
  var percentages = percentagesString.split(',');
  var percentageZones = {};

  percentages.forEach(function (percentage) {
    percentageZones[percentage.toString() + '%'] = parseInt(percentage / 100 * averageWatts, 10);
  });

  return percentageZones;
};