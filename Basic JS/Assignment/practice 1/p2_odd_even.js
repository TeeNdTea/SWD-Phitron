const oddEven = (num)=>{
    if(num%2==0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
};

no = 30;
const res = oddEven(no);
console.log(res);