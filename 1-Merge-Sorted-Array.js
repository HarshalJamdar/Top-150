// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1's end of valid elements
    let j = n - 1; // Pointer for nums2's end
    let k = m + n - 1; // Pointer for the end of the merged array
    // Merge in reverse order
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            //put the value 1st, then decrease the index
            nums1[k] = nums1[i];
            i--;
            k--;
        } else {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
    // If there are remaining elements in nums2, copy them
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    return nums1;
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

console.log(merge(nums1,m,nums2,n));