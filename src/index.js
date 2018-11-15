import { calcZones } from './calc-zones';
import { calcPercentages } from './calc-percentages';
import { processOnConsole } from './process-console';

// Process for console access
if (typeof process !== 'undefined') {
  if (process.argv && process.argv.length > 0) {
    const args = processOnConsole(process.argv);

    if (typeof args !== 'undefined') {
      console.log(calcZones(args.watts, args.hr));

      if (args.percentages && args.percentages.length > 0) {
        console.log(calcPercentages(args.watts, args.percentages));
      }
    }
  }
}

// for other uses
export { calcZones } from './calc-zones';
export { calcPercentages } from './calc-percentages';
