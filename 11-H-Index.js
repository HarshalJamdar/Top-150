// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

// Example 1:
// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

// Example 2:
// Input: citations = [1,3,1]
// Output: 1


function hIndex(citations) {
    // Sort the citations array in descending order
    citations.sort((a, b) => b - a);
    
    let h_index = 0;
    
    // Iterate over the sorted array to calculate h-index
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            h_index = i + 1;
            console.log('h_index', h_index,    'i', i );
        } else {
            break;
        }
    }
    return h_index;
}

// Example 1
const citations1 = [3, 0, 6, 1, 5];
console.log(hIndex(citations1));  // Output: 3

// Example 2
const citations2 = [1, 3, 1];
console.log(hIndex(citations2));  // Output: 1




// Approach:
// Sort the citations array in non-increasing order (i.e., from the largest to the smallest).
// Iterate over the sorted citations and for each index i, check if the value at that index is greater than or equal to i + 1 (the current position in the list, treated as the potential h-index).
// The h-index is the highest value h such that there are at least h papers with at least h citations.
// Steps:
// Sort the citations array in descending order.
// Loop through the sorted list and find the maximum h where citations[i] >= i + 1.

// Time Complexity:
// Sorting the citations array: Sorting takes 
// 𝑂
// (
// 𝑛
// log
// ⁡
// 𝑛
// )
// O(nlogn), where 
// 𝑛
// n is the number of elements in the array.
// Iterating through the sorted array: After sorting, we iterate through the array once, which takes 
// 𝑂
// (
// 𝑛
// )
// O(n).
// Thus, the overall time complexity is dominated by the sorting step, so the time complexity is:

// Time Complexity: 
// 𝑂
// (
// 𝑛
// log
// ⁡
// 𝑛
// )
// O(nlogn)
// Space Complexity:
// In-place sorting: The sort() function sorts the array in-place, so it does not require extra space proportional to the input size.
// Additional variables: We are using only a few extra variables (h_index, i), which require 
// 𝑂
// (
// 1
// )
// O(1) space.
// Thus, the overall space complexity is:

// Space Complexity: 
// 𝑂
// (
// 1
// )
// O(1) (if we ignore the space required for the input).
// Summary:
// Time Complexity: 
// 𝑂
// (
// 𝑛
// log
// ⁡
// 𝑛
// )
// O(nlogn)
// Space Complexity: 
// 𝑂
// (
// 1
// )
// O(1)





