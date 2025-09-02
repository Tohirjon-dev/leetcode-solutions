// Longest common prefix

const longestCommonPrefix = function (strs) {
  let pref = strs[0];
  let prefLen = pref.length;
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    while (pref !== str.slice(0, prefLen)) {
      prefLen--;
      if (prefLen == 0) return "";
    }
    pref = pref.slice(0, prefLen);
  }
  return pref;
};
