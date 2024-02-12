/**
 * @author Umesh
 */

/**
 * @constant isArrayPositive {function}
 * This is used to import function isArrayPositive() to Check the 
 * array contain positive number or not
 */

const isArrayPositive = require('./checkingpositivenumber.js');


/**
 * This Function s used to perform addition of two arrays
 * @param {[number]} arr1 
 * @param {[number]} arr2 
 * @returns {number} Addition of arr1 & arr2
 */

function addition(arr1, arr2) {

    //Checking the All array Element are positive number or not

    isArrayPositive(arr1)
    isArrayPositive(arr2)

    let result = []
    let carry = 0

    i = arr1.length - 1 //index for arr1
    j = arr2.length - 1 //index for arr2

    while (i >= 0 || j >= 0) {

        let value1 = 0
        let value2 = 0

        // if if arr1[i] does not exist then we taken value to add as zero
        if (arr1[i]) {
            value1 = arr1[i]
        }

        // if arr2[j] does not exist then we taken value to add as zero
        if (arr2[j]) {
            value2 = arr2[j]
        }

        let sum = value1 + value2 + carry
        let rem = sum % 10
        result = [rem].concat(result)
        carry = Math.floor(sum / 10)

        i -= 1 // Updating index of arr1
        j -= 1 // Updating indecx of arr2
    }

    if (carry) {
        result = [carry].concat(result)
    }

    return result
}


// it Used to export this file
module.exports = addition;



//Testing 
function test() {
    arr1 = [1, 2, 2, 2, 1, 4]
    arr2 = [0,2.5]
    console.log(addition(arr1, arr2))
}


