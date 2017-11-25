const printUsage = () => {
  return (`
    Prints Functional Threshold Power zones based on input average watts and optionally heart rate.
    usage: <entry-point> [--watts=num | -w=num] [--hr=num | -h=num]
  `);
}

export const processOnConsole = (args) => {
  let watts;
  let hr;

  args.forEach((val, index, array) => {
    try {
      if (val.indexOf('--watts=') > -1 || val.indexOf('-w=') > -1) {
        watts = parseInt(val.split('=')[1], 10);
      }
    } catch (e) {
      watts = undefined;
    }

    try {
      if (val.indexOf('--hr=') > -1 || val.indexOf('-h=') > -1) {
        hr = parseInt(val.split('=')[1], 10);
      }
    } catch (e) {
      hr = undefined;
    }
  });

  if (watts) {
    console.log(`Watts: ${watts}`);

    if (hr) {
      console.log(`HR:    ${hr}`);
    }

    console.log('--------');
    return {watts, hr};
  }

  console.log(printUsage());
  return undefined;
}
