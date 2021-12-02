/**
 *En az 10 sayidan olusan bir dizi olusturunuz. Dizideki sayıların:
- kareköklerini,
- karelerini,
- tüm sayiların toplamini,
- ortalamasını,
- en büyük ve en kücük sayiyi bulan program yaziniz. Sonuclari konsolos yazdiriniz.
 */

/**1-en kucuk sayiyi bulma */
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return a - b
});
document.getElementById("demo").innerHTML = points[0];
console.log(points[0]);

/**2-en buyuk sayiyi bulma */
let point = [40, 100, 1, 5, 25, 10];
point.sort(function (a, b) {
    return b - a
});
document.getElementById("demo1").innerHTML = point[0];
console.log(point[0]);

/**3-tum arraylerinm toplami*/
const dizi = [10, -50, 25, 45, 102];

let toplam = 0;
dizi.forEach(function (element) {
    toplam += Number(element);
});
document.getElementById("demo3").innerHTML = toplam;
console.log(toplam);

/**3-tum arraylerin karelerini olusturma*/
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo4").innerHTML = txt;

function myFunction(value) {
    txt += "<br>" + Math.pow(value, 2) + "<br>";
}

/**3-tum arraylerin kareköklerini alma*/
const number = [45, 4, 9, 16, 25];

let text = "";
number.forEach(myFunctions);
document.getElementById("demo5").innerHTML = text;

function myFunctions(value) {
    text += "<br>"+Math.sqrt(value)+"<br>";
}

