//  Best Time to Buy and Sell Stock

const maxProfit = function (prices) {
  let min_price = prices[0];
  let max_profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - min_price;
    min_price = Math.min(min_price, prices[i]);
    max_profit = Math.max(max_profit, profit);
  }
  return max_profit;
};
