// Please do not change the name of this function
const sumConsecutiveDuplicates = (arr) => {
  const newArr = [...arr];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      newArr[i] = arr[i] + newArr[i - 1];
      newArr[i - 1] = 0;
    }
  }

  const filteredArr = newArr.filter((num) => {
    return num > 0;
  });

  if (filteredArr.length !== arr.length) {
    return sumConsecutiveDuplicates(filteredArr);
  } else {
    return filteredArr;
  }
};

module.exports = { sumConsecutiveDuplicates };
