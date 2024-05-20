//array distructuring


//normal array and its output
const array = [1,2,3,4,5];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
//normally amader array er element paite hole bare bare amader array index dhore dakte hoy ja khubi kostokoar. ES6 a amra etake structuring korte parbo ebong ekta variable er under a rakhte parbo
console.log(`----------------`);

const array1 = [6,7,8,9,10];
let [a,...z] = array1; //ekhane z holo spread operator. ...z sudhu tokhoni dibo jokhon amra baki array element gulao show korte chaibo
console.log(a,z);


