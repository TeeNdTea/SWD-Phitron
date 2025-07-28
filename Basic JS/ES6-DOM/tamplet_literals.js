// VIDEO 2
// templet literal = `` works for dynamic val. in other words helps to concatenate

const countryName = 'Bhutan'
// const countryDes = 'The Carbon Neutral country of the world is' + " "+ countryName +" "+ 'which is neighbouring to BD'
const countryDes = `The Carbon Neutral country of the world is ${countryName} which is neighbouring to bd`
 console.log(countryDes) 


//  Spread operator - ...

const num1 = [1,2,3,4,5]
const num2 = [6,7,8,9,10]

console.log([...num1,...num2])