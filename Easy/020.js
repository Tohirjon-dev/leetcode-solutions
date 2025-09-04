// Valid Parentheses

const isValid = function (s) {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];
  for (let ch of s) {
    if (ch == "(" || ch == "{" || ch == "[") {
      stack.push(ch);
    } else {
      if (stack.pop() !== map[ch]) return false;
    }
  }
  return stack.length == 0;
};
