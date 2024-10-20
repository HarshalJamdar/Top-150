// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);
    
    // Step 1: Calculate the left product for each element
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct;  // Store the product of elements to the left of index i
        leftProduct *= nums[i];   // Update leftProduct
    }
    
    // Step 2: Calculate the right product and multiply with the left product
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;  // Multiply the current value in answer (left product) by right product
        rightProduct *= nums[i];    // Update rightProduct
    }
    
    return answer;
};

console.log(productExceptSelf([1,2,3,4]));  // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1,1,0,-3,3]));  // Output: [0, 0, 9, 0, 0]


// To solve this problem without using division and in O(n) time, we can calculate the result in two passes:

// First Pass (Left Product): We calculate the product of all elements before each element.
// Second Pass (Right Product): We calculate the product of all elements after each element.
// We maintain two arrays during these passes: one to store the left products and another for the right products. However, instead of using two separate arrays, we can compute everything in one array to save space.

// Approach:
// Initialize an empty array answer where answer[i] will store the final result.
// Left pass: Traverse the array from left to right, maintaining the cumulative product of all elements before nums[i] and storing them in the answer array.
// Right pass: Traverse the array from right to left, updating the answer array by multiplying with the cumulative product of all elements after nums[i].

// Time Complexity:
// O(n) for both the left and right passes, as we only traverse the array twice.
// Space Complexity:
// O(1) extra space (disregarding the output array answer), since we are not using any additional arrays for left and right products. The result is stored directly in the answer array.