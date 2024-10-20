// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
// You are giving candies to these children subjected to the following requirements:
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

// Example 1:
// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

// Example 2:
// Input: ratings = [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
// The third child gets 1 candy because it satisfies the above two conditions.


var candy = function(ratings) {
    let n = ratings.length;
    let candies = new Array(n).fill(1);  // Initialize candies array with 1 for each child

    // Left to right pass
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;  // Give more candies if current child has a higher rating than the left neighbor
        }
    }

    // Right to left pass
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);  // Ensure the child has more candies than the right neighbor
        }
    }

    // Sum up all the candies
    return candies.reduce((sum, candy) => sum + candy, 0);
};

let ratings = [1, 0, 2];
console.log(candy(ratings));  // Output: 5

let ratings1 = [1, 2, 2];
console.log(candy(ratings1));  // Output: 4


// To solve this problem, we need to distribute candies to children while adhering to two main constraints:
// Each child gets at least one candy.
// A child with a higher rating gets more candies than their immediate neighbors.
// Key Observations:
// We can use a two-pass approach to ensure that all the constraints are satisfied.
// First, we traverse the array from left to right, ensuring that children with higher ratings than their left neighbor get more candies.
// Then, we traverse the array from right to left, ensuring that children with higher ratings than their right neighbor still get more candies (while maintaining the result from the first pass).
// Approach:
// Initialize candies array: Create an array candies where each child starts with one candy.
// Left to right pass:
// For each child, compare their rating with the previous child. If their rating is higher than the previous child, give them one more candy than the previous child.
// Right to left pass:
// For each child, compare their rating with the next child. If their rating is higher than the next child, update their candies to ensure they have more candies than the next child (while keeping the result of the left pass).
// Finally, sum up the candies array to get the total minimum number of candies.

// Explanation:
// Left to right pass:

// We iterate through the ratings array from index 1 to n-1.
// If a child's rating is greater than their left neighbor, they receive one more candy than the left neighbor.
// Right to left pass:

// We iterate from index n-2 to 0.
// If a child's rating is greater than their right neighbor, they receive one more candy than the right neighbor, but we also take the maximum between the current candy count (from the first pass) and this new requirement.
// Final result:

// After both passes, the candies array will satisfy both conditions, and the total number of candies required is the sum of this array.


// Time Complexity:
// O(n), where n is the number of children. We iterate through the ratings array twice, once for each pass.
// Space Complexity:
// O(n), since we use an additional array candies of size n to store the number of candies for each child.