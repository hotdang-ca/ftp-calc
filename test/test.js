const assert = require('assert');
const ftpCalc = require('../build/index');

describe('FTPCalc', function() {
  it('it calculates', function() {
    const zones = ftpCalc.calcZones(100, 100);
    assert.ok(zones);
  });

  it('has valid zone values', function() {
    const zones = ftpCalc.calcZones(100, 100);
    assert.ok(zones.Zone1, 'Zone 1');
    assert.ok(zones.Zone2, 'Zone 2');
    assert.ok(zones.Zone3, 'Zone 3');
    assert.ok(zones.Zone4, 'Zone 4');
    assert.ok(zones.Zone5, 'Zone 5');
    assert.ok(zones.Zone6, 'Zone 6');
    assert.equal(Object.keys(zones).length, 6, '6 Zones produced.');
  });

  it('calculates good zone 1 values', function() {
    const zones = ftpCalc.calcZones(100, 100);
    assert.equal(zones.Zone1.avgPower.high, 55, '55% of 100w is 55');
    assert.equal(zones.Zone1.avgHr.low, 68, '68% of 100HR is 68');
  });

  it('calculates good zone 2 values', function() {
    const zones = ftpCalc.calcZones(100, 100);
    assert.equal(zones.Zone2.avgPower.low, 56, '56% of 100w is 56');
    assert.equal(zones.Zone2.avgPower.high, 75, '75% of 100w is 75');
    assert.equal(zones.Zone2.avgHr.low, 69, '69% of 100HR is 69');
    assert.equal(zones.Zone2.avgHr.high, 83, '83% of 100HR is 83');
  });

  it('calculates good zone 3 values', function() {
    const zones = ftpCalc.calcZones(100, 100);
    assert.equal(zones.Zone3.avgPower.low, 76, '76% of 100w is 76');
    assert.equal(zones.Zone3.avgPower.high, 90, '90% of 100w is 90');
    assert.equal(zones.Zone3.avgHr.low, 84, '84% of 100HR is 84');
    assert.equal(zones.Zone3.avgHr.high, 94, '94% of 100HR is 94');
  });

  it('calculates good zone 4 values', function() {
    const zones = ftpCalc.calcZones(100, 100);
    assert.equal(zones.Zone4.avgPower.low, 91, '91% of 100w is 91');
    assert.equal(zones.Zone4.avgPower.high, 105, '105% of 100w is 105');
    assert.equal(zones.Zone4.avgHr.low, 95, '95% of 100HR is 95');
    assert.equal(zones.Zone4.avgHr.high, 105, '83% of 100HR is 83');
  });

  it('calculates good zone 5 values', function() {
    const zones = ftpCalc.calcZones(100, 100);
    assert.equal(zones.Zone5.avgPower.low, 106, '106% of 100w is 106');
    assert.equal(zones.Zone5.avgPower.high, 120, '120% of 100w is 120');
    assert.equal(zones.Zone5.avgHr.low, 106, '106% of 100HR is 106');
  });

  it('calculates good zone 6 values', function() {
    const zones = ftpCalc.calcZones(100, 100);
    assert.equal(zones.Zone6.avgPower.low, 121, '121% of 100w is 121');
    assert.equal(zones.Zone6.avgPower.high, 150, '150% of 100w is 150');
  });

  it('calculates percentages', function() {
    const percentages = ftpCalc.calcPercentages(100, '80,100,120');
    assert.equal(percentages['80%'], 80, '80% of 100w is 80');
    assert.equal(percentages['100%'], 100, '100% of 100w is 100');
    assert.equal(percentages['120%'], 120, '120% of 100w is 120');
  });
});
