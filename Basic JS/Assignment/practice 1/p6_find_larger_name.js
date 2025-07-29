const getName = (n)=>{ 
    let temp = n[0];
    for(let i=0; i<n.length;i++){
        const elem = n[i];
        if(elem.length>temp.length){
            temp = elem;
        }
    }
    return temp;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const out = getName(friends);
console.log(out);