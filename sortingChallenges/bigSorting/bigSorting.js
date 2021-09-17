/*
 * Complete the 'bigSorting' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY unsorted as parameter.
 */

let numberSort = [6, 31415926535897932384626433832795, 1, 3, 10, 3, 5]

function bigSorting(unsorted) {
    // Write your code here
    // Copy array ...spread operator
    // tie copied array to a variable
    // sort array from smallest to largest of numbers
    // first input is the number of integers in the array, 
    // I think I am going to have to tie the first index/first input to a variable and do such operation.
    // 
    let bigSortCopy = [...unsorted];
    let n = bigSortCopy[0];
    let bigSorted = bigSortCopy.sort((a, b) => {
        // if a.length != b.length 
        // return a.length - b.length (for bigIntegers)
        return a - b;
    })
    return bigSorted;
}

console.log(bigSorting(numberSort));

/* var sorted = unsorted.sort(function(a, b) {
    if(a.length == b.length){
        return a > b ? 1 : -1;
    }
    return a.length - b.length;        
});
console.log(sorted.join('\n'))
} */