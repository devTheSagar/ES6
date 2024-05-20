//object destructing

const object = {
    name: "Sagar",
    age: 22,
    id: 6
}
console.log(object.name);
console.log(object.age);
console.log(object.id);
//ager niyomer moto bare bare object.property na kore amra destructure er maddhome choto kore korte pari
console.log(`----------`);


const obj = {name:"aaa", age:55, id:5}
const {name, age, id} = obj; //object destructing
console.log(name, age, id);