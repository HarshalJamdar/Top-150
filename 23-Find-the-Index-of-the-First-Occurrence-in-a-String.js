// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

function strStr(haystack, needle) {
    // If needle is an empty string, return 0 as per the problem statement
    if (needle === "") {
        return 0;
    }

    // Use indexOf to find the first occurrence of needle in haystack
    return haystack.indexOf(needle);
}

// Example 1:
console.log(strStr("sadbutsad", "sad")); 
// Output: 0

// Example 2:
console.log(strStr("leetcode", "leeto")); 
// Output: -1

// Approach:
// We can utilize the built-in indexOf method in JavaScript, which efficiently returns the first occurrence of a substring in a string or -1 if the substring is not found.

// Explanation:
// Edge Case:
// If needle is an empty string, we return 0 as per the problem constraints (though not specified in the examples, this is often mentioned in similar problems).
// indexOf:
// The indexOf function in JavaScript returns the index of the first occurrence of the substring (needle) in the string (haystack), or -1 if it doesn’t exist.
// Time Complexity:
// The time complexity is O(n), where n is the length of the haystack. This is because indexOf is optimized to find substrings efficiently.
// Example Execution:
// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// The first occurrence of "sad" is at index 0, so the function returns 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// The substring "leeto" does not exist in "leetcode", so the function returns -1.