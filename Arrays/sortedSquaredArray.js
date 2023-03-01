// write a function that takes a none empty sorted array with integers and returns squared number of each integer ,
// the result array should be sorted in accending order. (pay attention to negative numbers, because the square
// of a negative number becomes a positive number and the results array wont be sorted.
// timw and space should be O(n)




function sortedSquaredArray(array) {
    // Write your code here.
    let leftIdx = 0;
    let rightIdx = array.length - 1;
    let res = new Array(array.length).fill(0)
    let resIdx = array.length - 1;
  
    while (leftIdx <= rightIdx) {
      let leftNum = Math.abs(array[leftIdx]);
      let rightNum = Math.abs(array[rightIdx]);
  
      if ((leftNum * leftNum) > (rightNum * rightNum)) {
          res[resIdx] = leftNum * leftNum
          leftIdx++;
      } else {
          res[resIdx] = rightNum * rightNum
          rightIdx--;
      }
      resIdx--;
    }
    return res;
  }
  
  let arr1 = [3, 4, 5]
let arr = [1, -2, 3, -4, 5]

console.log(sortedSquaredArray(arr))
console.log(sortedSquaredArray(arr1))