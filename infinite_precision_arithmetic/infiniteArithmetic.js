/**
 * @author Umesh
 */

/**
 * @constant infiniteNumberChecking
 * Importing to Check the Number is Infinite or Not
 */
const InfiniteNumber = require("./infiniteNumberChecking.js");

/**
 * @class infiniteArithmetic
 * To Perform arithmetic operations on numbers represented as arrays
 */
class infiniteArithmetic {
  // Addition operation
  /**
   * This function is used to perform addition of two arrays
   * @param {[number]} arr1 First array of numbers
   * @param {[number]} arr2 Second array of numbers
   * @returns {number[]} Addition of arr1 & arr2 represented as an array
   */
  addition(arr1, arr2) {
    // Checking if all objects are valid numbers or not
    arr1 = new InfiniteNumber(arr1);
    arr2 = new InfiniteNumber(arr2);

    // Ensure numeric elements with string conversion if needed
    arr1 = arr1.map((x) => (isNaN(x) ? Number(x) : x));
    arr2 = arr2.map((x) => (isNaN(x) ? Number(x) : x));

    // Validate input: Both arrays must contain numbers
    if (!arr1.every(Number.isFinite) || !arr2.every(Number.isFinite)) {
      throw new Error(
        "Invalid input: Non-numeric elements found in one or both arrays."
      );
    }

    // Handle different lengths effectively
    const longerArr = arr1.length >= arr2.length ? arr1 : arr2;
    const shorterArr = longerArr === arr1 ? arr2 : arr1;
    const shorterDiff = longerArr.length - shorterArr.length;

    // Prepend zeros to the shorter array for alignment
    const paddedShorterArr = new Array(shorterDiff).fill(0).concat(shorterArr);

    // Efficient digit-by-digit addition with carry propagation
    let result = [];
    let carry = 0;
    for (let i = longerArr.length - 1; i >= 0; i--) {
      const sum = carry + longerArr[i] + paddedShorterArr[i];
      result.unshift(sum % 10);
      carry = Math.floor(sum / 10);
    }

    // Add leading carry digit if necessary
    if (carry) {
      result.unshift(carry);
    }

    return result;
  }

  // Subtraction operation
  /**
   * This function is used to perform subtraction of two arrays
   * @param {[number]} arr1 First array of numbers
   * @param {[number]} arr2 Second array of numbers
   * @returns {number[]} Subtraction of arr1 & arr2 represented as an array
   */
  subtraction(arr1, arr2) {
    // Function to handle borrowing
    arr1 = new InfiniteNumber(arr1);
    arr2 = new InfiniteNumber(arr2);

    function borrow(arr, i) {
      if (arr[i - 1] === 0) {
        arr[i - 1] = 9;
        borrow(arr, i - 1);
      } else {
        arr[i - 1] -= 1;
      }
    }

    // Function to remove leading zeros
    function removeLeadingZeros(arr) {
      let i = 0;
      while (arr[i] === 0 && i < arr.length - 1) {
        i++;
      }
      return arr.slice(i);
    }

    const result = [];
    let i = arr1.length - 1;
    let j = arr2.length - 1;

    while (i >= 0 || j >= 0) {
      const value1 = i >= 0 ? arr1[i] : 0;
      const value2 = j >= 0 ? arr2[j] : 0;

      if (value1 < value2) {
        arr1[i - 1] -= 1;
        arr1[i] += 10;
      }

      const diff = (value1 + 10 - value2) % 10;
      result.unshift(diff);

      i -= 1;
      j -= 1;
    }

    return removeLeadingZeros(result);
  }

  // Multiplication operation
  /**
   * This function is used to perform multiplication of two arrays
   * @param {[number]} arr1 First array of numbers
   * @param {[number]} arr2 Second array of numbers
   * @returns {number[]} Multiplication of arr1 & arr2 represented as an array
   */
  multiply(arr1, arr2) {
    arr1 = new InfiniteNumber(arr1);
    arr2 = new InfiniteNumber(arr2);

    let result = [0];

    for (let i = arr2.length - 1; i >= 0; i--) {
      let tempResult = [];
      let carry = 0;

      for (let j = arr1.length - 1; j >= 0; j--) {
        let product = arr1[j] * arr2[i] + carry;
        carry = Math.floor(product / 10);
        tempResult.unshift(product % 10);
      }

      if (carry > 0) {
        tempResult.unshift(carry);
      }

      for (let k = 0; k < arr2.length - 1 - i; k++) {
        tempResult.push(0);
      }

      result = this.addition(result, tempResult);
    }

    return result;
  }
}

function testingFunction() {
  console.log("\n\n");

  const t = new infiniteArithmetic();

  // Addition Testing
  const arr1 = [1, 2];
  const arr2 = [1, 0];
  console.log(t.addition(arr1, arr2));

  // Subtraction Testing
  const arr3 = [0, 0, 1, 0, 0];
  const arr4 = [1, 2, 7];
  let ans;
  if (BigInt(arr3.join("")) > BigInt(arr4.join(""))) {
    ans = t.subtraction(arr3, arr4);
  } else {
    ans = t.subtraction(arr4, arr3);
    ans.unshift("-");
  }
  console.log(ans);

  // Multiplication Testing
  console.log(t.multiply([1, 0], [2, 0]));

  console.log("\n\n");
}

testingFunction();

module.exports = infiniteArithmetic;