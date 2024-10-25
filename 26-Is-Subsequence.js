// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false



function isSubsequence(s, t) {
    let i = 0; // Pointer for string s
    let j = 0; // Pointer for string t

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++; // Move pointer in s only when characters match
        }
        j++; // Always move pointer in t
    }

    // If i reaches the end of s, it means s is a subsequence of t
    return i === s.length;
}


// To determine whether the string s is a subsequence of t, we can approach this problem using two pointers. Here’s how we can solve it:

// Approach:
// Use two pointers: one to iterate through s (denoted as i) and another to iterate through t (denoted as j).
// Start both pointers at the beginning of their respective strings.
// Traverse through t using pointer j:
// Every time the characters at s[i] and t[j] match, move pointer i to the next character in s.
// Move pointer j forward on each iteration.
// If the pointer i successfully reaches the end of s, that means all characters of s have been found in t in the correct order, so return true.
// If pointer j reaches the end of t before i reaches the end of s, return false.

// Explanation:
// The function starts with both pointers (i for s and j for t) at the beginning of their respective strings.
// The while loop continues as long as there are characters to process in both s and t.
// If the current characters of s and t match (s[i] === t[j]), the pointer i for s is incremented to check the next character.
// Pointer j is always incremented to move through t.
// After the loop, if i equals the length of s, all characters in s were found in t in order, so s is a subsequence of t. Otherwise, it returns false.
// Time Complexity:
// The time complexity is O(n), where n is the length of t, since we traverse through t at most once. The space complexity is O(1), since we only use a few pointers and no extra space.
// Example Walkthrough:
// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Process:
// Compare s[0] = 'a' with t[0] = 'a': match, move i and j forward.
// Compare s[1] = 'b' with t[1] = 'h': no match, move j forward.
// Compare s[1] = 'b' with t[2] = 'b': match, move i and j forward.
// Compare s[2] = 'c' with t[3] = 'g': no match, move j forward.
// Compare s[2] = 'c' with t[4] = 'd': no match, move j forward.
// Compare s[2] = 'c' with t[5] = 'c': match, move i forward.
// Output: true (since i reached the end of s).
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Process:
// Compare s[0] = 'a' with t[0] = 'a': match, move i and j forward.
// Compare s[1] = 'x' with t[1] = 'h': no match, move j forward.
// Compare s[1] = 'x' with t[2] = 'b': no match, move j forward.
// Compare s[1] = 'x' with t[3] = 'g': no match, move j forward.
// Compare s[1] = 'x' with t[4] = 'd': no match, move j forward.
// Compare s[1] = 'x' with t[5] = 'c': no match, move j forward.
// Output: false (since i did not reach the end of s).