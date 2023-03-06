// Given a number, find all the prime numbers from 1 to that number.


function primeNumbers(range){
    let primeNumberList = [];
    for(let i=2; i<=range; i++){
        checkPrime(i);
    }

    function checkPrime(number){
        let isPrime = true;
       
        if(number > 1){
            for(let j=2; j < number; j++){
                if(number % j == 0){
                    isPrime = false;
                    break;
                }
            }          
        }
        if(isPrime){
            primeNumberList.push(number);
        }  
    }
    console.log(`List of Prime Numbers: ${primeNumberList} `);
}


primeNumbers(6);  //2 3 5
primeNumbers(10);
primeNumbers(20);