const printUsage = () => {
  return (`
    Prints Functional Threshold Power zones based on input average watts and optionally heart rate.
    usage: <entry-point> [--watts=num] [--hr=num] [--percentages=num,num,...]
  `);
}

export const processOnConsole = (args) => {
  let watts;
  let hr;
  let percentages;

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

    try {
      if (val.indexOf('--percentages=') > -1 || val.indexOf('-p=') > -1) {
        percentages = val.split('=')[1];
      }
    } catch (e) {
      percentages = undefined;
    }
  });

  if (watts) {
    console.log(`Watts: ${watts}`);

    if (hr) {
      console.log(`HR:    ${hr}`);
    }

    if (percentages) {
      console.log(`Percentages: ${percentages}`);
    }

    console.log('--------');
    return {watts, hr, percentages};
  }

  console.log(printUsage());
  return undefined;
}
