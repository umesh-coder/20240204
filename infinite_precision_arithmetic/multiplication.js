/**
 * @author Umesh
 */

/**
 * @constant addition {function}
 */

const addition = require('./add.js');

/**
 * @function multiplication to perform Multiplication of two Arrays
 * @param {[number]} arr1 storing Array 1
 * @param {[number]} arr2 storing Array 2
 * @returns {[number]} Returns Multipliaction of two Arrays
 */

function multiplication(arr1, arr2) {

    let result = [0]
    let j = arr2.length - 1
    let count = 0

    //

    while (j >= 0) {
        let temp_sum = [0]


        // RECURSIVE addition with last number with arr1 
        while (arr2[j] > 0) {
            temp_sum = addition(temp_sum, arr1)
            arr2[j] -= 1
        }

        // add zero for next after first addition
        let i = 0
        while (i < count) {
            temp_sum.push(0)
            i++
        }

        count += 1
        result = addition(result, temp_sum)

        j -= 1
    }

    return result
}

/**
 * @function test
 * To test the Function
*/

function test() {
    const arr1 = [1, 2, 3]
    const arr2 = [0,0,0]
    console.log(multiplication(arr1, arr2))
}

test()

