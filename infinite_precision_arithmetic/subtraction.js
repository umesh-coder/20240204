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
 * @function borrow 
 * @param {[number]} arr 
 * @param {number} i 
 * This Function make sure if the value is equal to zero then
 * add 9 to it otherwise do -1 subtract to the value
 */

function borrow(arr, i) {


    if (arr[i - 1] == 0) {
        arr[i - 1] = 9
        borrow(arr, i - 1)
    }

    else {

        arr[i - 1] -= 1
    }
    return arr

}

/**
 * @function subtraction 
 * @param arr1 {[number]}
 * @param arr2{[number]}
 * @returns {[number]} subtraction of arr1 & arr2
  */


function subtraction(arr1, arr2) {

    //Checking the All array Element are positive number or not

    isArrayPositive(arr1)
    isArrayPositive(arr2)

    let result = []

    i = arr1.length - 1 // index of arr1
    j = arr2.length - 1 // index of arr2

    while (i >= 0 || j >= 0) {

        let value1 = 0
        let value2 = 0

        if (arr1[i] < arr2[j]) {
            arr1[i] += 10
            borrow(arr1, i)
        }

        if (arr1[i] != undefined) {
            value1 = arr1[i]
        }

        if (arr2[j] != undefined) {
            value2 = arr2[j]
        }

        let diff = value1 - value2
        result = [diff].concat(result)

        i -= 1
        j -= 1
    }
    return result
}


function removing_zeros(arr) {

    while (arr[0] == 0) {
        arr.shift()
    }
    return arr
}


// it Used to export this file
module.exports = subtraction;


/**
 * @function test
 * this function is used to test 
 */

function test() {
    arr1 = [0, 0]
    arr2 = [1, 2, 7]

    if (arr1.length > arr2.length) {
        let ans = subtraction(arr1, arr2)
        console.log(ans)
    }

    else {
        let ans = subtraction(arr2, arr1)
        removing_zeros(ans)
        console.log(['-'].concat(ans))
    }
}



test()
