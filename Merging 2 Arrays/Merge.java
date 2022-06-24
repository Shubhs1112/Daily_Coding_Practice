public class Merge {
    public void mergeArray(){
        //Declaration of arrays
        int arr1[] = {10, 23, 11, 9, 0};
        int arr2[] = {21, 2, 1, 19, 13, 8, 5};
        int arr3[] = new int[l1 + l2];

        //Storing Length of arrays in variables
        int l1 = arr1.length-1;
        int l2 = arr2.length-1;

        int i=0, j=0, k=0;

        //While loop to Merge arrays (for arrays of same length)
        while(i<l1 && j<l2){
           arr3[k] = arr1[i];
           i++;
           k++;
           arr3[k] = arr2[j];
           j++;
           k++;
        }
        while(i<l1){
            arr3[k] = arr1[i];
            i++;
            k++;
        }
        while(j<l2){
            arr3[k] = arr2[j];
            j++;
            k++;
        }
        //For printing the Array
        for(int n=0; n<arr3.length; n++){
            System.out.print(arr3[n]+" ");
        }

    }
}
