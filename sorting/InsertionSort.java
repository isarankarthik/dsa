public class Main
{
    public void insertionSort(int[] arr, int n) 
    {
        for(int i = 0;i<n;i++) {
            int j = i;
            while (j>0 && arr[j-1] > arr[j]) {
                int temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                j--;
            }
        }
        for(int ch : arr)
        {
            System.out.println(ch);
        }
        
    }
	public static void main(String[] args) {
		Main obj = new Main();
		int[] arr = {13,46,24,52,20,9};
		int length = arr.length;
		obj.insertionSort(arr,length);
	}
}
