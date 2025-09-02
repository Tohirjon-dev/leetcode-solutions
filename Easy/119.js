// Pascals triangle II

const getRow = function (rowIndex) {
  let res = [1];

  while (rowIndex > 0) {
    let row = [1];
    for (let i = 1; i < res.length; i++) {
      row.push(res[i - 1] + res[i]);
    }
    row.push(1);
    res = row;
    rowIndex--;
  }
  return res;
};
