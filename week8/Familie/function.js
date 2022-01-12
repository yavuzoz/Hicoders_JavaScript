/*1. Maasi 5000'in üzerinde olan ailelerin listesi. Listede aile babasinin isimleri ve soy isimleri isim sirasina göre listelenmeli.
2. Toplam erkek cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.
3. Toplam kiz cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.
4. Yasi 8'den kücük cocuklarin sayisi. Cocuklar yaslarina göre büyükten kücüge göre siralanmali.
5. Yasi 8'den büyük cocuklarin annelerinin isimlerinin isim sirasina göre listelenmeli.*/

/**
 * Maas miktari 5000 uzerinde olan aileler
 * @param {obj} pFamiliesList
 * @param {int} pSalary
 */
function findOver5000SalaryList(pFamiliesList, pSalary) {
    let over5000SalaryList = pFamiliesList.filter((salaryy) => salaryy.salary > pSalary);
    return over5000SalaryList;
}


/*3. soru : kiz cocuklarinin isimleri ve sayisi */
const newListt = (eleman) => eleman.childrens[0];
const genderListt = (element) => {
    if (element.gender === "girl")
        return genderListt
}

function getGenderNamee(pFamilies) {
    const totalListt =
        pFamilies
        .map(newListt)
        .filter(genderListt)
    return totalListt
}
/** soru 4 :yasi sekizden kucuk cocuklarin sayisi , yas siralamsina göre */

const newAgeList = (eleman) => eleman.childrens[0];
const ageList = (element) => {
    if (element.age < 8)
        return ageList
}

function getAge8UnderChildren(pFamilies) {
    const totalListe =
        pFamilies
        .map(newAgeList)
        .filter(ageList)
    return totalListe
}
/** soru 4 :yasi sekizden buyuk cocuklarin sayisi  */

const newAgeListt = (eleman) => eleman.childrens[0];
const ageListt = (element) => {
    if (element.age > 8)
        return ageListt
}

function getAge8OverChildren(pFamilies) {
    const totalListe =
        pFamilies
        .map(newAgeListt)
        .filter(ageList)
    return totalListe
}