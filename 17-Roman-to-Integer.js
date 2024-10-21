// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current symbol
        let current = romanMap[s[i]];
        
        // Get the value of the next symbol (if it exists)
        let next = romanMap[s[i + 1]];
        
        // If the current value is less than the next value, subtract it
        if (current < next) {
            total -= current;
        } else {
            // Otherwise, add the current value to the total
            total += current;
        }
    }
    
    return total;
}

// Example 1:
console.log(romanToInt("III"));  // Output: 3

// Example 2:
console.log(romanToInt("LVIII"));  // Output: 58

// Example 3:
console.log(romanToInt("MCMXCIV"));  // Output: 1994

// To convert a Roman numeral to an integer, we can take advantage of the fact that Roman numerals are generally written from largest to smallest. However, when a smaller numeral appears before a larger one, it indicates that we should subtract the smaller numeral (like IV for 4 or IX for 9).

// Here’s the approach:

// We traverse the Roman numeral string from left to right.
// If the current Roman numeral is smaller than the next one, we subtract its value from the total.
// Otherwise, we add its value to the total.
// Algorithm:
// Create a map of Roman symbols and their integer values.
// Loop through the string and for each character:
// If the current numeral is smaller than the next one, subtract its value.
// Otherwise, add its value.
// Return the total sum.

// Explanation:
// The romanMap object stores the integer values corresponding to each Roman numeral symbol.
// We loop through the string s and compare the current numeral with the next one:
// If the current numeral is smaller than the next one, we subtract it from the total.
// Otherwise, we add it to the total.
// At the end of the loop, the total contains the integer value of the Roman numeral.
// Time Complexity:
// The time complexity of this solution is O(n), where n is the length of the input string, because we loop through the string once.
// Space Complexity:
// The space complexity is O(1), as we only use a fixed amount of space regardless of the input size.