const unique = (arr)=>{
    const temp = [];
    for(let i=0;i<arr.length;i++){
        let duplicateFound = false;
        for(let j=0;j<temp.length;j++){
            if(arr[i]==temp[j]){
                duplicateFound = true;
                break;
            }
        }
        if(!duplicateFound){
            temp.push(arr[i]);
        }

    }

    return temp;
}
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const out = unique(numbers);
console.log(out); 