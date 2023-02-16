/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * 
 * 
 */

  // inital number
  // loop 1-20
  // if all in dividble return number
  // other wise add one to initial number and start over the loop;
    // improvements to make it more efficient: 
        // loop from 20 to 1 
        // add up 20 by 20, because if its not dividable by 20, the rest doesnt matter.

function isDividable() {  
    let iniNum = 1;          // 1
    let checkCurrNumber = 1; // 6
    while (iniNum <= 20) {
      if ((checkCurrNumber % iniNum) === 0) {
        iniNum++;
        if (iniNum === 20) {
          return checkCurrNumber;
        }
      } else {
        checkCurrNumber++;
        iniNum = 1;
      }
    }
  }
  


  function isDividableHumanVersion() {
    let checkCurrNumber = 20;
    while(true) {
      let didIFindTheNumber = true;
      for(let i = 20; i >= 1; i--) {
        if (checkCurrNumber % i !== 0) {
          didIFindTheNumber = false;
          break;
        }
      }
      if (didIFindTheNumber) {
        return checkCurrNumber;
      } else {
        checkCurrNumber += 20;
      }
    }
  }
  
  console.log(isDividableHumanVersion());