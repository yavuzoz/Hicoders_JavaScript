/*Asagida personel isimlerinden ve grup isimlerinden olusan iki array verilmistir. Yazmanizi istedigimiz program her calistirildiginda personel listesinden karisik olarak 5 isim sececek ve bu isimleri grup listesinde bulunan gruplara yerlestirecektir. 

ÖRNEK CIKTI:
Rangers Boyd
Wilds Aarron
Raiders Connor
Bears Favour
Canaries Bracken
*//**
 * carsamba aksamki cözümden farkli olarak yaptim
 */
const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];

const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Conner", "Connolly", "Fauzaan", "Favour", "Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"];
let getRandomNames = (element) => {
    let personalRandomIndex = Math.floor(Math.random() * personalList.length);
    let randomPersonName = personalList[personalRandomIndex];
    let result = element + " " + randomPersonName;
    return result;
}

function getRandomName(pNewRandomList) {
    let newArray =
        pNewRandomList
        .map(getRandomNames)
    return newArray;
}
console.log(getRandomName(groupList));