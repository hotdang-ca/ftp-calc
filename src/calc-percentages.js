export const calcPercentages = (averageWatts, percentagesString) => {
  const percentages = percentagesString.split(',');
  let percentageZones = {};

  percentages.forEach((percentage) => {
    percentageZones[`${percentage.toString()}%`] = parseInt(((percentage / 100) * averageWatts), 10);
  });

  return percentageZones;
};
