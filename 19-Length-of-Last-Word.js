// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal 
// substring
//  consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 
function lengthOfLastWord(s) {
    // Step 1: Trim any leading and trailing spaces
    s = s.trim();
    
    // Step 2: Split the string by spaces
    const words = s.split(' ');

    // Step 3: Get the last word and return its length
    return words[words.length - 1].length;
}

// Example usage:
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6

// To solve this problem, you can follow these steps:
// Trim the string: Remove any leading and trailing spaces from the string.
// Split the string by spaces: This will divide the string into individual words.
// Find the last word: Get the last word from the resulting list of words.
// Return the length: Return the length of that last word.

// Explanation:
// trim() removes any leading or trailing spaces.
// split(' ') divides the string into an array of words based on spaces.
// words[words.length - 1] accesses the last word in the array, and .length gives the length of that word.