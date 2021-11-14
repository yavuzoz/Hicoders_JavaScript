/* 
-------------
odev:
A-)Bu ödevinizde sizden ilk javascript kodunuzu yazmanizi istiyoruz. Program web sayfasinda kullanicidan bir metin alanina bir seyler yazmasini istiyor. Sonra bu yaziyi ekranda ve consoleda gösterecek. 

B-)Bir diger görev ise en az dört farkli variable atamasi yapmaniz ve bunlarin tiplerini web sayfasi ekraninda ve consoleda göstermeniz olacak.
------------------
A-)kullanici input alanina birseyler girecek ve bu girilen bilgi ekrana ve console yazilacak;
1-sayfadaki ekle butonuna basildiginda input alaninda olan value js'e alinir
2-alinan bu bilgi "ul" tagina "li" elemani olarak eklenecek.
3-console log eklenerek consolede görüntulenir
----------------
B-) 1- dört farkli variables atamasi yapilir
2- bu degerler html dom'unda ilgili selektöre ulasilarak yazdirilir.
*/
let inputAlani = document.querySelector("#todo-entry");
let buttonDugmesi = document.querySelector("#todo-add");

buttonDugmesi.addEventListener("click", function () {
    let todoList = document.querySelector("#todo-list");

    var node = document.createElement("LI"); // Create a <li> node/
    var textnode = document.createTextNode(inputAlani.value); // Create a text node/
    node.appendChild(textnode); // Append the text to <li>//
    todoList.appendChild(node);
    console.log(todoList);
})