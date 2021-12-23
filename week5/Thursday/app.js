/**
 * örnek array: ["Kaporta5", "Ak3ü",  "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"]
Kerem Bey'in istedigi program, asagiaki durumlari karsilamasi gerekmektedir.

1. Parca isimleri büyük harflere cevrilecektir.
2. Parca isimlerinden sayilar cikartilacaktir.
3. Parca isimleri tersine cevrilecektir.
4. Her parcanin basina KEREMAG_ eklenecektir.
5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)
*/
/**
 * cözüm;
 * örnek bir array olusturup her bir görev icin birer fonksiyon icinde for döngüsü ile istenen islemleri yapacagiz
 */
const yedekParca = ["Kaporta5", "Ak3ü", "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"];

// buyuk harflerle yedek parca listesi
function changeToUpperCase() {
    let newList = [];
    for (let index = 0; index < yedekParca.length; index++) {
        let element = yedekParca[index];
        newList.push(element.toUpperCase());
    }
    console.log("Büyük harflere cevrili sekli: " + newList);
}
changeToUpperCase();

//parca isimlerinden sayilar cikartmak icin
let newYedekParcaArray = yedekParca.map(parca => parca.replace(/[0-9]/g, ""));
console.log("sayilarin cikarilmis hali : ", newYedekParcaArray);


// reverse;array icindeki elemanlari tersine yazdirmak icin
function reverseElementsName() {
    let reverseArray = [];
    for (let index = 0; index < newYedekParcaArray.length; index++) {
        let newElement = Array.from(newYedekParcaArray[index]);
        reverseArray.push(newElement.reverse());
        
    }
    console.log("Ters eleman ismi: " + reverseArray);
    return reverseArray;
}
reverseElementsName();

// add KEREMAG_ to beginn array element
function addElement() {
    const beginnAddElement = "KEREMAG_";
    let myArray = [];
    for (let index = 0; index < yedekParca.length; index++) {
        let newElement = beginnAddElement + yedekParca[index];
        myArray.push(newElement);
    }
    console.log(myArray);
}
addElement();

//parcanin sisteme girildigi tarih
function addDateEnd() {
    let newArray = [];
    const date = new Date();
    for (let index = 0; index < yedekParca.length; index++) {
        let newElement = yedekParca[index] + date;

        newArray.push(newElement);
    }
    console.log(newArray);
}
addDateEnd();