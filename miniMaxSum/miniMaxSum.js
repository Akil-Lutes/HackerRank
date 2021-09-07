/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    // find the max value in the array
    // find the min value in the array
    // find a way to add the values in the array and leave out the max or min
    // I am going to need a for loop to add all of the values in the array.
    const array = [10, 2, 33, 4, 5];
    console.log(Math.max(...array));
    console.log(Math.min(...array));

}

miniMaxSum()