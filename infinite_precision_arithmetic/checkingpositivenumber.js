/**
 * @function isArrayPositive 
 * @param arr{[number]}
 * @throws {Error} If any element in the array is not a positive number
 * @throws {Error} if an array dont have elements
 */

function isArrayPositive(arr) {

  /**
   * checking the array length , if it's zero throw error.
   */

  if (arr.length == 0) {

    throw new Error(`Inavlid input`)
  }

  /**
 * checking value is string or not
 * checking value is number or not
 * checking value is decimal or not
 */

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || isNaN(arr[i]) || arr[i] % 1 !== 0) {
      throw new Error(`it Not Positive Number`)
    }
  }

}


module.exports = isArrayPositive;


