// Roman to integer

const romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = romanMap[s[i]];
    let next = romanMap[s[i + 1]];
    if (next > curr) {
      res += next - curr;
      i++;
    } else {
      res += curr;
    }
  }
  return res;
};
