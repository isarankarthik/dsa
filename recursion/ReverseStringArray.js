function reverseArray(arr)
{
    return this.reverseStringArray(arr, 0, arr.length -1);
}

function reverseStringArray(arr, left, right) 
{
    if (left >=right) return arr;
    else {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return reverseStringArray(arr, left+1, right-1);
}