// VIDEO 5

const products = [
    {type1 : 'Samsung', model : 'A', price : 700},
    {type2 : 'Iphone', model : 'U', price : 800},
    {type3 : 'Xiaomi', model : 'O', price : 250},
    {type3 : 'Tesla', model : 'X', price : 400}
]

// for(let i=0; i<products.length; i++){
//     console.log(products[i]);
// }

// for(let i=0; i<products.length; i++){
//     const elem = products[i];
//     // if(elem.type1){
//     if(elem.model=='X'){
//         console.log(elem);
//     }
// }

const res = products.find(val=>val.model=='U');
console.log(res);