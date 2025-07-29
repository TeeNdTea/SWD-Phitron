const getNum = (n)=>{ 
    let temp = n[0];
    for(let i=0; i<n.length;i++){
        const elem = n[i];
        if(elem>temp){
            temp = elem;
        }
    }
    return temp;
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const out = getNum(numbers);
console.log(out);