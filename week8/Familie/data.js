const families = [{
        firstname: "Ahmet",
        lastname: "Kurnaz",
        partner: "Sevil",
        childrens: [{
                name: "Efe",
                age: 8,
                gender: "boy",
            },
            {
                name: "Ece",
                age: 6,
                gender: "girl",
            },
        ],
        salary: 4000,
    },
    {
        firstname: "Kemal",
        lastname: "Can",
        partner: "Elif",
        childrens: [{
                name: "Naz",
                age: 11,
                gender: "girl",
            },
            {
                name: "Kadir",
                age: 6,
                gender: "boy",
            },
        ],
        salary: 6000,
    },
    {
        firstname: "Zakir",
        lastname: "Cemal",
        partner: "Nida",
        childrens: [{
                name: "Hasan",
                age: 2,
                gender: "boy",
            },
            {
                name: "Hüseyin",
                age: 6,
                gender: "boy",
            },
        ],
        salary: 5500,
    },
    {
        firstname: "Murat",
        lastname: "Demirtas",
        partner: "Simay",
        childrens: [{
                name: "Oktay",
                age: 15,
                gender: "boy",
            },
            {
                name: "Gülsüm",
                age: 13,
                gender: "girl",
            },
        ],
        salary: 5300,
    },
    {
        firstname: "Umut",
        lastname: "Ilicak",
        partner: "Ayse",
        childrens: [{
            name: "Bilal",
            age: 8,
            gender: "boy",
        }, ],
        salary: 3000,
    },
    {
        firstname: "Durmus",
        lastname: "Demir",
        partner: "Nur",
        childrens: [{
            name: "Meral",
            age: 4,
            gender: "girl",
        }, ],
        salary: 7000,
    },
];

/**Stok miktari 500 kg uzerinde olan baliklarin isimleri */
let over5000FamiliesList = findOver5000SalaryList(families, 5000)
console.log("maas miktari 5000 uzerinde olan aile isimleri:");
over5000FamiliesList.map(salaryy => console.log(`aile ismi: ${salaryy.lastname} , maas: ${salaryy.salary}`))
/*----------------soru 2 ------------------------*/

let listBoy = getGenderName(families);
console.log("toplam erkek cocugu sayisi: " , listBoy.length);
listBoy.sort((a,b) => a.name.localeCompare(b.name));
console.log("erkek cocuklari isim sirasina göre ", listBoy)
/*soru 2  normal cözüm*/
// const newArrayList = families.map(function (params) {
//     return params.childrens[0]

// });
// const genderList = newArrayList.filter(function (element) {
//     if (element.gender === "boy")
//         return element

// })
// console.log("erkek cocuklarin listesi", genderList)

/* soru 3----------*/
console.log(getGenderNamee(families))

let listGirl = getGenderNamee(families);
console.log("toplam kiz cocugu sayisi: " , listGirl.length);
listGirl.sort((a,b) => a.name.localeCompare(b.name));
console.log("kiz cocuklari isim sirasina göre ", listGirl)
/*-------------- soru 4 ---------------------------------------*/

let listAge_8_Under = getAge8UnderChildren(families);
console.log("yasi sekizden kücük olan cocuk  sayisi: " , listAge_8_Under.length);

/*-------------- soru 5 ---------------------------------------*/

let listAge_8_Over = getAge8OverChildren(families);
console.log("yasi sekizden buyuk olan cocuk  sayisi: " , listAge_8_Over.length);


/*not: girift yapilara ulasmada sorun yasadim, acikcasi persembe ödevi daha kolaydi benim icin , cünkü duz bir obje icinde; loop ile if ( ve / veya/ kücük/ büyük sartlari ile ) ile sonuca ulasilmasi cok daha kolay, düz bir yapi(array icinde obje). bu hafta ic ice yapilara ulasma üzerinde durulabilirse cok iyi olur benim acimdan */

 