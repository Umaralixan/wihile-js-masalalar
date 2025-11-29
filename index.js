// Math
// 1 masala
// let code = Math.floor(100000 + Math.random() * 900000);
// console.log(code);

// 2 masala
// function fn () {
//   return Math.floor(100000 + Math.random() * 900000);
// } console.log(fn ());

// 3 masala
// let numbers = [5, 12, 7, 20, 3];
// let maxNumber = Math.max(...numbers);
// let minNumber = Math.min(...numbers);
// console.log("Max:", maxNumber);
// console.log("Min:", minNumber);

// 4 masala
// function fn () {
//   function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
//   let prime;
//   do {
//     prime = Math.floor(Math.random() * 100) + 1;
//   } while (!isPrime(prime));
//   return prime;
// } console.log(fn());

// 5 masala
// let result = Math.floor(Math.random() * 51);
// console.log(result);

// 7 masala
// let number = Number(prompt("Son kiriting:"));
// let result =
//   number >= 0 ? Math.sqrt(number) : "Xato";
// console.log(result);

// Wihile
// 8 masala
// let i = 1;
// while (i <= 500) {
//   if (i % 7 === 0)
// console.log(i);
//   i++;
// }

// 9 masala
// let number = 12345;
// let sum = 0;
// while (number > 0) {
//   sum += number % 10;
//   number = Math.floor(number / 10);
// }
// console.log(sum);

// 11 masala
// let a = 0;
// let b = 1;
// while (a < 100) {
//   console.log(a);
//   [a, b] = [b, a + b];
// }

// 12 masala
// let number = 5;
// let factorial = 1;
// let i = 1;
// while (i <= number) {
//   factorial *= i;
//   i++;
// }
// console.log(factorial);

// do wihile - 3 ta masala
// 13 masala
// const Password = "12345";
// let input;
// do {
//   input = prompt("Parolni kiriting:");
//   if (input !== Password) {
//     console.log("Noto'g'ri parol, qayta urinib ko'ring.");
//   }
// } while (input !== Password);
// console.log("Parol to'g'ri kiritildi!");

// 15 masala
// let sum = 0;
// let count = 0;
// let num;
// do {
//   num = Number(prompt("Son kiriting (0 kiritilsa tugaydi):"));
//   if (!isNaN(num) && num !== 0) {
//     sum += num;
//     count++;
//   }
// } while (num !== 0);
// let average = count ? sum / count : 0;
// console.log("Kiritilgan sonlar o'rtachasi:", average);

// Sweitch
// 16 masala
// let son = Number(prompt("Oy raqamini kiriting (1-12):"));
// let season;

// switch (son) {
//   case 12:
//   case 1:
//   case 2:
//     season = "Qish";
//     break;
//   case 3:
//   case 4:
//   case 5:
//     season = "Bahor";
//     break;
//   case 6:
//   case 7:
//   case 8:
//     season = "Yoz";
//     break;
//   case 9:
//   case 10:
//   case 11:
//     season = "Kuz";
//     break;
//   default:
//     season = "Noto‘g‘ri oy raqami";
// }
// console.log(season);

// 17 masala
// let amount = Number(prompt("Summani kiriting:"));
// let currency = prompt("Valyutani kiriting (USD, EUR, RUB, UZS):").toUpperCase();
// let result;

// switch (currency) {
//   case "USD":
//     result = amount * 11100; // 1 USD ≈ 11100 UZS
//     console.log(`${amount} USD = ${result} UZS`);
//     break;
//   case "EUR":
//     result = amount * 12000; // 1 EUR ≈ 12000 UZS
//     console.log(`${amount} EUR = ${result} UZS`);
//     break;
//   case "RUB":
//     result = amount * 150; // 1 RUB ≈ 150 UZS
//     console.log(`${amount} RUB = ${result} UZS`);
//     break;
//   case "UZS":
//     result = amount; // UZS ni UZS ga
//     console.log(`${amount} UZS = ${result} UZS`);
//     break;
//   default:
//     console.log("Noto‘g‘ri valuta nomi!");
// }

// 18 masala
// let score = Number(prompt("Ballni kiriting (0-100):"));
// let grade;

// switch (true) {
//   case score >= 90 && score <= 100:
//     grade = "A";
//     break;
//   case score >= 80 && score < 90:
//     grade = "B";
//     break;
//   case score >= 70 && score < 80:
//     grade = "S";
//     break;
//   case score >= 60 && score < 70:
//     grade = "D";
//     break;
//   case score >= 0 && score < 60:
//     grade = "E";
//     break;
//   default:
//     grade = "Noto‘g‘ri ball";
// }
// console.log("Bahosi:", grade);

// 19 masala
// let day = Number(prompt("Hafta kunini raqamini kiriting (1-7):"));
// let result;

// switch (day) {
//   case 6:
//   case 7:
//     result = "Dam olish kuni";
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     result = "Ish kuni";
//     break;
//   default:
//     result = "Noto‘g‘ri kun raqami";
// }
// console.log(result);

// Functions
// 20 masala
// function fn (text) {
//   return text.replace(/\D/g, "");
// }
// console.log(fn ("Umarali123test99"));

// 21 masala
// let numbers = [2, 4, 6, 8];
// let result = numbers.map((n) => n * n);
// console.log(result);

// 22 masala
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = numbers.filter((n) => n % 2 === 0);
// console.log(result);

// 23 masala
// let numbers = [3, 5, 7, 10];
// let result = numbers.reduce((a, b) => a + b, 0);
// console.log(result);

// 24 masala
// let son = [5, 3, -2, 7, -9];
// let result = son.find((n) => n < 0);
// console.log(result);


