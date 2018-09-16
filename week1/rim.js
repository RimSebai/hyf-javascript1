//1
console.log ("Salut Lume!" , "Hallo Wereld!","Bonjour le monde!");
//2
console.log('I am awesome');
//3.1
let x
//3.2
console.log("the value of my variable x will be:undefined");
//3.3
console.log(x);
//3.4
x = 8
//3.5
console.log("the value of x will be 8");
//3.6
console.log(x);
//4
let y = ("Syria is my country");
//4.1
console.log("The value of y is \"Syria is my country");
//4.2
console.log(y);
//4.3
y = ("Canada");
//4.4
console.log("The value of y has to be changed to \"Canada");
//4.5
console.log(y);
//5.1
let z = 7.25;
//5.2
console.log(z);
//5.3
let a = z - 0.25;
//5.4
console.log(a);
//5.5
let r = Math.max(a,z);
//5.6
console.log(r);
//6.1
let languages = [];
//6.2
console.log("the value of languages will be nothing");
//6.3
console.log(languages);
//6.4
let myFavAnimals = ["cat","dogs","bird","fish"];
//6.5
console.log(myFavAnimals);
//6.6
myFavAnimals += [,"baby pig"];
//6.7
console.log(myFavAnimals);
//7.1
let myString = ("this is a test");
console.log(myString);
//7.2
let d = myString.length;
//7.3
console.log(d);
//8
if (typeof x === typeof a){
    console.log("same type");
}
//8.1
let mySonsNames = ["Sam","Fateh"];
let houseNu = 27;
let country = {
    name:"Netherlands" ,
    capital: "Amsterdam"
}
let myAddress = ("kazerenestraat");
//8.2
console.log(mySonsNames);
console.log(country);
console.log(myAddress);
console.log(houseNu);
//8.3
console.log("type of mySonNames will be string because JS read arrays as string, the type of var houseNu is numbers ,var country is object,myAddress is string");
//8.4
console.log (typeof ['Sam','Fateh']);
console.log(typeof 27 );
console.log(typeof {
    name:"Netherlands" ,
    capital: "Amsterdam"
});
console.log(typeof ("kazerenestraat"));
//8.5
if(typeof country !== typeof houseNu){
    console.log("country and houseNu variables are not the same type");
}
if (typeof myAddress !== typeof mySonsNames){
    console.log("myAddress and mySonesNames variables are not the same type");
}
if (typeof mySonsNames === typeof country){
    console.log("mySonsNames and country are the same type");
}
if (typeof houseNu !== typeof mySoneNames){
    console.log("mySonsNames and houseNu are not the same type");
}
//9
x = 1
//9.1
let p = 6 % 3;
u = 8 % 3;
j = 10 % 4;
if (8 % 3 === 2){
    console.log("2 is the correct value");
}
console.log(u)
if (10 % 4 ===2){    
console.log("the value is 2");
}
console.log(j)
if (6 % 3 === 0){
console.log("the value is 0 ");
}
console.log(p)
//10.1
console.log("With JavaScript array variables, we can store several pieces of data in one place in this exp: myArry store string and number");
//ex 
let myArry = ["Rim",38]
//ex
let animalesAge = [{sort:"rabbit", year:8},
    {sort:"cat", year:15},
    {sort:"dog", year:20}
]
//10.2
console.log(animalesAge);
if (6/0 === 10/0){
    console.log("yes I Can compare infinities");
}
//10.3 


























