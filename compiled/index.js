"use strict";
// // 1. Basic Types va Unions
// // a) Quyidagi o'zgaruvchilarni to'g'ri TypeScript turlari bilan e'lon qiling:
// let ism: string;
// let yosh: number;
// let talabami: boolean;
// let hobby: string | null;
// let ism: string = "Abduraxmon";
// let yosh: number = 25;
// let talabami: boolean = false;
// let hobby: string | null = "football";
// b) Ushbu funksiyani tugallang. U raqam yoki string qabul qilishi va
// // har doim string qaytarishi kerak.
// function stringgaAylantir(qiymat: number | string): string {
//     if(typeof qiymat == "number"){
//         let a=qiymat.toString();
//         return a
//     }else{
//         return qiymat
//     }
// }
// 2. Objects va Interfaces
// a) "Kitob" uchun interface yarating. Unda quyidagi xususiyatlar bo'lishi kerak:
// - sarlavha (string)
// - muallif (string)
// - nashrYili (number)
// - sahifalarSoni (number)
// - mavjud (boolean)
// interface Kitob {
//     sarlavha: string,
//     muallif: string,
//     nashrYili: number,
//     sarlavhaSoni: number,
//     mavjud: boolean
// }
// // b) Kitob interfeysi asosida kamida 3 ta kitob obyektini yarating
// let kitob1: Kitob = {
//     sarlavha: "Sariq devni minib",
//     muallif: "Xudoyberdi To'xtaboyev",
//     nashrYili: 1970,
//     sarlavhaSoni: 1,
//     mavjud: true
// };
// let kitob2: Kitob = {
//     sarlavha: "O'tgan kunlar",
//     muallif: "Abdulla Qodiriy",
//     nashrYili: 1926,
//     sarlavhaSoni: 2,
//     mavjud: true
// };
// let kitob3: Kitob = {
//     sarlavha: "Shum bola",
//     muallif: "G'afur G'ulom",
//     nashrYili: 1936,
//     sarlavhaSoni: 1,
//     mavjud: false
// };
