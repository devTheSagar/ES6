//class expression

let Person = class{
    constructor(name,age,work){
        this.name = name;
        this.age = age;
        this.work = work;
    }
}
let NewPerson = new Person("sagar biswas", 30, "coder");
console.log(NewPerson);