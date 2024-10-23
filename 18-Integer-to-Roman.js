// Seven different symbols represent Roman numerals with the following values:

// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
// Given an integer, convert it to a Roman numeral.
// Example 1:
// Input: num = 3749
// Output: "MMMDCCXLIX"
// Explanation:
// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
// Example 2:
// Input: num = 58
// Output: "LVIII"
// Explanation:
// 50 = L
//  8 = VIII
// Example 3:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation:
// 1000 = M
//  900 = CM
//   90 = XC
//    4 = IV
 

function intToRoman(num) {
    const romanMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';
    for (let i = 0; i < romanMap.length; i++) {
        const { value, symbol } = romanMap[i];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

// Example 1:
console.log(intToRoman(3749));  // Output: "MMMDCCXLIX"

// Example 2:
console.log(intToRoman(58));  // Output: "LVIII"

// Example 3:
console.log(intToRoman(1994));  // Output: "MCMXCIV"


// To convert an integer to a Roman numeral, we need to repeatedly subtract the largest Roman numeral value possible from the input number and append the corresponding Roman numeral symbol to the result string. This process continues until the number is reduced to zero.

// Approach:
// Create a list of Roman numeral symbols paired with their corresponding integer values in descending order.
// Traverse through this list and, for each symbol, append it as many times as possible to the result while subtracting its value from the input number.
// Handle subtractive forms like 4, 9, 40, 90, etc., by including them in the list of Roman numerals.
// Algorithm:
// Create a list of Roman numeral-symbol pairs starting from the largest value to the smallest.
// Iterate over the list and, for each symbol, append it to the result if it fits into the current number.
// Subtract the corresponding value from the number.
// Return the final result after all the symbols have been appended.

// Explanation:
// We maintain a list romanMap of Roman numeral symbols and their corresponding integer values, sorted from largest to smallest.
// For each symbol in romanMap, we check how many times the value can be subtracted from the input number, appending the symbol to the result string each time.
// The process continues until the input number is reduced to zero.
// Example Walkthrough:

// For input 3749:
// 3000 = "MMM" (M is appended three times)
// 700 = "DCC" (D is appended once for 500, and C twice for 100)
// 40 = "XL" (40 is handled by the subtractive form XL)
// 9 = "IX" (9 is handled by the subtractive form IX)
// Result = "MMMDCCXLIX"

// For input 58:
// 50 = "L" (L is appended for 50)
// 8 = "VIII" (V is appended for 5, and I is appended three times for 3)
// Result = "LVIII"

// For input 1994:
// 1000 = "M" (M is appended once)
// 900 = "CM" (CM is the subtractive form for 900)
// 90 = "XC" (XC is the subtractive form for 90)
// 4 = "IV" (IV is the subtractive form for 4)
// Result = "MCMXCIV"
// Time Complexity:
// The time complexity is O(1) because the number of Roman numeral symbols is constant, and we iterate over a fixed set of values.
// Space Complexity:
// The space complexity is O(1), as we use a fixed amount of additional space regardless of the input size.