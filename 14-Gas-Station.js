// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.

// Example 1:
// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.

// Example 2:
// Input: gas = [2,3,4], cost = [3,4,3]
// Output: -1
// Explanation:
// You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
// Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 0. Your tank = 4 - 3 + 2 = 3
// Travel to station 1. Your tank = 3 - 3 + 3 = 3
// You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
// Therefore, you can't travel around the circuit once no matter where you start.


var canCompleteCircuit = function(gas, cost) {
    let total_tank = 0;   // Total balance for all stations
    let current_tank = 0; // Current balance for the current start station
    let start = 0;        // Start station index
    
    for (let i = 0; i < gas.length; i++) {
        total_tank += gas[i] - cost[i];   // Overall balance of gas and cost
        current_tank += gas[i] - cost[i]; // Current balance from the current start station
        
        // If at any point the current tank is negative, reset start index
        if (current_tank < 0) {
            start = i + 1;  // Try the next station as the start
            current_tank = 0; // Reset current tank
        }
    }
    
    // If total gas is less than total cost, return -1
    return total_tank >= 0 ? start : -1;
};

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));  // Output: 3

let gas1 = [2, 3, 4];
let cost1 = [3, 4, 3];
console.log(canCompleteCircuit(gas1, cost1));  // Output: -1



// To solve this problem, we need to find out if it's possible to complete the circuit, and if so, identify the starting gas station.

// Key Insights:
// If the total gas available is less than the total cost required to complete the circuit, it is impossible to complete the circuit, so we return -1.
// If the total gas is greater than or equal to the total cost, then there must be one unique starting point from where the journey can be completed.
// Approach:
// Total gas and total cost check: First, we compute the total gas and total cost. If the total gas is less than the total cost, return -1.
// Greedy approach: Start iterating through the gas stations:
// Keep track of the current fuel balance. If at any point the balance becomes negative, it means that you can't start from any of the stations before this point, so you reset the starting point to the next station.
// Continue this process until you complete the iteration.
// Steps:
// Initialize variables:

// total_tank: Tracks the total difference between gas and cost for all stations (for feasibility check).
// current_tank: Tracks the current gas balance while iterating through the stations.
// start: The index of the starting gas station (initialize it to 0).
// Iterate through gas stations:

// Update current_tank by adding the gas gained at the current station and subtracting the cost to travel to the next station.
// If current_tank becomes negative, reset it to 0 and set start to the next station.
// After completing the iteration, if total_tank is negative, return -1, otherwise return the start.


// Explanation:
// Iterating through the stations:
// We calculate the difference between the gas available at each station and the cost to travel to the next station.
// If at any point the current tank becomes negative, it means we cannot reach the next station from the current start point, so we set the next station as the new starting point.
// Final Check:
// After iterating through all the stations, if the total gas (total_tank) is greater than or equal to the total cost, it means we can complete the circuit starting from the start station.

// Time Complexity:
// O(n) where n is the number of gas stations, since we only iterate through the arrays once.
// Space Complexity:
// O(1) as we are only using a few extra variables to store indices and cumulative sums.