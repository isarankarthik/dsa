//This is the code for the bubble sort which checks the adjacent element and the largest element goes to the last of the array.

public class Main
{
    public void bubbleSort(int[] arr, int n)
    {
      for(int i = 0;i<n;i++) 
      {
          for(int j = 1;j<n-i;j++)
          {
              if(arr[j] < arr[j-1]) 
              {
                  int temp = arr[j];
                  arr[j] = arr[j-1];
                  arr[j-1] = temp;
              }
          }
      }
        for(int ch : arr) {
            System.out.println(ch);
        }
    }
	public static void main(String[] args) {
		Main obj = new Main();
		int[] arr = {13,46,24,52,20,9};
		int length = arr.length;
		obj.bubbleSort(arr,length);
	}
}
