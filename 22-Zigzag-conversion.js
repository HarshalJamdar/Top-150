// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

function convert(s, numRows) {
    // If numRows is 1 or string is too short for zigzagging, return the string as is
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    // Initialize an array of empty strings to store each row's characters
    const rows = new Array(Math.min(numRows, s.length)).fill("");

    // Set up variables to keep track of the current row and direction
    let curRow = 0;
    let goingDown = false;

    // Traverse the string and place each character in the appropriate row
    for (let c of s) {
        rows[curRow] += c;
        // Change direction when we hit the top or bottom row
        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown;
        }
        // Move to the next row depending on direction
        curRow += goingDown ? 1 : -1;
    }

    // Join all rows to form the final zigzagged string
    return rows.join("");
}

// Example 1:
console.log(convert("PAYPALISHIRING", 3)); 
// Output: "PAHNAPLSIIGYIR"

// Example 2:
console.log(convert("PAYPALISHIRING", 4)); 
// Output: "PINALSIGYAHRPI"

// Example 3:
console.log(convert("A", 1)); 
// Output: "A"


// Approach:
// Edge Cases:

// If the number of rows is 1, the zigzag pattern is essentially the string itself, so we can return the input string directly.
// If the length of the string is less than or equal to the number of rows, no zigzag effect is possible, so we return the string directly.
// Zigzag Construction:

// We can think of the zigzag pattern as filling characters row by row. Start from the top row, go downwards to the bottom row, and then switch directions (upwards) until the top is reached again. This repeats until the entire string is processed.
// Key Insight:

// Create an array of strings (or rows), and as you traverse the input string, append each character to the appropriate row in the array. When you hit the bottom row, change direction and start filling upwards.
// Final Output:

// After traversing the string, concatenate all the rows to get the final output.

// Explanation:
// Edge Handling:

// If numRows == 1 or numRows >= s.length(), there's no zigzag pattern, so we return the string directly.
// Zigzag Construction:

// We use a vector<string> where each string in the vector represents a row in the zigzag pattern.
// The curRow variable tracks the current row, and the boolean goingDown helps determine the direction (down or up).
// Row Assignment:

// We iterate through each character of the input string s, adding the character to the current row.
// When we reach the top (curRow == 0) or bottom (curRow == numRows - 1), we flip the goingDown flag to change direction.
// Final Output:

// After processing all the characters, we concatenate all the rows to form the final zigzag string.
// Time Complexity:
// O(n), where n is the length of the input string. We traverse the string once and build the rows in a single pass.
// Space Complexity:
// O(n), for storing the zigzag pattern in the rows.