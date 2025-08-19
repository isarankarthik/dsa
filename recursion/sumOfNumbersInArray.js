let array = [5,2,1,6,3];

function findSumOfNumbersInArray(num)
{
    // base case if the location is 0, return the element in the 0th location. 
    if (num == 0) return num;
    return arr[num] + findSumOfNumbersInArray(num-1);
}


