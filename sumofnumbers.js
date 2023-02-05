const testData = [1, 2, 3, 4, 5, 6];

const forLoop = (data) => {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  return total;
};

const whileLoop = (data) => {
  let total = 0;
  let i = data.length - 1;
  while (i >= 0) {
    total += data[i];
    i--;
  }
  return total;
};

const recurs = (data) => {
  if (data.length === 1) {
    return data[0];
  }
  const rest = [...data];
  rest.splice(0, 1);
  return data[0] + recurs(rest);
};

console.log(forLoop(testData));
console.log(whileLoop(testData));
console.log(recurs(testData));
