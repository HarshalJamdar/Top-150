// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer to the next alphanumeric character
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        // Move right pointer to the previous alphanumeric character
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // Compare characters, considering case insensitivity
        if (toLowerCase(s[left]) !== toLowerCase(s[right])) {
            return false;
        }

        // Move both pointers towards the center
        left++;
        right--;
    }

    return true;
}

// Helper function to check if a character is alphanumeric
function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    // Check if it is a letter (a-z or A-Z) or a digit (0-9)
    return (code >= 48 && code <= 57) || // 0-9
           (code >= 65 && code <= 90) || // A-Z
           (code >= 97 && code <= 122);  // a-z
}

// Helper function to convert uppercase to lowercase
function toLowerCase(char) {
    const code = char.charCodeAt(0);
    // If the character is uppercase (A-Z), convert it to lowercase (a-z)
    if (code >= 65 && code <= 90) {
        return String.fromCharCode(code + 32);
    }
    return char;
}

// Normalize the String:

// Convert all uppercase letters to lowercase.
// Remove all non-alphanumeric characters (only keep letters and numbers).
// Check for Palindrome:

// Use two pointers: one starting at the beginning (left) and one at the end (right) of the string.
// Increment the left pointer and decrement the right pointer, skipping non-alphanumeric characters.
// Compare the characters at both pointers. If they are equal, move both pointers towards the center. If any mismatch is found, return false.
// Edge Case:

// If the string becomes empty after removing non-alphanumeric characters, it is considered a palindrome.

// Explanation:
// isAlphaNumeric(char) checks if a character is a valid letter or number based on its ASCII code.
// toLowerCase(char) converts an uppercase letter to a lowercase letter by adjusting its ASCII code.
// The main function isPalindrome(s):
// Uses two pointers (left and right) to traverse the string from both ends.
// Skips non-alphanumeric characters and compares the remaining valid characters, checking for equality in a case-insensitive manner.
// If all valid characters match, the string is a palindrome; otherwise, it returns false.
// Example:
// For the input "A man, a plan, a canal: Panama", the function processes the string into "amanaplanacanalpanama" and returns true, since it reads the same forward and backward.