// Length of Last Word

const lengthOfLastWord = function (s) {
  let newStr = s.trim();
  let res = 0;
  for (let i = newStr.length - 1; i >= 0; i--) {
    if (newStr[i] == " ") return res;
    res++;
  }
  return res;
};
