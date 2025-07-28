// VIDEO 7

const products = [
    {type1 : 'Samsung', model : 'A', price : 700,color : 'pastel'},
    {type2 : 'Iphone', model : 'U', price : 800, color : 'purple'},
    {type3 : 'Xiaomi', model : 'O', price : 250,color : 'pastel'},
    {type3 : 'Tesla', model : 'X', price : 400, color : 'white'},
    {type3 : 'Pie', model : 'J', price : 450,color : 'ash'},
    {type3 : 'One+', model : 'I', price : 300, color : 'pastel'},
    {type3 : 'Redmi', model : 'N', price : 150, color : 'ash'}
]

const mapping_elem = products.map(val=>val.model);
console.log(mapping_elem)

const operation_map = products.map(val=>val.price*2);
console.log(operation_map)


const numss = [23,41,67,39,85]
const res = numss.forEach(function(num,idx){
    console.log(`Element at index ${idx} = ${num}`);
});