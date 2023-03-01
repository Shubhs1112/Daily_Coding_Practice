var newArr = [];
function evenNumberDigits(arr){
    for(let i=0; i<arr.length; i++){
        let element = arr[i].toString();
        if(element.length % 2 == 0){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
evenNumberDigits([-22,-333,-1]);

// 42, 5775, 34, 45, 3556
