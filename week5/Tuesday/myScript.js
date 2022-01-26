/**
 * bir karisik ciftlik hayvanlari bulunduran array olusturulacak
 * array icerigindeki elemanlara sirasoyla ulasip if if else else sartlari yazilarak toplam bacak sayisi bulunur
 */
let myArray = ["inek", "inek", "tavuk", "domuz", "inek", "koyun"];
let toplamAyak = 0;
for (index = 0; index < myArray.length; index++) {
    if (myArray[index] == "inek") {
        toplamAyak += 4;
    } else if (myArray[index] == "tavuk") {
        toplamAyak += 2;
    } else if (myArray[index] == "domuz") {
        toplamAyak += 0;
    } else if (myArray[index] == "koyun") {
        toplamAyak += 4;
    }
    console.log("toplam helal bacak sayisi ;", toplamAyak)
}
/**
 * ikinci yol,inculides yöntemi ile array icindeki elemanlar taranir
 */

// let animalList = ["chicken", "chicken", "pork", "cow", "cow", "sheep", "cow"];

// const chickenLeg = 2;
// const cowLeg = 4;
// const sheepLeg = 4;

// let numberChicken = 0;
// let numberCow = 0;
// let numberSheep = 0;

// for (i = 0; i < animalList.length; i++) {
//     if (animalList[i].includes("chicken")) {
//         numberChicken++
//     } else if (animalList[i].includes("cow")) {
//         numberCow++
//     } else if (animalList[i].includes("sheep")) {
//         numberSheep++
//     }
// }
// let helalBacakSayisi = numberChicken * chickenLeg + numberCow * cowLeg + numberSheep * sheepLeg;
// console.log(`helal bacak sayisi : ${helalBacakSayisi}`);