// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

function canJump(nums) {
    let farthest = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) {
            return false; // can't reach this index
        }
        farthest = Math.max(farthest, i + nums[i]); // update the farthest index we can reach
    }
    
    return true;
}

// Test cases
console.log(canJump([2,3,1,1,4])); // Output: true
console.log(canJump([3,2,1,0,4])); // Output: false


// This problem can be solved using a greedy approach. The idea is to track the farthest position you can reach as you iterate through the array. If at any point the current index is beyond the farthest reachable position, it means you can't proceed further, and thus, it's impossible to reach the last index.

// Approach:
// Initialize a variable farthest to track the farthest index you can reach. Initially, it is set to 0 (the first index).
// Iterate through the array. For each index i:
// If i is greater than farthest, return false because you can't reach this index.
// Otherwise, update farthest to be the maximum of farthest and i + nums[i] (i.e., the farthest index you can reach from index i).
// After iterating through the array, if you can reach the last index, return true.

// The solution runs in O(n) time complexity, where n is the length of the array. You only traverse the array once and keep track of the farthest index you can reach.