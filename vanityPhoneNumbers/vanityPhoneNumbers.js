/*
 * Complete the 'vanity' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY codes[i]
 *  2. STRING_ARRAY numbers
 */

// codes[i] parameter is the vanity code
// vanity codes[i] will be shorter length than the phone number
// numbers is the actual number in E.164 format +15digits (0-9)
function vanity(codes, numbers) {
    // For loop to get the character of the vanity code to match numerical number
    // length of code has to match numbers that were provided
    // Return an sorted array
    let vanCode = [];
    for (let i = 0; i < codes.length; i++) {
        if (codes[i] === 'A' || codes[i] === 'B' || codes[i] === 'C') {
            vanCode.push(2);
        } else if (codes[i] === 'D' || codes[i] === 'E' || codes[i] === 'F') {
            vanCode.push(3);
        } else if (codes[i] === 'G' || codes[i] === 'H' || codes[i] === 'I') {
            vanCode.push(4);
        } else if (codes[i] === 'J' || codes[i] === 'K' || codes[i] === 'L') {
            vanCode.push(5);
        } else if (codes[i] === 'M' || codes[i] === 'N' || codes[i] === 'O') {
            vanCode.push(6);
        } else if (codes[i] === 'P' || codes[i] === 'Q' || codes[i] === 'R' || codes[i] === 'S') {
            vanCode.push(7);
        } else if (codes[i] === 'T' || codes[i] === 'U' || codes[i] === 'V') {
            vanCode.push(8);
        } else if (codes[i] === 'W' || codes[i] === 'X' || codes[i] === 'Y' || codes[i] === 'Z') {
            vanCode.push(9);
        } else {
            vanCode.push(10)
        }
    }

    let fullNumber = [];
    let strNum = numbers.toString();
    for (let h = 0; h < strNum.length; h++) {
        console.log(strNum[h])
        if (strNum[h] != vanCode) {
            fullNumber.push(strNum[h]);
            }
    } 
    console.log(vanCode);
    console.log(fullNumber);
}

vanity('CODES', 919810155555);

/* 

*/