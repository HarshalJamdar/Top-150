// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 
function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // Handle empty input

    // Start with the first string as the initial prefix
    let prefix = strs[0];

    // Compare the prefix with each string
    for (let i = 1; i < strs.length; i++) {
        // Find the common prefix between the current prefix and strs[i]
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return ""; // If no common prefix, return ""
        }
    }

    return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));    // Output: ""


// To solve the problem of finding the longest common prefix among an array of strings, the approach is to compare the characters of each string at the same index and check if they are the same.

// Steps:
// Handle Edge Cases: If the input list is empty, return an empty string.
// Iterate Character by Character: For each character index, compare the corresponding characters of all strings. If a mismatch is found or one string is shorter than the current index, return the common prefix up to that point.
// Return the result: If no mismatch is found, return the full prefix found.
// Explanation:
// Initial prefix: Start by assuming the first string is the common prefix.
// Iterate over remaining strings: For each string, compare it with the current prefix by checking if the string starts with the prefix using indexOf(prefix). If it doesn't, shorten the prefix by one character from the end until a match is found or the prefix becomes empty.
// Return the final prefix: After iterating through all strings, return the common prefix.
// Edge cases:
// If the array is empty, return "".
// If there is no common prefix, return "".

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";  // Handle empty array
    
    let prefix = "";  // This will store the longest common prefix
    
    // Get the first string as the reference for comparison
    let firstStr = strs[0];
    
    // Iterate through each character of the first string
    for (let i = 0; i < firstStr.length; i++) {
        let currentChar = firstStr[i];  // Current character in the prefix
        
        // Compare this character with the same position in all other strings
        for (let j = 1; j < strs.length; j++) {
            // If we reach the end of any string or find a mismatch, return the prefix
            if (i >= strs[j].length || strs[j][i] !== currentChar) {
                return prefix;
            }
        }
        
        // If the character is common in all strings, add it to the prefix
        prefix += currentChar;
    }
    
    return prefix;  // Return the common prefix found
};

// Example usage:
console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));    // Output: ""

// To solve the "longest common prefix" problem without using built-in functions like substring() and indexOf(), we can manually compare characters of each string and build the prefix character by character.
// Approach:
// Edge Case: If the array is empty, return an empty string.
// Start with the first string as a reference: The longest common prefix must be a part of the first string.
// Compare character by character: For each character position in the first string, compare it with the corresponding character in every other string.
// Stop when there is a mismatch: If you find a mismatch or reach the end of any string, return the prefix found so far.

// Explanation:
// Iterating through the first string: We use a loop to go through each character in the first string.
// Nested loop for comparison: For each character, we compare it to the corresponding character in all other strings.
// Stop when a mismatch is found: If any string is shorter than the current character position or contains a different character, we return the prefix up to that point.
// Build the prefix: If the character is common in all strings, we append it to the prefix variable.
// Edge Cases:
// Empty array: If strs is an empty array, the function returns "".
// Single string: If there is only one string, the function will return that string as the prefix, since it is trivially the longest common prefix.