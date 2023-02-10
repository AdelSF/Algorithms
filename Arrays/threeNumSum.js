// Given an array and a value, find if there is a triplet in array whose sum is equal to the given value. If there is such a triplet present in array, then print the triplet and return true. Else return false.

// Examples: 
 
// Input: array = {12, 3, 4, 1, 6, 9}, sum = 24; 
// Output: 12, 3, 9 
// Explanation: There is a triplet (12, 3 and 9) present 
// in the array whose sum is 24. 
// Input: array = {1, 2, 3, 4, 5}, sum = 9 
// Output: 5, 3, 1 
// Explanation: There is a triplet (5, 3 and 1) present 
// in the array whose sum is 9.




function threeNumSum(array) {
    array.sort((a, b) => a - b)
    let trip = [];
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            let currSum = array[i] + array[left] + array[right];
            if (currSum === 0 && trip.length === 0) {
                trip.push(array[i], array[left], array[right]);
                return trip; // in case of not returning
//              or continue with left++ and right-- to get all the triplet values which sums to the target
            } else if (currSum < 0) {
                left++;
            } else if (currSum > 0) {
                right--;
            }
        }
    }
    return trip;
}






// actual version

// function TNS(arr) {
//   arr.sort((a, b) => a - b);
  
//   let triplet = [];
//   for (let i = 0; i < arr.length; i++) {
//     let left = i + 1;
//     let right = arr.length - 1;
    
//     while (left < right) {
//       let currSum = arr[i] + arr[left] + arr[right];
//       console.log(currSum)
//       if (currSum === 0) {
//         triplet.push([arr[i], arr[left], arr[right]])
//         i++;
//       } else if (currSum < 0) {
//         left++;
//       } else if (currSum > 0) {
//         right--;
//       }
//     }
//   }
//   return triplet;
// }

// let arr1 = [-3, 1, 2, -4, 5, -1]

// console.log(TNS(arr1))