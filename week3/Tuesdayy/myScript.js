
// ** Küçük Ahmet’in istedigi programa iki sayi girmeniz gerekiyor, program hangi sayinin daha büyük olduğunu buluyor ve ekranda gösteriyor. Sayi girisleri ve sonuc ciktisi browserde görüntülenecek. Ayrica program akisinda meydana gelen degisiklikleri console'da da göstermenizi istiyoruz.

//  Kriterler:
//  - Ödevi teslim tarihinden sonra göndermek(-20)
//  - Ödevi teslim tarihini takip eden cumartesi gününden sonra göndermek(-50)
//  - Programin düzgün calisiyor olmasi(-20)
//  - Algoritma adimlarini maddeler halinde yazilmasi(-10)
//  - Code hizalamalarinin düzgün olmasi(-10)
//  - Degisken isimlerinin mantikli verilmesi(-10)
//  - Kod icine yorum eklenmesi(-10)


// 1)bir fonksiyon icinde girilen iki input alanindaki value degerlerine ulasan kod yazdik.
//2) burada önemli olan value degerleri string oldugu icin integer'e cevrilmesi oldu. 
//3)fonk. hemen altinda if else if Conditional Statements kodunu yazdim. 
//4)elde ettigim sonuclari hem yazi ile hem foto ile ekrana yazdirdim. 
//5)console log ile console de  yazildi//
 
function sayibulma() {
    let sayi1 = document.getElementById("sayi1").value;
    let a = Number(sayi1);
    let sayi2 = document.getElementById("sayi2").value;
    let b = Number(sayi2);
    let result = "unknown because you didn't put a valid.";

    if (a > b) {
        result = ("en büyük a");
        document.getElementById("photo").innerHTML = "<img src='./indir.png'width=20%>";
        document.getElementById("result").innerHTML = result
    }else if (b>a) {
        result = ("en büyük b");
        document.getElementById("photo").innerHTML = "<img src='./Latin_B.png'width=20%>";
        document.getElementById("result").innerHTML = result
    }else if (b==a) {
        result = ("a = b dir");
        document.getElementById("photo").innerHTML = "<img src='./indir(1).png'width=20%>";
        document.getElementById("result").innerHTML = result
    }
    console.log(result);
}


