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
//   sarlavha: string;
//   muallif: string;
//   nashrYili: number;
//   sarlavhaSoni: number;
//   mavjud: boolean;
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
//   sarlavha: "Shum bola",
//   muallif: "G'afur G'ulom",
//   nashrYili: 1936,
//   sarlavhaSoni: 1,
//   mavjud: false,
// };
// c) Quyidagi funksiyani tugallang. U Kitob obyektini qabul qiladi va
// kitob haqida ma'lumotni string ko'rinishida qaytaradi.
// function kitobHaqidaMalumot(kitob: Kitob): string {
//   return `Sarlavha: ${kitob.sarlavha}, Muallif: ${kitob.muallif}, Nashr yili: ${
//     kitob.nashrYili
//   }, Sarlavha soni: ${kitob.sarlavhaSoni}, Mavjud: ${
//     kitob.mavjud ? "Ha" : "Yo'q"
//   }`;
// }
// console.log(kitobHaqidaMalumot(kitob3));
// 3. Amaliy mashq: Kutubxona tizimi
// a) "Kutubxona" nomli class yarating. Unda quyidagi xususiyatlar bo'lishi kerak:
// - kitoblar (Kitob turidagi array)
// - kitobQoshish(kitob: Kitob) metodi
// - kitobniTopish(sarlavha: string) metodi
// - mavjudKitoblarSoni() metodi
// interface Kitob {
//   sarlavha: string;
//   muallif: string;
//   nashrYili: number;
//   sarlavhaSoni: number;
//   mavjud: boolean;
// }
// class Kutubxona {
//   private kitoblar: Kitob[] = [];
//   public kitobQoshish(kitob: Kitob): void{
//     this.kitoblar.push(kitob)
//   }
//   public kitobTOpish(sarlavha: string): Kitob | undefined{
//     let isExist=this.kitoblar.find(kitob=> kitob.sarlavha.toLowerCase() == sarlavha.toLowerCase())
//     return isExist
//   }
//   public kitoblarSoni(): number{
//     return this.kitoblar.filter(kitob=>kitob.mavjud== true).length
//   }
// }
// let kutubxona=new Kutubxona();
// b) Kutubxona classidan obyekt yarating va unga bir nechta kitoblar qo'shing
// let kitob1: Kitob = {
//   sarlavha: "Sariq devni minib",
//   muallif: "Xudoyberdi To'xtaboyev",
//   nashrYili: 2010,
//   sarlavhaSoni: 120,
//   mavjud: true
// }
// let kitob2: Kitob = {
//   sarlavha: "Shum bola",
//   muallif: "G'afur G'ulom",
//   nashrYili: 1936,
//   sarlavhaSoni: 1,
//   mavjud: false
// };
// let kitob3: Kitob = {
//   sarlavha: "O'tgan kunlar",
//   muallif: "Abdulla Qodiriy",
//   nashrYili: 1925,
//   sarlavhaSoni: 2,
//   mavjud: true
// };
// kutubxona.kitobQoshish(kitob1);
// kutubxona.kitobQoshish(kitob2);
// kutubxona.kitobQoshish(kitob3)
// // console.log(kutubxona);
// c) Qo'shilgan kitoblar orasidan birini izlab toping
// kutubxona.kitobTOpish("Sariq devni minib");
// d) Mavjud kitoblar sonini chiqaring
// // kutubxona.kitoblarSoni();
// 4. Qo'shimcha vazifa
// "Foydalanuvchi" interfeysi va "Talaba" classini yarating.
// Talaba classi Foydalanuvchi interfeysini implement qilishi kerak.
// O'zingiz xohlagan xususiyatlar va metodlarni qo'shing.
// Ushbu classdan bir nechta obyektlar yarating va ular ustida amallar bajaring.
// interface Foydalanuvchi {
//   ism: string;
//   familiya: string;
//   yosh: number;
//   email: string;
// }
// class Talaba implements Foydalanuvchi {
//   ism: string;
//   familiya: string;
//   yosh: number;
//   email: string;
//   kurs: number;
//   universiteti: string;
//   constructor(ism: string, familiya: string, yosh: number, email: string, kurs:number, universitet: string){
//     this.ism=ism,
//     this.familiya=familiya,
//     this.yosh=yosh,
//     this.email=email,
//     this.kurs=kurs,
//     this.universiteti=universitet
//   }
//   talabaHaqidaMalumot(): string{
//     return `${this.ism} ${this.familiya} ${this.yosh} yoshda. ${this.universiteti}ning ${this.kurs} - kursi talabasi. Email: ${this.email}`;
//   }
//   talabaKursiniOshirish(): void{
//     this.kurs=this.kurs+1
//   }
// }
// const talaba1=new Talaba("Abduraxmon", "Bozorov", 25, "abduraxmonbiziriv1999@gmail.com", 3, "Fargona Politexnika Inistituti");
// console.log(talaba1.talabaHaqidaMalumot());
// talaba1.talabaKursiniOshirish();
// console.log(talaba1.talabaHaqidaMalumot());
// 1. Basic Types
// a) Quyidagi o'zgaruvchilarni to'g'ri TypeScript turlari bilan e'lon qiling:
let ism = "Ali";
let yosh = 25;
let talabami = true;
let manzil = "Toshkent";
// b) Yuqoridagi ma'lumotlardan foydalanib, shaxs haqida ma'lumot chiqaruvchi funksiya yozing
function shaxsMalumoti(ism, yosh, talabami, manzil) {
    return `${ism} ${yosh} da. Manzili ${manzil}. Talabami: ${talabami ? 'ha' : 'yoq'}`;
}
console.log(shaxsMalumoti('Abduraxmon', 25, true, "Fargona"));
