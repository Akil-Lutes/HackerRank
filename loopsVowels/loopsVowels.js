/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    // I need a for loop that loops over the s.length
    // I can make a empty array for the vowels and empty array for the consonants
    // make an array for the vowels
    // make the S parameter into an array with the split method;

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let myStr = s.toLowerCase().split(' ').join('');
    const myVow = [];
    const myCons = [];
    for (let i = 0; i < myStr.length; i++) {
        if (vowels.includes(myStr[i])) {
            myVow.push(myStr[i]);
            
        } else {
            myCons.push(myStr[i]);
            
        }
    }

    let vowCons = myVow.concat(myCons);
    let finalVow = vowCons.join('');
    for (let i = 0; i < finalVow.length; i++) {
        console.log(finalVow[i]);
    }
}

vowelsAndConsonants("I am the EST of WWE");


// const myCons = [];

// let myVowCons = myVow.concat(myCons);
// console.log(myVowCons);
// for (let i = 0; i < myStr.length; i++) {
// console.log(myVowCons[i]);
// }

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
// function vowelsAndConsonants(s) {
//     // I need a for loop that loops over the s.length
//     // I can make a empty array for the vowels and empty array for the consonants
//     // make an array for the vowels
//     // make the S parameter into an array with the split method;

//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let myStr = s.toLowerCase().split(' ').join('');
//     const myVow = [];
//     for (let i = 0; i < myStr.length; i++) {
//         if (vowels.includes(myStr[i])) {
//             myVow.push(myStr[i]);
            
//         } else {
//             myVow.push(myStr[i]);
            
//         }
//     }

//     myVow.sort();
//     let finalVow = myVow.toString().replaceAll(',','');
//     for (let i = 0; i < finalVow.length; i++) {
//         console.log(finalVow[i]);
//     }
// }

// vowelsAndConsonants("I am the EST of WWE");