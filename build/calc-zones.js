"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cleanNumber = function cleanNumber(number) {
  return Math.floor(number);
};

var ZONE_CALC = {
  Zone1: {
    PowerLow: .55,
    PowerHigh: .55,
    HRLow: .68,
    HRHigh: .68
  },
  Zone2: {
    PowerLow: .56,
    PowerHigh: .75,
    HRLow: .69,
    HRHigh: .83
  },
  Zone3: {
    PowerLow: .76,
    PowerHigh: .9,
    HRLow: .84,
    HRHigh: .94
  },
  Zone4: {
    PowerLow: .91,
    PowerHigh: 1.05,
    HRLow: .95,
    HRHigh: 1.05
  },
  Zone5: {
    PowerLow: 1.06,
    PowerHigh: 1.20,
    HRLow: 1.06,
    HRHigh: 1.06
  },
  Zone6: {
    PowerLow: 1.21,
    PowerHigh: 1.5,
    HRLow: undefined,
    HRHigh: undefined
  }
};

var calcZones = exports.calcZones = function calcZones(watts, hr) {
  if (isNaN(watts)) {
    return { error: "Watts was provided, but was not a number." };
  }

  if (typeof hr !== 'undefined' && isNaN(hr)) {
    return { error: "HR was provided, but was not a number." };
  }

  return {
    Zone1: {
      name: "Zone 1: Active Recovery",
      short: "AR",
      desc: "Increase blood flow to muscles to flush out waste products and provide nutrients",
      benefits: "Promotes recovery and therefore training response",
      avgPower: {
        low: 0,
        high: cleanNumber(watts * ZONE_CALC.Zone1.PowerHigh)
      },
      avgHr: hr ? {
        low: cleanNumber(cleanNumber(hr * ZONE_CALC.Zone1.HRLow)),
        high: undefined
      } : undefined
    },
    Zone2: {
      name: "Zone 2: Endurance",
      short: "EN",
      desc: "Improves fat metabolism and ability to use oxygen, produce power and increases efficiency. Increases economy",
      benefits: "More efficient use of energy. Able to produce more power with the same level of effort, works on technique/skill",
      avgPower: {
        low: cleanNumber(watts * ZONE_CALC.Zone2.PowerLow),
        high: cleanNumber(watts * ZONE_CALC.Zone2.PowerHigh)
      },
      avgHr: hr ? {
        low: cleanNumber(hr * ZONE_CALC.Zone2.HRLow),
        high: cleanNumber(hr * ZONE_CALC.Zone2.HRHigh)
      } : undefined
    },
    Zone3: {
      name: "Zone 3: Tempo",
      short: "TE",
      desc: "Improves carbohydrate metabolism, gives fast twitch muscle slow-twitch muscle characteristics",
      benefits: "Improved sustainable power, good for all cycling events",
      avgPower: {
        low: cleanNumber(watts * ZONE_CALC.Zone3.PowerLow),
        high: cleanNumber(watts * ZONE_CALC.Zone3.PowerHigh)
      },
      avgHr: hr ? {
        low: cleanNumber(hr * ZONE_CALC.Zone3.HRLow),
        high: cleanNumber(hr * ZONE_CALC.Zone3.HRHigh)
      } : undefined
    },
    Zone4: {
      name: "Zone 4: Lactate Threshold",
      short: "TH",
      desc: "Improves carbohydrate metabolism, develops lactate threshold, changes some fast twitch muscle to slow-twitch",
      benefits: "Improved sustainable race pace, useful during tapering or pre-competition periods: too much time in this zone can cause staleness",
      avgPower: {
        low: cleanNumber(watts * ZONE_CALC.Zone4.PowerLow),
        high: cleanNumber(watts * ZONE_CALC.Zone4.PowerHigh)
      },
      avgHr: hr ? {
        low: cleanNumber(hr * ZONE_CALC.Zone4.HRLow),
        high: cleanNumber(hr * ZONE_CALC.Zone4.HRHigh)
      } : undefined
    },
    Zone5: {
      name: "VO2max",
      short: "VO2max",
      desc: "Develops cardiovascular system and VO2max, improves anaerobic energy production and speeds turnover of waste products",
      benefits: "Improved time trialling ability and resistance to short-term fatigue",
      avgPower: {
        low: cleanNumber(watts * ZONE_CALC.Zone5.PowerLow),
        high: cleanNumber(watts * ZONE_CALC.Zone5.PowerHigh)
      },
      avgHr: hr ? {
        low: cleanNumber(hr * ZONE_CALC.Zone5.HRLow)
      } : undefined
    },
    Zone6: {
      name: "Anaerobic Capacity",
      short: "??",
      desc: "Increases maximum muscle power, develops cardiovascular system and VO2max, increases threshold",
      benefits: "Sprint speed, ability to accelerate away from a group and tolerate lots of hard work, such as mountain climbing",
      avgPower: {
        low: cleanNumber(watts * ZONE_CALC.Zone6.PowerLow),
        high: cleanNumber(watts * ZONE_CALC.Zone6.PowerHigh)
      },
      avgHr: undefined
    }
  };
};