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

const calculate = document.querySelector(".button");
const result = document.querySelector("#result");

calculate.addEventListener("click", function () {
    /**
     * + ile de girilen deger integir yapilir veya nummer ile de
     */
            let first = +document.getElementById("sayi1").value;
            let sayi1 =Number(first)
            let second = +document.getElementById("sayi2").value;
            let sayi2 =Number(second)
            let photo = "";
            let result = "";


            if (sayi1 > sayi2) {
                result = "en büyük a";
                photo = "<img src='./indir.png'width=20%>";
            } else if (sayi2 > sayi1) {
                result = "en büyük b";
                photo = "<img src='./Latin_B.png'width=20%>";
            } else if (sayi1 == sayi2) {
                result = "a = b dir";
                photo = "<img src='./indir(1).png'width=20%>";
            }
            console.log(result);
            document.getElementById("result").innerHTML = result
            document.getElementById("photo").innerHTML = photo
        });