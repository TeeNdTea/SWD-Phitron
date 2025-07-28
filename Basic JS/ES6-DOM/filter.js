// VIDEO 6

const products = [
    {type1 : 'Samsung', model : 'A', price : 700,color : 'pastel'},
    {type2 : 'Iphone', model : 'U', price : 800, color : 'purple'},
    {type3 : 'Xiaomi', model : 'O', price : 250,color : 'pastel'},
    {type3 : 'Tesla', model : 'X', price : 400, color : 'white'},
    {type3 : 'Pie', model : 'J', price : 450,color : 'ash'},
    {type3 : 'One+', model : 'I', price : 300, color : 'pastel'},
    {type3 : 'Redmi', model : 'N', price : 150, color : 'ash'}
]

const filter_color = products.filter(val=>val.color=='pastel');
console.log(filter_color)