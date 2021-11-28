/**
 * 1- Kücük Ahmet vagonlardan birinde saklanir.
2. Kullanicinin maximum 4 denemede Kücük Ahmet'in oldugu vagonu bulmasi gerekir.
3. Kullanıcıya ön vagon veya arka vagonda ifadeleri ile yonlendirme yapılarak hangi vagonda oldugunu daha kolay bulması icin yardım edilecektir.
4. Kullanıcının dogru vagonu kac defada bildiği ve puani (100 üzerinden) consola veya ekrana yazdırılacaktir.
*/
/**
 * kullanicidan en az 4 tahminde 1 ile 10 arasindaki tutulan sayiyi bulmasini isteyecegiz,bunun icin tutulan rakam ve maksimum hak sayisinin degerleri atanir.
 * 1<=sayi<=10 arsinda bir random sayi türetilir, ahmetin hangi vagonda oldugunu belirlemek icin, her arama baslangicinda bu random deger degisir.
 * tahmin sayisi bir deger olarak atanir. tahmin sayisi  4 ihtimalli yazdirilir. 4 ihtimal; tahmin sayisi randomsayisina esittir, kücüktür veya büyüuktur ve dördünü olarak tahmin sayisinin number girilmeme ihtimali
 * son olarak kullanicinin ne kadar sürede kac denemede skor yaptigini ekrana ve consola yazdiririz
 */

//Random wagon numbers from 1 to 10 are generated and stored in this wagon

let guess_count = 0;
let random_number = Math.floor(Math.random() * 10 + 1);
console.log(random_number);
document.querySelector("#check_it").addEventListener("click", checkNumber);
document.querySelector("#nr_game").addEventListener("keyup", function (event) {
    if (event.keyCode === 13)
        checkNumber()
});
function checkNumber() {
    // // This is for input again erreichen
    let userInputElement = document.querySelector("#nr_game").value;
    let answerLabelElement = document.querySelector("#answer");
    let guessLabelElement = document.querySelector("#count_it");
    if (userInputElement == random_number) {
        guess_count++;
        answerLabelElement.innerText = "You are the winner!" + guess_count+1;
    } else if (userInputElement.value == "") {
        guess_count++;
        answerLabelElement.innerText = "Enter a number!";
    } else if (userInputElement > random_number) {
        guess_count++;
        document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a smaller number!";
    } else if (userInputElement < random_number) {
        guess_count++;
        document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a higher number!";
    } else if (isNaN(userInputElement)) {
        answerLabelElement.innerText = "It's not a number!";
    }
    userInputElement.focus();
    userInputElement = "";
    guessLabelElement="";
}

