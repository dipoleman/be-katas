// Please do not change the name of this function
const supermarketQueue = (customers, checkouts) => {
  if (checkouts === 0) {
    return 0;
  }

  let totalTime = 0;
  let remainingCustomers = [...customers];

  const maxTime = customers.reduce((sum, customer) => sum + customer, 0);
  let checkoutTotals = new Array(checkouts).fill(0);
  let checkoutTimes = new Array(checkouts).fill(0);

  console.log(remainingCustomers, '<-------starting customers');
  console.log(checkoutTotals, '<-------checkout totals');
  console.log(checkoutTimes, '<-------checkout times');

  for (let t = 0; t < maxTime; t++) {
    for (let j = 0; j < checkouts; j++) {
      if (checkoutTimes[j] === 0) {
        // next customer
        let customer = remainingCustomers.shift();
        checkoutTotals[j] += customer;
        checkoutTimes[j] = customer;
      }
    }
    for (let j = 0; j < checkouts; j++) {
      checkoutTimes[j]--;
    }
    console.log(remainingCustomers, '<-------remaining customers');
    console.log(checkoutTotals, '<-------checkout totals');
    console.log(checkoutTimes, '<-------checkout times');
    if (remainingCustomers.length === 0) {
      break;
    }
  }

  const noNaNs = checkoutTotals.filter((num) => {
    return num;
  });

  return Math.max(...noNaNs);
};

module.exports = { supermarketQueue };
