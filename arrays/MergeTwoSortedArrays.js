function mergeTwoSortedArrays(nums1, m, nums2, n)
{
    let tempArray = [];
    let tempIndex = 0;
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            tempArray[tempIndex] = nums1[i];
            i++;
            tempIndex++;
        } else if (nums1[i] == nums2[j]) {
            tempArray[tempIndex] = nums1[i];
            tempIndex++;
            tempArray[tempIndex] = nums2[j];
            i++;
            j++;
            tempIndex++;
        } else {
            tempArray[tempIndex] = nums2[j];
            j++;
            tempIndex++;
        }
    }

    if (i != m) {
        for (let x = i; x < m; x++) {
            tempArray[tempIndex] = nums1[x];
            tempIndex++;
        }
    } else if (j != n) {
        for (let y = j; y < n; y++) {
            tempArray[tempIndex] = nums2[y];
            tempIndex++;
        }
    }

    for (let k = 0; k < tempArray.length; k++) {
        nums1[k] = tempArray[k];
    }
}
