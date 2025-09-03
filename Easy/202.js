// Happy number

const happyNumber = function (n) {
  let temp = 0;
  while (n !== 1 && n !== 4) {
    while (n !== 0) {
      temp += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    n = temp;
    temp = 0;
  }
  return n == 1;
};
