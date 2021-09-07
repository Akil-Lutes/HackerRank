/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

let a = [17, 28, 30];
let b = [99, 16, 8];

function compareTriplets(a, b) {
    // I am going to need a foor loop, maybe another for loop
    // I am going to need an if-statement to check condition
    // I am going to need a variable [i] to go through index
    // I am going to return an array of the win tallies
    // I also want to add up those win tallies to push in the array
    // two different tally variables
    // can also make a length variable of a & b
    // win tally array spot a[0]
    // win tally array spot b[1]
    let winTally = []; // I can push the total after for loop
    let tallyA = 0;
    let tallyB = 0;
    const abLength = a.length;

    for (let i = 0; i < abLength; i++) {
        if (a[i] > b[i]) {
            tallyA += 1;
        } if (b[i] > a[i]) {
            tallyB += 1;
        }
    }
    winTally.push(tallyA)
    winTally.push(tallyB)
    return winTally;
}

compareTriplets(a, b);
