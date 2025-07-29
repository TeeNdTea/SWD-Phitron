const checkLeap = (n) =>{
    if((n%4==0 && n%100!=0) || n%400==0){
        return 'Leap Year';
    }
    else{
        return 'NULL'
    }
}

year = 1964;
const output = checkLeap(year);
console.log(output);