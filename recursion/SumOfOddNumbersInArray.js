let arr = [5,2,1,6,3];

function findSumOfOddElementsInArray(num)
{
    if (num == 0) return arr[0];

    if (arr[num]%2 == 0) {
        return findSumOfOddElementsInArray(num-1);
    } else {
        return arr[num] + findSumOfOddElementsInArray(num-1);
    }
}