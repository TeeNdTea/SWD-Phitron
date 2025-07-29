// VIDEO 9
const name = (arr)=>{
    let temp = arr[0];
    for(let i=0; i<arr.length; i++){
        const elem = arr[i];
        if(elem.length>temp.length){
            temp = elem;
        }
    }
    return temp;
}


const flowers = ['helianthus','iris','lilium','narcissus']
const output = name(flowers)
console.log(output)
