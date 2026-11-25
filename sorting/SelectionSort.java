public class SelectionSort
{
    public void selectionSort(int[] arr, int n)
    {
        for(int i = 0; i<n-1; i++) {
           int minimum = i;
            for(int j = i; j<n; j++) 
            {
                if(arr[j] < arr[minimum]) {
                    minimum = j;
                }
            }
            int temp = arr[minimum];
            arr[minimum] = arr[i];
            arr[i] = temp;
        }
        for(int ch : arr) {
            System.out.println(ch);
        }
    }
	public static void main(String[] args) {
		SelectionSort obj = new SelectionSort();
		int[] arr = {13,46,24,52,20,9};
		int length = arr.length;
		obj.selectionSort(arr,length);
	}
}