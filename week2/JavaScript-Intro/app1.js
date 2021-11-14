// B-) 1- dört farkli variables atamasi yapilir
// 2- bu degerler html dom'unda ilgili selektöre ulasilarak yazdirilir.

let carName = "Volvo";
let pi = 3.14;
const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
let cars = ["Saab", "Volvo", "BMW"];

document.getElementById("demo1").innerHTML = 
"The value is: " +
carName + "<br>" +
"The type is: " + typeof carName;

document.getElementById("demo2").innerHTML = 
"The value is: " +
pi + "<br>" +
"The type is: " + typeof pi;
document.getElementById("demo3").innerHTML = "The value is: " +
person.age + "<br>" +
"The type is: " + typeof person;
document.getElementById("demo4").innerHTML = "The value is: " +
cars + "<br>" +
"The type is: " + typeof cars;

//data tiplerini consola yazdirmak icin
console.log(typeof(carName))
console.log(typeof(pi))
console.log(typeof(person))
console.log(typeof(cars))

