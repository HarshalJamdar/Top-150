// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let totalWater = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            // Water can only be trapped if current height is less than leftMax
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            // Water can only be trapped if current height is less than rightMax
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }
    
    return totalWater;
}

// Example 1:
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));  // Output: 6

// Example 2:
console.log(trap([4,2,0,3,2,5]));  // Output: 9


// To solve this problem, we can use a two-pointer approach to calculate how much water can be trapped. The idea is to maintain two pointers left and right, starting at the two ends of the elevation map. We also keep track of the maximum height encountered so far from both the left and the right sides.

// Here’s the step-by-step algorithm:

// Initialize two pointers left and right at the start and end of the elevation array.
// Keep track of the maximum height from the left (leftMax) and right (rightMax).
// As you move the pointers inward, calculate how much water can be trapped at each position. The trapped water at each index depends on the minimum of leftMax and rightMax minus the current height.
// Move the pointer with the smaller height towards the center.

// Explanation:
// The trap function uses two pointers (left and right) to traverse the elevation map from both ends towards the middle.
// It calculates the trapped water by comparing the current height to the maximum heights on either side (leftMax and rightMax).
// The pointer that has the smaller height is moved inward, and the water trapped at that position is added to the total.