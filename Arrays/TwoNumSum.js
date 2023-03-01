function twoNumberSum(array, targetSum) {
    // Write your code here.
    let res = [];
    for (let i = 0; i < array.length - 1; i++) {
      let currI = array[i];
      for (let j = i + 1; j < array.length; j++) {
        if ((array[i] + array[j]) === targetSum) {
          res.push([array[i], array[j]])
        }
      }
    }
  
    if (res.length > 1) {
      return res;
    } else if (res.length === 1) {
      return res[0];
    } else {
      return res;
    }
  }