// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini

// confirm("5 делим на 2")
// let a = 5 % 2;
// alert(a);


// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

// const randomraqam = Math.round(Math.random() * 10)
// alert(`Randomdan chiqqan son : ${randomraqam}`)


// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!


// console.log(Math.round(12.510))



// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 

// const word = "MARS IT SCHOOL";
// alert(word.length)




// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

// function printMarsItSchool() {
//     for (let i = 0; i < 10; i++) {
//       console.log("MARS IT SCHOOL");
//     }
//   }

//   printMarsItSchool( );

// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// let myName = harflar[17] + harflar[7] + harflar[18] + harflar[13] + harflar[16] + harflar[0]; 

// console.log(myName);



// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

// const age = +prompt("ведите свой возраст");
// if (age > 18) {
//     alert("вам больше 18 лет");
// } else if (age < 18) {
//     alert("вам меньше 18 лет");
// } else {
//     alert("вам 18 лет");
// }



// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

// const ism = prompt ("Enter your name: ");
// console.log(ism.split("").reverse("").join(""));

// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring


// Javob:Kodini yozib bering


// const nam = prompt("Введите ваше имя:");
// const age = prompt("Введите ваш возраст:");

// const outputBox = document.createElement("div");
// outputBox.className = "output-box";

// outputBox.innerHTML = `
//   <p>1. Ism: ${nam}</p>
//   <p>2. Yosh: ${age}</p>
// `;

// document.body.appendChild(outputBox);






// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const juft =[];
// const toq = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         juft.push(numbers[i]);
//     }else {
//         toq.push(numbers[i]);
//     }
// }
// console.log(`${numbers} 'boshlanishidagi array'`);
// console.log(`${juft} juft sonlarga ajratilgan array`);