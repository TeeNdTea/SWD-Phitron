// VIDEO 4

// function sum(a,b){
//     const add = a + b;
//     console.log(add);    // ekbar use
// }
// sum(2,3)

// return function is called to use it outside function
function sum(a,b){
    const add = a + b;
    return add; // multiple use
}
const out = sum(2,3);
console.log(out)

// Arrow Function in ES6

const sum2 = (x,y) => {
    return x + y;
}
const ans = sum2(10,20);
console.log(ans);