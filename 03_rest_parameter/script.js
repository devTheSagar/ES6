//rest parameter ba (obosishto parameter)

function rest(...name){ //ekhane ... na dile sudhu prothom argument mane aaa show korbe 
    console.log(name);
}
rest("aaa","bbb","ccc");


//rest parameter hposse emon ekta jinish - dhoren apni function er moddhe ekrta dba duita parameter pass korlen kintu argument hidebe onekgula value pass korlen kintu eitar output kintu je ekta ba duita parameter disen oikoytai show korbe baki je argument gula pass korsen oigula show korbe na. rest parameter er kaj holo oi ekta ba duita parameter charao jotogula argument apni passs korben shobgulai show korbe. mane oboshisto gula o dekhabe.rest parameter er age 3 dot (...) diye show kora hoy


function num(a, b, ...z){
    console.log(a, b, z);
}
num(1,2,3,4,5,6,7,5,7,8,543,453,4,648,78);



