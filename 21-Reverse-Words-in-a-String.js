// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

function reverseWords(s) {
    // Step 1: Trim the input string to remove leading/trailing spaces
    // Step 2: Split the string by one or more spaces
    // Step 3: Filter out any empty strings (caused by multiple spaces)
    // Step 4: Reverse the array of words
    // Step 5: Join the words back with a single space and return
    return s.trim().split(/\s+/).reverse().join(' ');
}

// Example usage:
console.log(reverseWords("the sky is blue"));        // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));        // Output: "world hello"
console.log(reverseWords("a good   example"));       // Output: "example good a"


// Steps:
// Trim leading and trailing spaces: Use the trim() function to remove unnecessary spaces at the beginning and end of the string.
// Split the string by spaces: Use split() to divide the string into words.
// Filter empty words: Filter out any empty strings that may arise from multiple spaces.
// Reverse the words: Reverse the order of the words in the array.
// Join the words: Join the reversed array into a single string with a single space between words.

// Explanation:
// trim(): Removes any leading and trailing spaces.
// split(/\s+/): Splits the string into an array of words, using one or more spaces (\s+) as the delimiter.
// filter(Boolean): This filters out any empty strings, ensuring only valid words are processed.
// reverse(): Reverses the order of the words in the array.
// join(' '): Joins the reversed words into a single string, with a single space between them.
// Edge Cases:
// Input with multiple spaces between words is handled by the split(/\s+/) which splits on any number of spaces.
// Leading and trailing spaces are removed by trim().
// This approach ensures that the final output string is properly formatted with a single space separating words, and no extra spaces are included.

function reverseWords(s) {
    let result = ''; // To store the final reversed string
    let word = '';   // To accumulate characters of the current word
    let i = s.length - 1;  // Start from the end of the string

    // Step 1: Loop through the string in reverse order
    while (i >= 0) {
        // Skip trailing spaces
        while (i >= 0 && s[i] === ' ') i--;

        // Step 2: Extract the current word
        word = '';  // Reset word for each new word found
        while (i >= 0 && s[i] !== ' ') {
            word = s[i] + word;  // Add characters to the word
            i--;
        }

        // Step 3: Add the word to the result, separated by a single space
        if (word) {
            if (result.length > 0) {
                result += ' ';
            }
            result += word;
        }
    }

    return result;
}

// Example usage:
console.log(reverseWords("the sky is blue"));        // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));        // Output: "world hello"
console.log(reverseWords("a good   example"));       // Output: "example good a"

// Steps:
// Ignore leading and trailing spaces: Traverse the string and skip leading/trailing spaces.
// Extract words: Traverse the string character by character to identify and extract each word.
// Reverse the words: Store the words in reverse order by pushing each new word to the beginning of the result.
// Join words manually: Concatenate the words with a single space in between, taking care to avoid extra spaces.

// Explanation:
// Initialize variables:
// result to store the final reversed string.
// word to accumulate characters of the current word.
// Start from the end of the string (i = s.length - 1).
// Skip trailing spaces: The first while (i >= 0 && s[i] === ' ') skips spaces from the end.
// Extract words: The inner loop while (i >= 0 && s[i] !== ' ') accumulates characters of the current word by moving backward until a space or the beginning of the string is found.
// Build the result: Each extracted word is added to result, making sure to add a space between words only when necessary.
// Edge Cases:
// Multiple spaces: The loop logic ensures that multiple spaces are ignored.
// Leading and trailing spaces: They are skipped without using built