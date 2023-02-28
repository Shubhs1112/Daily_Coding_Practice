// Given a number, find all the prime numbers from 1 to that number.

function checkPrime(number){
    let isPrime = true;
    
    if(number === 1){
        console.log(`${number}: is nor prime neither composite...`);
    }
    else if(number > 1){
        for(let i=2; i < number; i++){
            if(number % i == 0){
                isPrime = false;
                break
            }
        }
        if(isPrime){
            console.log(`${number}: is Prime Number...`);
        }
        else{
            console.log(`${number}: is not a Prime Number...`);

        }
    }
    else{
        console.log(`${number}: is not a Prime Number...`);
    }
}

checkPrime(4);
checkPrime(1);