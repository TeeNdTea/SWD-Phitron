const monthlysavings = (pay,lc)=>{
    if(!Array.isArray(pay) || typeof lc != 'number'){
        return 'invalid input';
    }
    let temp = 0;
    for(let i=0;i<pay.length;i++){
        let income = pay[i];
        if(typeof income != 'number'){
            continue;
        }
        if(income>=3000){
            income -= (income*0.2);
        }
        temp += income;
    }
    const saving = temp - lc;

    if(saving>=0){
        return saving;
    }
    else{
        return 'earn more';
    }
}

const output = monthlysavings([1000,2000,2500],5000);
console.log(output);
