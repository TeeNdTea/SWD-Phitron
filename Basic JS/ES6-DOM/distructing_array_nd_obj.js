// VIDEO 3
const person = {
    name : 'Sheina',
    age : 20,
    race : 'Mongoloid',
    pet : {
        animal : 'cat',
        color : 'peach',
        breed : 'Sphynx',
        kittens : 5
    },
    flowers : ['Lily','Tulip','Peony']
}

// suppose we need age 5 times in 5 different place
// console.log(person.age)
// console.log(person.age)
// console.log(person.age)
// console.log(person.age)
// console.log(person.age)

// Instead we can-
const for_age = person.age;
console.log(for_age)

// For accessing the elem from obj
const{age,flowers,pet} = person
console.log(pet)
console.log(flowers)

const names = ['felina', 20, 'Moscow'];

// accessing via indexing
const x = names[0];
const Age = names[1]
console.log(x,Age)

// distructing array -  assigning the array elements into variables

const [a,b,c] = names;
console.log(a,b,c)