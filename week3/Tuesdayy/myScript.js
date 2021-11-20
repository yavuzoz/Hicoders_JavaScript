function sayibulma() {
    let a = document.getElementById("sayi1").value;
    let b = document.getElementById("sayi2").value;
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
        result = ("a= b dir");
        document.getElementById("photo").innerHTML = "<img src='./indir(1).png'width=20%>";
        document.getElementById("result").innerHTML = result
    }
    console.log(result);
}


