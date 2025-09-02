// Pascals triangle I

const generate = function (numRows) {
  const result = [[1]];
  while (result.length < numRows) {
    const row = [1];
    const prev = result[result.length - 1];

    for (let i = 1; i < prev.length; i++) {
      row.push(prev[i - 1] + prev[i]);
    }
    row.push(1);
    result.push(row);
  }
  return result;
};
