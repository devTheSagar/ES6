// V V I

//iterator

let array = [1,2,3,4,5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}


//uporer niyomer shoja version ilarator diye lekha jay
let array1 = ['a','b','c','d','e'];
for(Element of array1){
    console.log(Element);
}

//prothom code a amra ekta for loop niye bole dilam j array er vitore ja ja ase ek ek kore index bariye console a show koro
//same jinish tai amara porer code a korsi kintu itarator diye


let a = [1,2,3,4,5]; //array iterable
console.dir(a);
//ekhon browser a giye console a giye array te click kore scrolll kore niche jeye dekha jabe j ei array ta itarable kina


let obj = {name:'sss', id:1212, age:222} //object iterable na
console.dir(obj);
//ekhon browser a giye console a giye array te click kore scrolll kore niche jeye dekha jabe j ei object ta itarable kina

//object je iterable na ta ekta for of loopp chalale aro clear hobe
let obj1 = {name:"aaa", age: 88, prof:"coder"}
for(Element of obj1){
    console.log(Element); //error dekhabe
}

//documentation dekhte hobe
