// Please do not change the name of this function
const secondsToTimeString = (seconds) => {
  let [y, d, m, h, s] = [0, 0, 0, 0, 0];
  let [year, day, hour, minute, second] = ['', '', '', '', ''];

  y = Math.floor(seconds / (60 * 60 * 24 * 365));
  d = Math.floor((seconds / (60 * 60 * 24)) % 365);
  h = Math.floor((seconds / (60 * 60)) % 24);
  m = Math.floor((seconds / 60) % 60);
  s = Math.floor(seconds % 60);

  if (y === 1) {
    year = '1 year';
  } else if (y > 1) {
    year = `${y} years`;
  }
  if (d === 1) {
    day = '1 day';
  } else if (d > 1) {
    day = `${d} days`;
  }
  if (h === 1) {
    hour = '1 hour';
  } else if (h > 1) {
    hour = `${h} hours`;
  }
  if (m === 1) minute = '1 minute';
  else if (m > 1) minute = `${m} minutes`;
  if (s === 1) second = '1 second';
  else if (s > 1) second = `${s} seconds`;

  console.log(`${y} years ${d} days ${h} hours ${m} minutes ${s} seconds`);

  let result = [year, day, hour, minute, second].filter((str) => str.length >0).join(', ');
  
  // find the last comma
  const regex = /,(?=[^,]*$)/
  result = result.replace(regex,' and');
  return result;
  // returns "4 years, 18 days, 1 hour, 2 minutes and 22 seconds"
};

module.exports = { secondsToTimeString };
