/**
 * soruda bizden istenen sey dogum yili girilen bireyin hangi hayvan yilinda ve hangi elemnet yilinda oldugunu bulmamiz.
 * miladi 1. yil cock yili ve elementi ise water. verilen yilin 12 ye ve 10 a bölümünden kalani bulup ,12 ye bölünenden kalan degeri  animallist[]indexine ve 10 a bölümünden kalan degeri elementName[] index ine atarsak , ve bunlari son olark ekrana yazdirirsak cözüm basit manada yapilmis oluyor.
 * burada püff noktasi element yillarinin iki yilda bir degismesi ,yani 10 yilda bir döngü olur. bunun icin array olustururken iki defa yazarsak elemnt isimlerini cözüm bulunmus olur. 
 */
// User entered animal list
const animalList = [
    "Monkey", "Cock", "Dog", "Boar", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"
];
const elementName = ["Metal","Metal","Water","Water","Wood","Wood","Fire","Fire","Earth","Earth"]

function findZodiac() {
    let birthyear = document.getElementById("year").value;
    let animalYear = birthyear % 12;
    let zodiacYear = birthyear %10;
    document.getElementById("result").innerHTML = animalList[animalYear];
    document.getElementById("result_element").innerHTML = elementName[zodiacYear];
}

findZodiac();