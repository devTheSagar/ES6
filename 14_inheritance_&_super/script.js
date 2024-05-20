// V V I
//inheritance and super
//amra jodi ekta class er method, function ba je kono jinish ke onno arekta class theke access ba pete chai tahole inheritance lagbe

class parent{
    asset_1(){
        console.log("dadur shompotti");
    }
    asset_2(){
        console.log("babar shompotti");
    }
}
class child extends parent{
    // myAssets(){
    //     super.asset_1();
    //     super.asset_2();
    // }
}
let  myAssets = new child();
myAssets.asset_1();
myAssets.asset_2();
// myAssets.myAssets();

//dui vabe kora jay
