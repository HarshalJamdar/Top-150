// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            return [left + 1, right + 1]; // Return 1-indexed result
        } else if (sum < target) {
            left++; // Move left pointer to the right
        } else {
            right--; // Move right pointer to the left
        }
    }

    return []; // This line will never be reached as per problem guarantees
}


// To solve this problem efficiently, given that the array is already sorted, we can use the two-pointer technique. The idea is to have one pointer starting from the beginning of the array and another pointer starting from the end, and adjust them based on the sum of the two elements they point to.

// Approach:
// Two Pointers:
// Start with one pointer at the beginning (left = 0) and another at the end (right = numbers.length - 1).
// Calculate the sum of the elements at these two pointers:
// If the sum is equal to the target, return the 1-based indices [left + 1, right + 1].
// If the sum is less than the target, move the left pointer to the right (to increase the sum).
// If the sum is greater than the target, move the right pointer to the left (to decrease the sum).
// Terminate when the pointers meet or cross, although the problem guarantees there is exactly one solution.

// Explanation:
// Initialization:
// left starts at index 0 (beginning of the array).
// right starts at numbers.length - 1 (end of the array).
// Loop:
// The sum of numbers[left] + numbers[right] is calculated.
// If the sum matches the target, return [left + 1, right + 1] because the output must be 1-based indices.
// If the sum is too small, increment left to increase the sum.
// If the sum is too large, decrement right to decrease the sum.
// Termination:
// The loop continues until the two pointers meet or cross.
// Time Complexity:
// The time complexity is O(n), where n is the length of the array, since each element is considered at most once (either by the left or the right pointer).
// Example Walkthroughs:
// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Process:
// Sum of numbers[0] + numbers[1] (2 + 7) is 9, which matches the target.
// Return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Process:
// Sum of numbers[0] + numbers[2] (2 + 4) is 6, which matches the target.
// Return [1, 3].
// Example 3:

// Input: numbers = [-1, 0], target = -1
// Process:
// Sum of numbers[0] + numbers[1] (-1 + 0) is -1, which matches the target.
// Return [1, 2].