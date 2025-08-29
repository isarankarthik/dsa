function mergeSort(nums) {
  if (nums.length == 1) return nums;

  let mid = Math.floor(nums.length / 2);

  let left = mergeSort(nums.slice(0, mid));

  let right = mergeSort(nums.slice(mid));

  return mergeSortHelper(left, right);
}

function mergeSortHelper(left, right) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}
