function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqIdx = 0;
  let arrIdx = 0;

  while (seqIdx < sequence.length && arrIdx < array.length) {
    if (sequence[seqIdx] === array[arrIdx]) {
      seqIdx++;
      if (seqIdx === sequence.length) {
        return true;
      }
    }
    arrIdx++;
  }
  return false;
}


let arr1 = [5, 1, 22, 25, 6, -1, 8, 10];
let subSeq = [1, 6, -1, 10]

console.log(isValidSubsequence(arr1, subSeq)); // true
