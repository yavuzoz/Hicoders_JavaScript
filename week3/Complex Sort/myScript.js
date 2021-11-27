// display the result
// 1)bir fonksiyon icinde girilen uc input alanindaki value degerlerine ulasan kod yazdik.
//2) burada önemli olan value degerleri string oldugu icin integer'e cevrilmesi oldu. 
//3)fonk. hemen altinda if else if Conditional Statements kodunu yazdim. 
//4)elde ettigim sonuclari yazi ile ilgili dom kismina ulasip ekrana yazdirdim. 
//5)console log ile console de  yazildi//


// get numbers from DOM (Document  Object Model)
const calculate = document.querySelector(".button");
const result = document.querySelector("#result");

calculate.addEventListener("click", function () {
    const first = +document.querySelector("#firstNumber").value;
    const second = +document.querySelector("#secondNumber").value;
    const third = +document.querySelector("#thirdNumber").value;

    let message = "";

    // needs fixing
    if (first === second && second === third && first === third) {} else if (first > second && second > third) {
        message = `${first} > ${second} > ${third}`;
    } else if (first > second && second < third) {
        message = `${first} > ${third} > ${second}`;
    } else if (first < second && second < third) {
        message = `${third} > ${second} > ${first}`;
    } else if (first < second && second > third) {
        message = `${second} > ${third} > ${first}`;
    }

    document.getElementById("result").innerHTML = message
});