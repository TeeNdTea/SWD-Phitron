var person = "Sheila"

var temp = ["hello",5,person,{age:20,race:"caucoid"},[1,2,3]]
console.log(temp.length) //length
console.log(temp[3]) // accessing element

// adding element at end
temp.push({name:"Rini",age:26,height:5.4});
console.log(temp)
//removing element at end
temp.pop();
console.log(temp)

// adding element at front
temp.unshift(24)
console.log(temp)
//removing element at front
temp.shift()
console.log(temp)