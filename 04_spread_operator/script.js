//spread operator
//spread operator o 3 dot diye show kora hoy

//shoren amader ekta array er man arekta array er sathe show korate hobe.normaly amader mathay ashbe je array2 er vitore array1 ke rekhe dilei to hobe. kintu na. seta korle amader array2 er moddhe pura array1 e dhuke jabe. seta ara chai na. 
//amra chai array1 o array2 er man eksathe show korte. ektar vitore arekta array show korte na. sei jonno amra spread operator use kore thaki

const array1 = [1,2,3];
const array2 = [array1,4,5,6]; //eta dile array2 er moddhe pura array1 e dhuke jabe(3rd bracket er vitore 3rd bracket hoye jabe). evabe use kora jabe na
console.log(array2);





const a = [1,2,3,4];
const b = [...a,5,6,7,8]; //evabe dite hobe. samne ... dile r array er vitore array show korbe na, shobgular man ek array te show korbe. etakei bole spread operator
console.log(b);


//REST PARAMETER AR SPREAD OPERATSOR DUITAI 3DOT DIYE KORTE HOY, TAI EI DUITA NIYE CONFUSION A PORA JABE NA. BARE BARE DOCUMENTATION DEKHTE HOBE