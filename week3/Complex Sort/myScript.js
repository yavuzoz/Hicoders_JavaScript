// display the result
console.log("The largest number is " + largest);
let sayilar = [num1, num2, num3];
sayilar.sort(function (a, b) {
    return b - a
});
for (let sayi in sayilar) {
    document.write(sayilar[sayi] + " ");
}

function sayibulma() {
    let num1 = document.getElementById("sayi1").value;
    let num2 = document.getElementById("sayi2").value;
    let num3 = document.getElementById("sayi3").value;
    let largest = "unknown because you didn't put a valid.";

    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
        document.getElementById("result").innerHTML = largest
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
        document.getElementById("result").innerHTML = largest
    } else {
        largest = num3;
        document.getElementById("result").innerHTML = largest
    }
    console.log(result);
}