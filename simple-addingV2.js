const simpleAdding = (num) => {
  let total = 0;

  for (let i = 1; i <= num; i++) {
    total = total + i;
  }

  return total;
};
console.log(simpleAdding(4));
