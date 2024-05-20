function say(message, name) {
    return{
        message,
        name
    }
}
console.log(say()); //ekhane undefined dekhabe karon amra parameter disi ta return o korsi kintu argument a kono value pass kori nai
console.log(say("hello", "sagar")); //ekhane argument a value pass korsi jonno output message: hello, name: dagar dekhabe

