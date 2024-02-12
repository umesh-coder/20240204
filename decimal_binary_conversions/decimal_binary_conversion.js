/**
 * @author Umesh
 * 
 * Problem Statement : 1)To Convert Decimal to Binary (2S Complement)
 *                     2)To Convert Binary to decimal (2S Complement)
 */


/**
 * @function decimalToBinary2sComplement
 * @param {number} decimalNumber 
 * @param {number} length 
 * @returns {[number]} binaryArray
 * this function convert decimal to binary (2's complement)
 */


function decimalToBinary2sComplement(decimalNumber, length) {
    let binaryArray = []
  
    
    if (decimalNumber < 0) {
     

      const twoToLengthPower = Math.pow(2, length)
      const twoComplement = twoToLengthPower - Math.abs(decimalNumber)
      let temp = twoComplement.toString(2).padStart(length, '0')
      binaryArray = temp.split('').map(Number)
    } else if (decimalNumber >= Math.pow(2, length)) {
      throw new Error("Decimal number is too large for the specified length.")
    } else {


      // Convert positive numbers to binary efficiently
      while (decimalNumber > 0) {
        binaryArray.unshift(decimalNumber % 2)
        decimalNumber = Math.floor(decimalNumber / 2)
      }
    }
  
    // Pad with zeros to reach the desired length
    while (binaryArray.length < length) {
      binaryArray.unshift(0)
    }
  
    return binaryArray
  }



//decimal to Binary

  console.log(decimalToBinary2sComplement(8, 11))
  console.log(decimalToBinary2sComplement(-8, 11))


/**
 * @function binaryToDecimal2sComplement
 * @param {[number]} binaryArray 
 * @returns {number} decimalNumber
 * this function convert binary to decimal (2's complement)
 */

  
  
  function binaryToDecimal2sComplement(binaryArray) {
    // Check if all digits are 0 (special case)
    if (binaryArray.every(digit => digit === 0)) {
      return 0
    }
  
    // Check if the most significant bit is 1 (negative number)
    const isNegative = binaryArray[0] === 1
  
    // Calculate the length of the binary array
    const length = binaryArray.length
  
    // Convert binary digits to decimal values
    let decimalNumber = 0;
    for (let i = 0; i < length; i++) {
      decimalNumber += binaryArray[i] * Math.pow(2, length - 1 - i)
    }
  
    // Handle negative numbers by subtracting from 2^length
    if (isNegative) {
      decimalNumber = decimalNumber - Math.pow(2, length)
    }
  
    return decimalNumber
  }


//Binary to decimal 

  console.log(binaryToDecimal2sComplement([0, 0, 0, 0, 0,0, 0, 1, 0, 0,0]))
  console.log(binaryToDecimal2sComplement([1, 1, 1, 1, 1,1, 1, 1, 0, 0,0]))
