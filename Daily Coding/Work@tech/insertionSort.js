function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        for(let j=i; j>0; j--){
            if(arr[j] < arr[j-1]){
                const temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
            else{
                break;
            }

        }
    }
    console.log(arr);
}

insertionSort([5,4,2,1,3,1]);
insertionSort([12, 11, 13, 5, 6 ]);