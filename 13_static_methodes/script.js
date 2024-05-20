//static method
//sadharonoto amra jokhon ekta class create kori tate ekta constructor function create korte hoy ebong ei constructor er output jante hole amader ekta object create korte hoy then oi object theke property guloke access nite hoy
//eije etogulo dhap periye amaderke je ekta property er access nite hoy ei jinishtake muloto change kore dey static method
//orthat amra jodi static method ta bebohar kori tahole amader class er sathe object er ar kono somporko thakbe na. eta sorasori amader property gulo class er sathe ba function gulo class er sathe adjust hoye jabe. tokhon amader class er vetore object ke call kore setar property ke call korte hobe na. static keyword ta bebohar korar jonno thohon sorasori class theke setar property ke access korte parbo

class Book{
     Fun() {
        console.log("hola buddy");
    }
}
let NewObj = new Book(); //boject create kore variable a rakhlam
NewObj.Fun(); //output dekhabe

//ekhane amader ekta object create korte hosse tarpor object er vitore je property ta ase ba function ta ase oitake call korte hosse
//kintu amra chai amra kono object declear na kore class theke sorasori amra function take access nibo
//eta korar jonno amader object take delete korte hobe r class er vitore je function ta create korsi tar age static kdyword ta likhe dite hobe

class name{
    static a(){
        console.log("hello");
    }
}
name.a();