const sortNum = (arr)=>{
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){        //boro val check korbo
                let temp = arr[j];      // boro val store
                arr[j] = arr[j+1];      // pasher val boro val er jaygay nibo
                arr[j+1] = temp;        // pasher val er jayhay temp val k rakhbo
            }
        }
    }
    return arr
}

num = [3,18,7,15,5,9,19,20,6,13,10,1,4,11,16,12,8,2,17,14]
const res = sortNum(num);
console.log(res); 


// Sort Function

nums = [3,18,7,15,5,9,19,20,6,13,10,1,4,11,16,12,8,2,17,14]
const sortNums = nums.sort((x,y)=> (x-y));
console.log(sortNums);