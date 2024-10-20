// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2


function jump(nums) {
    let jumps = 0;
    let current_end = 0;
    let farthest = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        // Update the farthest point we can reach from index i
        farthest = Math.max(farthest, i + nums[i]);
        
        // If we reach the end of the current jump range
        if (i === current_end) {
            jumps++;
            current_end = farthest; // Update to the farthest point we can reach
        }
    }
    
    return jumps;
}

// Test cases
console.log(jump([2,3,1,1,4])); // Output: 2
console.log(jump([2,3,0,1,4])); // Output: 2


// To solve this problem efficiently, we can use a greedy approach to track the farthest index we can reach with the fewest jumps. We'll keep track of the range of indices we can reach with the current jump and then determine the next jump range as we progress through the array.

// Approach:
// Initialize:
// jumps to store the count of jumps needed (start with 0).
// current_end to store the farthest index we can reach with the current jump.
// farthest to track the farthest position we can reach overall during our traversal.
// Traverse the array:
// For each index i, update farthest to be the maximum of farthest and i + nums[i] (the farthest index we can jump to from index i).
// If we reach current_end (the end of the current jump range), we must make a new jump, so increment the jumps counter and update current_end to farthest.
// Return the number of jumps once we have reached the last index.

// Explanation:
// Example 1: You start at index 0 and can jump 1 step to index 1, then jump 3 steps to the last index. Hence, the minimum number of jumps is 2.
// Example 2: You start at index 0, jump 1 step to index 1, and from there, jump 3 steps to the last index. So, the minimum number of jumps is 2.
// Time Complexity:
// The algorithm runs in O(n) time complexity, where n is the length of the array. We only make a single pass through the array to calculate the minimum jumps.
// Space Complexity:
// The space complexity is O(1), as we only use a few variables to store the jump count, current end, and farthest point.