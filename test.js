const sum = (a, b) => {
  const total = a + b;
  return total;
};

const result = sum(1, 5);
console.log(result); // ReferenceError: total is not defined
