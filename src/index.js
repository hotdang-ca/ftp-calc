import { calcZones } from './calc-zones';
import { processOnConsole } from './process-console';

// Process for console access
if (process.argv.length > 0) {
  const args = processOnConsole(process.argv);

  if (typeof args !== 'undefined') {
    console.log(calcZones(args.watts, args.hr));
  }
}

// for other uses
export { calcZones } from './calc-zones';
