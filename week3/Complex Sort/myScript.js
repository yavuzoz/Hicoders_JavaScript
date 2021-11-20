// display the result
// 1)bir fonksiyon icinde girilen uc input alanindaki value degerlerine ulasan kod yazdik.
//2) burada önemli olan value degerleri string oldugu icin integer'e cevrilmesi oldu. 
//3)fonk. hemen altinda if else if Conditional Statements kodunu yazdim. 
//4)elde ettigim sonuclari yazi ile ilgili dom kismina ulasip ekrana yazdirdim. 
//5)console log ile console de  yazildi//


function sayibulma() {
    let num1 = document.getElementById("sayi1").value;
    let a = parseInt(num1);
    let num2 = document.getElementById("sayi2").value;
    let b = parseInt(num2);
    let num3 = document.getElementById("sayi3").value;
    let c = parseInt(num3);
    let largest = "unknown because you didn't put a valid.";
    
    if (a >= b && a >= c) {
        largest = a;
        document.getElementById("result").innerHTML = "large number is"+largest
    } else if (b >= a && b >= c) {
        largest = b;
        document.getElementById("result").innerHTML = "large number is"+largest
    } else {
        largest = c;
        document.getElementById("result").innerHTML = "large number is"+largest
    }
    console.log(result);
   // sayilari buyukten kucuge veya tam tersi siralamak yazilmis kod(reverse veya sort metodu)
    let sayilar = [a, b, c];
    sayilar.reverse(function(a, b){return a - b});
    document.getElementById("siralama").innerHTML="buyukten kucuge"+sayilar
    console.log("buyukten kucuge",sayilar)}