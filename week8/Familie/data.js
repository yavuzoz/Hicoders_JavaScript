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

/**Maas miktari 500o uzerinde olan babalarin isimleri */
let over5000FamiliesList = findOver5000SalaryList(families, 5000)
console.log("maas miktari 5000 uzerinde olan aile isimleri:");
over5000FamiliesList.map(salaryy => console.log(`aile ismi: ${salaryy.lastname} , maas: ${salaryy.salary}`))
/*----------------soru 2 ------------------------*/

const nameOfChildren = families.map(child => child.childrens).map(family => family).flat();

let childAlphabetikSort = nameOfChildren.sort(function(a, b) {
    return a.name.localeCompare(b.name);
})
console.log("burda cocuk isimlerine göre alfabetik siralama yapildi", childAlphabetikSort)

const nameOfBoys = childAlphabetikSort.filter(child => {
    if (child.gender === "boy") {
        return child.name;
    }
});

console.log("erkek cocuklarin alfabatik sirallamasi : " , nameOfBoys)
const numberOfBoys = nameOfBoys.length;
console.log(`erkek cocuk sayisi ${numberOfBoys}.`);


/* soru 3----------*/

const nameOfGirls = childAlphabetikSort.filter(child => {
    if (child.gender === "girls") {
        return child.name;
    }
});

console.log("kiz cocuklarin alfabatik siralamasi : " , nameOfGirls)
const numberOfGirls = nameOfGirls.length;
console.log(`kiz cocuk sayisi ${numberOfGirls}.`);
/*-------------- soru 4 ---------------------------------------*/

let listAge_8_Under = getAge8UnderChildren(families);
console.log("yasi sekizden kücük olan cocuk  sayisi: " , listAge_8_Under.length);

/*-------------- soru 5 ---------------------------------------*/

let motherAlphabetikSort = families.sort(function(a, b) {
    return a.partner.localeCompare(b.partner);
})
console.log("burda annelerine göre alfabetik siralama yapildi", motherAlphabetikSort)
const nChildren = motherAlphabetikSort.map(child => child.childrens).map(family => family).flat();
const nChildrenn = nChildren.filter(childn => {
    if(childn.age> 8) {
        return childn.name
    }
})
console.log("annelerinin ismine göre alfabetik siralama, yasi sekizden büyük olan cocuklar", nChildrenn)




 