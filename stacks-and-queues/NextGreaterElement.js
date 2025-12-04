class Solution {
  nextLargerElement(arr) {
    let stack = [];
    let result = new Array(arr.length).fill(-1);

    for (let i = 0; i < arr.length; i++) {
      while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
        let idx = stack.pop();
        result[idx] = arr[i];
      }
      stack.push(i);
    }
    return result;
  }
}
