// VIDEO 8

n = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const oddEven = (arr) => {
    let even = [];
    let odd = [];
    for(let i=0;i<arr.length;i++){
        const elem = arr[i];

        if(elem%2==0){
            even.push(elem);
        }
        else{
            odd.push(elem);
        }
    }
    // return even;
    return odd;
}

const res = oddEven(n);
console.log(res);