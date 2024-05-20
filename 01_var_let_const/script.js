//ES6 a mainly let o const diye variable declear kora hoy

//let holo block lebel element. mane kono function ba loop, ek kothay second bracket er vitore jodi kono let diye variable declear kora thake tahole oi block er thekei sudhu oi let variable ke access kora jabe. oi block er baire theke let ke access kora jabe na.
let age = 50;
 age = 40; //let diye define kora variable re declear dkora jay na tobe re assign kora jay. ei line er age let boshle error ashbe. tai age let na diye sudhu age=40 diye age ke re assign kora hoyeche. ei code er output 40 debe. karon ei line a age ke re assign kora hoyeche.
console.log(age);




let newAge = 77;
function sum(){ //eita ekta function ja ekta block
    let num1 = 10;
    let num2 = 10;
    const total = num1 + num2;
    return total;
}
console.log(sum());
//console.log(num2); //eitake paoar kotha. inntu let block lebel element jonne function er baire ta accessible na
console.log(newAge);//let diye declear korleo eita ke show korbe karon newAge ke function er baire declear kora hoise





for(var i = 0; i < 5; i++){
    console.log("inside loop" + i);
}
console.log("outside loop" + i); //eita baire thekeo dhorte parbe karon for loop a condition variable i ke var diye declear kora hoyeche. eikhane var na diye let dile loop er baire theke access kora jeto na


for(let i = 0; i < 5; i++){
    console.log("inside loop" + i);
}
//console.log("outside loop" + i);//eita pabe na karon let diye declear kora loop er vitore.(((((eitar output dekhte hoel ager ar diye declear kora for loop er code tuku commentout kore nite hobe noile ei console.log uporer var diye declear kora code access  kore output dekhabe)))))




//const diye dclear kora vadriable ke redefine ba re assign konotai kora jay na. pashapashi let er moto const o ekta block scope element.

const a = 4;
// const a = 5;// re declear kora jabe na
//     a = 5 //reassign o kora jabe na
console.log(a);



//object er khetre const kisuta vinno jemon
const obj = {name: "sagar"};
// obj = {age: 30};//re assign kora jabe na
obj.name = "biswas";//object a dhuke property change kortesi tai error debe na
console.log(obj.name);



