// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.

// Example 3:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 

var maxProfit = function(prices) {
    let total_profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            total_profit += prices[i] - prices[i - 1];
        }
    }
    return total_profit  
};

console.log(maxProfit([7,1,5,3,6,4])); // Output: 7
console.log(maxProfit([1,2,3,4,5]));   // Output: 4
console.log(maxProfit([7,6,4,3,1]));   // Output: 0

// Traverse through the array of prices.
// Every time the price of the current day is greater than the price of the previous day, you add the difference to the total profit. This simulates buying the stock on the previous day and selling it on the current day.

// This solution runs in O(n) time complexity, where n is the length of the prices array, since we are only making a single pass through the array.