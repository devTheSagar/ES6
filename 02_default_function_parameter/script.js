//default parameter

function say(message){ //ekhane message ta hoccshe parameter
    console.log(message);
}
say("sagar"); //ekhane sagar na diye faka rakhle undefined bolbe. ekhane sagar hocche ei argument er ekta value. ekhane sagar ba value ta holo message parameter er.

//ekhane kono value na diye faka rakhle output undefined dekhay. kintu value na diyeo ba value pass na koreo ekta default value show kora jay. ja ES6 a onek easy,, niche dekhano holo

function say_1(message = "hi there"){ //eta default parameter
    console.log(message);
}
say_1(); //ekhane kono value dei nai. kintu output debe hi there. karon eta default value deoa. 
say_1("hello world"); //ekhane hello world show korbe