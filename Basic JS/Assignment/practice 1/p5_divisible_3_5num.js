const divisible = (n)=>{
    if(n%3==0 && n%5==0){
        return 'Divisible by both 3 & 5';
    }
    else if(n%5==0){
        return 'Divisible by 5';
    }
    else if(n%3==0){
        return 'Divisible by 3';
    }
    else{
        return 'Not divisible';
    }
}

num = 15;
const quotient = divisible(num);
console.log(quotient)