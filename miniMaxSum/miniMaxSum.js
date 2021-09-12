/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const array = [1, 2, 3, 4, 5];
    // Write your code here
    // find the max value in the array
    // find the min value in the array
    // find a way to add the values in the array and leave out the max or min
    // I am going to need a for loop to add all of the values in the array.
    // I might need a for loop to add all values in array.
    // I will select the first and last values out of the array once I am done sorting
    // I sliced the array from the first element
    // I will have to slice the element from the last element and tie to a variable
    // I am going to have to copy the array
  
function miniMaxSum(arr) {
    // my placeholder sums of min & max
    let miniSum = 0;
    let maxSum = 0;
    // My copy of arrarys. I will be able to mutate the arrays w/o overwriting
    let highCopy = [...arr];
    let lowCopy = [...arr];
    console.log(lowCopy);
    console.log(highCopy);
    // Sorting the arrays from high to low/low to high
    let sortedHighArr = highCopy.sort(function(a, b) {
        return a - b
    })
    let sortedLowArr = lowCopy.sort(function(a, b) {
        return b - a;
    })
    // Slicing/pop the arrays from the 1st & last elements
    let slicedHighArr = sortedHighArr.slice(1);
    let slicedLowArr = sortedLowArr.slice(1);

    for (let i = 0; i < slicedHighArr.length && slicedLowArr.length; i++) {
        miniSum += slicedHighArr[i];
        maxSum += slicedLowArr[i];
    }

    return [maxSum, miniSum];
}

console.log(miniMaxSum(array));



// const array = [10, 2, 33, 4, 5];
//     // Write your code here
//     // find the max value in the array
//     // find the min value in the array
//     // find a way to add the values in the array and leave out the max or min
//     // I am going to need a for loop to add all of the values in the array.
//     // I might need a for loop to add all values in array.
//     // I will select the first and last values out of the array once I am done sorting
//     // I sliced the array from the first element
//     // I will have to slice the element from the last element and tie to a variable
//     let miniSum = 0;
//     let maxSum = 0;
// function miniMaxSum(arr) {  
//     let sortedHighArr = arr.sort(function(a, b) {
//       return a - b
//     })
    
    
//     let slicedArr = sortedHighArr.slice(1)
//     console.log(slicedArr);
//     for (let i = 0; i < slicedArr.length; i++) {
//         miniSum += slicedArr[i];
//         console.log(miniSum)
//     }
//     console.log(sortedHighArr);
    
// }

// console.log(miniMaxSum(array));