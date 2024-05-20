//for of & for in loop

//normal for loop
for(let i = 0; i < 10; i++){
    console.log(i); //0 - 9 porjonto dekhabe
}

console.log("-------------");

//for of loop
//for of loop a array er dhob element show kore
//etar age variable ba array declear korte hoy, ekhane array declear kore kora hole
const array = [1,2,3,4,5];
for(newArray of array){ //je name dhore call korbo sei nam tarpore of tarpore array name
    console.log(newArray); //array er shob value dekhabe
}


console.log("-------------");


//for in loop
//for in loop a 0 theke array er index show kore
const array1 = [6,7,8,9,10];
for(newArray1 in array1){
    console.log(newArray1); //0 - 4 porjonto dekhabe karon for in loop a array er index show kore
}


//for in er khetre array na diye object o deoa hay

const obj = {
    name : "aaa",
    age: 55,
    profession: "coder"
}
for(info in obj){
    console.log(info);
}

