// Find the Index of the First Occurrence in a String

const strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length; i++) {
    const temp = haystack.slice(i, i + needle.length);
    if (temp == needle) return i;
  }
  return -1;
};
