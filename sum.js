/*function sum(a, b) {
    return a + b;
}

// make function available to all files
module.exports = sum;
*/

function myFunction(input) {
    if(typeof input !== 'number') {
        throw new Error('Invalid Input')
    }
}

module.exports = myFunction;
