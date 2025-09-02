// Remove Dublicates from sorted array

const removeDublicates = function (arr) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[k] = arr[i];
      k++;
    }
  }
  return k;
};
