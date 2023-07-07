// alert('this is a external js file');


//variables
var v1 = 1;
let v2 = 2;
const v3 = 3;
console.log(v1,v2,v3);

//dataTypes
var firstName = "Nuwanga",
 lastName =  'Rajapaksha',
 age = 25.5,
 married = true,
 middleName = null,
 gender;
console.log(firstName,lastName,age,married,middleName,gender);
console.log(typeof firstName);

//arrys
var cars = ["Toyota","Nissan","Honda",30,true];
console.log(cars);
console.log(cars[2]);

var bikes =[];
bikes.push("Honda",60);
bikes.push("Apachi");
bikes.push("Hunk");
bikes.push("Yamaha");
console.log(bikes.length);
console.log(bikes);
bikes.pop();
bikes.shift();
console.log(bikes)
bikes.unshift("Tata")
console.log(bikes)
console.log(bikes.indexOf("Apachi"))
console.log(bikes[2]);

var plains = new Array("AirBus","Small");
console.log(plains)

//objects
var student = new Object();
var student2 = {};
var student3 = {"firstName":"Nuwanga",age:18,"studentId":1234};
student3.lastname = "Rajapaksha";
student3.smile = function (){alert("ha ha ha");};
student3.firstName = "NN"
console.log(student3.lastname);
console.log(student3);
// student3.smile();

//Operaters

//Arithmatic Operaters
console.log("Arithmatic Operaters");
console.log(6+2);
console.log(6-2);
console.log(6*2);
console.log(6/2);
console.log(6%5);

var a = 1;
console.log(a++,a);
console.log(++a);
console.log(a--,a);
console.log(--a);

//Comparison Operaters
console.log("Comparison Operaters");
console.log(6 == 6);
console.log(6 != 4);
console.log(6 < 1 );
console.log(6 <= 1);
console.log(6 > 1);
console.log(6 >= 5);

// Logical Operaters
console.log("Logical Operaters");
console.log(6 == 6 && 6>5);
console.log(6 == 6 || 6<5);
console.log(! 6 == 6 || 6<5);

//String Concatenation
console.log("Nuwanga "+5+" Rajapaksha");

// if else conditions
var hour = 9;
if (hour > 0 && hour < 12){
    // alert("good morning");
    console.log("good morning");
}else if (hour > 12 && hour < 16){
    // alert("good afternoon");
    console.log("good afternoon");
}else if (hour > 16 && hour < 19){
    // alert("good evening");
    console.log("good evening");
}else {
    // alert("good night");
    console.log("good night");
}
// (hour == 9) ? alert("alarm"):alert("No");
(hour == 9) ? console.log("alarm"):console.log("No");

// switch statment
var dayOfWeek = 2;
switch (dayOfWeek){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
}
switch (dayOfWeek){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid");
}

// For Loop
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
for (var i = 0; i < months.length; i++) {
    console.log(months[i]);
    document.write(months[i] + "<br>");
}
for (var monthsKey in months) {
    console.log(monthsKey);
    document.write(monthsKey + "<br>");
}
for (var month of months) {
    console.log(month);
    document.write(month + "<br>");
}

//while loop
var i = 0;
document.write("While Loop" + "<br>");
while (i < 12){
    document.write(i+1 + " " + months[i]+ "<br>");
    i++;
}

var i1 = 0;
document.write("Do While Loop" + "<br>");
do{
    document.write(i1+1 + " " + months[i1]+ "<br>");
    i1++;
} while (i1 < 12);

//functions
function printDate(){
    document.write(Date()+ "<br>");
}
printDate();

function printValue(price,qty) {
    document.write(price*qty + "<br>");
}
printValue(25,8);

function getValue(price , qty) {
    return(price * qty);
}
var myValue = getValue(55, 2);
console.log("myValur = "+myValue);

var myName = "Nuwanga";
function printName() {
    var myName = "Tharuksha"
    console.log("In the func : "+myName);
}
printName();
console.log("Out the Func : "+myName);


// selectors
var mainHeading = document.getElementById("main-heading");
mainHeading.innerText = "Js Selectors";

var oddRows = document.getElementsByClassName("odd");
console.log(oddRows);
for (var oddRow of oddRows) {
    oddRow.style.background = "green";
}

var h2Tags = document.getElementsByTagName("h2");
for (var h2Tag of h2Tags) {
    h2Tag.style.color = "red";
}

var list = document.querySelectorAll(".list");
for (var listElement of list) {
    listElement.innerHTML = listElement.innerHTML + "<li>List 4</li>";
}


// Events
var clickMeBtn = document.getElementById("clickMe");
clickMeBtn.addEventListener("click",doSomthing);

function doSomthing(event) {
    console.log("addEventListerner");
    console.log(event)
}

document.addEventListener("keyup",function (event) {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 13:
            console.log("enter");
            break;
        case 17:
            console.log("ctrl");
            break;
        default:
            console.log("No");
    }
});

document.onkeyup = function(e) {
    if (e.which == 77) {
        alert("M key was pressed");
    } else if (e.ctrlKey && e.which == 65) {
        alert("Ctrl + B shortcut combination was pressed");
    } else if (e.ctrlKey && e.altKey && e.which == 65) {
        alert("Ctrl + Alt + Y shortcut combination was pressed");
    } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 65) {
        alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
    }
};