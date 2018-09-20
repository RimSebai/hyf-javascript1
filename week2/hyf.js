let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g,' ');
console.log(myString);

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtel");
console.log(favoriteAnimals);
favoriteAnimals.splice (1 ,0,"meerkat");
console.log("the new valeu will be Mauro's and Jim's favorite animals + me favorite animals");
console.log(favoriteAnimals);
console.log("The array has a length of " + favoriteAnimals.length);
favoriteAnimals.splice(3,1)[0];
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: "+ favoriteAnimals.indexOf("meerkat"));
favoriteAnimals.splice( 1,1)[0];
console.log(favoriteAnimals);

//More Java Script ____1
function myFunction (a ,b ,c){
    return a + b + c ;   
}
console.log(myFunction(1,5,6)) ;

//___2_____
function colorCar (color){
    return "a " + color + " car";
}
console.log(colorCar("red"));

//____3_____
let fullName = {
    firstName:"Rim",
    LastName:"Sebai"
}
function myInfo (object){
for (let key in object){
    console.log(key + " " + object[key]);
}
}
myInfo(fullName);
    
//_____4_____
function vehicleType (color,code){
    if (code > 1){
        code = "motorbike";
    }else{
        code = "car";
    }
return "a " + color + " " + code ;
}
vehicleType("bleu", 2);
console.log(vehicleType("bleu", 2));

//_____5_____
console.log(3===3 && "yes" || "no");

//____6______
function vehicle (color,code,age){
    if (code > 1){
        code = "motorbike";
    }else{
        code = "car";
    }
    if (age > 1){
    age = "used"
}
return "a " + color + " " + age + " " + code ;
}
vehicle("bleu",1,5)
console.log(vehicle("bleu",1,5));

//____7______
let list = ["motorbike", "caravan", "bike"];

//____8_____
console.log(list[2]);

//____9_____
function vehisle (color,code, age){
    let list = ["motorbike", "caravan", "bike"];
    let isNew ='new'
    if (age > 1){
        isNew = "used";
    }
    
    return "a " + color + " " + age + " " + list[code-1];
}

vehisle("green", 3 , 1);
console.log(vehisle("green", 3 , 1));

//_____10_____
let advertisement = "Amazing Joe's Garage, we service "

for(let i = 0; i < list.length-2; i++){
    advertisement +=  list[i] + "s, "
}
advertisement += list[list.length-2] + "s and "  + list[list.length-1] +'s.'
console.log(advertisement);

//____11___
list.push("plane");
console.log(list);

//___12______
let myObj = {};

//___13____
let teachera = {
    1:"jim",
    2:"Ivana",
    3:"Daniela"
};

//____14_____
teachers = {
    1:{
        name:"Jim",
        lang:["JS"]
    },
    2:{
    name:"Ivana",
    lang:["SCC"]
    },
    3:{
        name:"Daniela",
    lang:["JS"]
    }
}

//_____15______
let x = [1,2,3];
let y = [1,2,3];
let z = y;
if (z === y){
    console.log("yes");
}else{console.log("NO")
}
if (z === x){
    console.log("yes");
}else{console.log("NO")
}
if (x === y){
    console.log("yes");
}else{console.log("NO")   
}

//____16_______
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log(o1);
console.log(o2);
console.log(o3);

o2 = {type:"lap"};
console.log(o3);
console.log("changing o2 does change o3");
o1 = "x";
console.log(o3);
console.log("changing o1 does not change o3");

console.log("let o2 = o3 Identifier 'o2' has already been declared")

//_____17_______
let bar = 42;
typeof typeof bar
console.log(typeof typeof bar);
console.log(typeof bar);
console.log("type of variable bar is number but the type of the word number which's the result of first opration is string ")






