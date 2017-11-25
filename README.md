#Functional Threashold Power Calculator

This node module allows you to supply your average watts during a 20-minute FTP test (and optionally, average heart rate), and produce results for your Threshold Zones.

## Usage
`npm install --save ftp-calc`

Then, in your (ES2015+) source code: 

```
import { calcZones } from 'ftp-calc';

const watts = 195;
const hr = 170;

const zones = calcZones(watts, hr);
```

Provided `watts` and `hr` resolve to a number, you'll get an object, `zones`, which has 6 Objects named "`Zone1`" through to "`Zone6`".

Each zone has a `name` prop, a `short` prop for the abbreviation, `desc` and `benefits` props for optional display, and then, **_the good stuff_**:

- `avgPower` has a `low` and `high` value.
- `avgHr` will also have a `low` and `high` value, if you supplied `hr` to `calcZones()`.

Sample: 

```
{
	Zone1: {
		name: 'Zone 1: Active Recovery',
		short: 'AR',
		desc: 'Increase blood flow to muscles to flush out waste products and provide nutrients',
		benefits: 'Promotes recovery and therefore training response',
		avgPower: { low: 0, high: 107 },
		avgHr: { low: 115, high: undefined }
	},
	
	Zone2: {
		name: 'Zone 2: Endurance',
		short: 'EN',
		desc: 'Improves fat metabolism and ability to use oxygen, produce power and increases efficiency. Increases economy',
		benefits: 'More efficient use of energy. Able to produce more power with the same level of effort, works on technique/skill',
		avgPower: { low: 109, high: 146 },
		avgHr: { low: 117, high: 141 }
	},
}
```

(truncated).

## Methodology
Calculations are based on values provided by [WattBike](https://support.wattbike.com/hc/en-us/articles/115001848349-Functional-Threshold-Power-FTP-Training-Zones). Briefly:

Training Zone | Average Power | Average HR
--- | --- | ---
Zone 1 (Active Recovery) | < 55% | < 68%
Zone 2 (Endurance) | 56 – 75% | 68 – 83%
Zone 3 (Tempo) | 76 – 90% | 84 – 94%
Zone 4 (Lactate Threshold) | 91 – 105% | 95 – 105%
Zone 5 (VO2max) | 106 – 120% | > 106%
Zone 6 (Anaerobic Capacity) | 121 – 150% | N/A (are you dead yet?)

I'd highly recommend that you not only consult your physician before undergoing any intense training or excercise, but that you use the values in this node module **at your own risk**. 

If these numbers aren't what you'd expect, fork the repo and make changes to the `ZONE_CALC` object. Optionally, open a pull request :-).

## Contributing
Oh, please do! PRs actively monitored and encouraged.

## License
Copyright 2017 James Robert Perih

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.