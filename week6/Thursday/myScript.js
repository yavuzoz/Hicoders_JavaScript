/**
 * Bu görevimizde aylik harcamalarini ve maasini bir listeye kaydeden Fikret Beye yardimci olacagiz. Fikret Bey listenin birinci maddesine maasini sonraki maddelere ise giderlerini yaziyor. Ancak bazi maddelerden sonra listeye hatirlama amacli kücük notlar da ekliyor. Fikret Bey'in giderler cikarildiginda aylik ne kadar parasi kaldigini hesaplayan bir programa ihtiyaci var. Ayrica Fikret Bey'in calistigi sirket calisanlarin bütcelerine destek olmak amaciyla harcamalarinin 20%'sini karsilamaktadir. Programin, Fikret Bey'in ne kadar parasinin kaldigini ve sirketin ne kadar destek oldugunu hesaplamasi gerekmektedir.

Fikret Bey'in Listesi:
const incomeStatement = [15000, 2000, 1000, 300, 200, "important electronic", 600, 79, "abo", 342, "printer", 450, 32, 45, "fitness", 64, 10, 23, 12, 2, 56, 7]
 */
/**
 * ILK ÖNCE LISTEDEKI  SALARY den kücük olan SAYI OLANLARI YENI BIR ARRAY E ALDIM
 * SONRA TÜM GIDERLERI REDUCE ILE TOPLADIM
 * SON OLARAK TA FONKSIYON ICNDE ISTENEN SONUCU CONSOLDA YAZDIRDIM
*/
const incomeStatement = [15000, 2000, 1000, 300, 200, "important electronic", 600, 79, "abo", 342, "printer", 450, 32, 45, "fitness", 64, 10, 23, 12, 2, 56, 7];
const SALARY = [15000];

const removeOfString = (expences) => expences == parseInt(expences)&&expences<SALARY;

const findTotalExpences = (totalExpences, expences) => {
        totalExpences += expences;

        return totalExpences;
    }

function getTotalOfSalary(pIncomeStatement) {
    const totalSalary =
        pIncomeStatement
        .filter(removeOfString)
        .reduce(findTotalExpences,0)
        
    return (SALARY-(totalSalary*(80/100)));
}
console.log("Total Salary is ", getTotalOfSalary(incomeStatement),"CHF");

let person = {
    firstNmae: "ahmet",
    age: 30
}

let name = person.firstNmae;
let agee = person.age;
console.log(agee)