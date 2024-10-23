// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.
 

// Example 1:

// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]
// Example 2:

// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
// Note that the second line is also left-justified because it contains only one word.
// Example 3:

// Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]
 

function fullJustify(words, maxWidth) {
    const result = [];
    let currentLine = [];
    let currentLineLength = 0;

    for (let word of words) {
        // Check if adding the current word would exceed maxWidth
        if (currentLineLength + word.length + currentLine.length > maxWidth) {
            // Distribute spaces
            for (let i = 0; i < maxWidth - currentLineLength; i++) {
                currentLine[i % (currentLine.length - 1 || 1)] += ' ';
            }
            result.push(currentLine.join(''));
            currentLine = [];
            currentLineLength = 0;
        }
        currentLine.push(word);
        currentLineLength += word.length;
    }

    // Last line (left-justified)
    result.push(currentLine.join(' ') + ' '.repeat(maxWidth - currentLineLength - (currentLine.length - 1)));

    return result;
}

// Example 1:
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
// Output: 
// [
//   "This    is    an",
//   "example  of text",
//   "justification.  "
// ]

// Example 2:
console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));
// Output: 
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]

// Example 3:
console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20));
// Output: 
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]


// Explanation:
// Variables:

// currentLine: Stores the words in the current line.
// currentLineLength: Tracks the total number of characters in the current line (excluding spaces).
// result: Stores the fully justified lines as they are built.
// Packing Words into Lines:

// For each word, check if adding it to the current line would exceed maxWidth (accounting for spaces between words).
// If it would, justify the current line, distribute spaces evenly between words, and start a new line with the current word.
// Distributing Spaces:

// The spaces are distributed evenly across the current line by adding an extra space to the left-most slots if the spaces don’t divide evenly. This is done using the modulo operation.
// The last line is treated differently: it is left-justified, so words are joined by a single space and padded with spaces at the end if necessary.
// Last Line Handling:

// For the last line, no extra space is inserted between words beyond a single space. Any remaining space is added at the end to make the line exactly maxWidth.
// Time Complexity:
// O(n) where n is the total number of characters in all words. We loop through all words once and handle them accordingly.
// Space Complexity:
// O(n) for storing the result array and the current line.
// Example Execution:
// Example 1:

// Input: ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:

// [  "This    is    an",  "example  of text",  "justification.  "]
// Example 2:

// Input: ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:

// [  "What   must   be",  "acknowledgment  ",  "shall be        "]
// Example 3:

// Input: ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [  "Science  is  what we",  "understand      well",  "enough to explain to",  "a  computer.  Art is",  "everything  else  we",  "do                  "]
