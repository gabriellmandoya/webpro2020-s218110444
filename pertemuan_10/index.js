/*
    let vs const vs var
*/

//1---------------------------------------------------------------------------------------------------------------------
//  1.  Deklarasi variable menggunakan let

// let bilanganPi = 3.14;
// bilanganPi = 3.; 
// console.log(bilanganPi); // Output: 3
// bilanganPi = 3.2;
// console.log(bilanganPi); // Output: 3.2

//2---------------------------------------------------------------------------------------------------------------------
//  2.   Deklarasi variable menggunakan const
// const bilanganPi = 3.14;
// bilanganPi = 3.;  // Output TypeError: Assignment to constant variable

// //Deklarasi object dan array menggunakan const
// const warna = ["merah", "kuning", "kelabu"]; // pemberian array baru pada variabel dengan `const` akan menampilkan error
// warna = ["hijau", "abu", "biru"];  // Output TypeError: Assignment to constant variable // namun jika perubahan pada arraynya sendiri masih bisa dilakukan
// warna.push("nila", "ungu");
// console.log(warna); // Output: ["merah", "kuning", "kelabu", "nila", "ungu"]

//3---------------------------------------------------------------------------------------------------------------------
//  3.  Deklarasi variable menggunakan var

//     // deklarasi variabel bernama bahasaFavorit
// var bahasaFavorit = "JavaScript";
//     // tidak sengaja kita membuat variabel dengan nama yang sama
// var bahasaFavorit = "Python";
// console.log(bahasaFavorit); // Output: Python

//     //Bandingkan dengan let dan const, hal tersebut dapat menyebabkan error

//     // deklarasi variabel menggunakan const dan let
// const nama = "Rafi";
// let umur = 16; // kalau kita coba deklarasi lagi dengan nama variabel yang sama
//     // akan muncul error
// const nama = "Farhan"; // Output SyntaxError: Identifier 'nama' has already been declared
// let umur = 21; // Output SyntaxError: Identifier 'nama' has already been declared

//4 - Penting---------------------------------------------------------------------------------------------------------------------
// 4. SCOPING VARIABLE DENGAN var

/*
Kelemahan lain dari deklarasi variabel menggunakan var adalah ia tidak memiliki block scoping.
Apa itu block scoping?
Sebuah variabel yang dideklarasikan di dalam blok if-else, switch-case, while, dan for seharusnya memang tidak bisa diakses dan diubah nilainya dari luar blok tersebut.
*/

// var judulBuku = "Harry Potter";
// if (judulBuku === "Harry Potter") {
//   var pengarang = "J.K. Rowling";
// }
// console.log(pengarang); // Output: J.K. Rowling

//     //Sedangkan let tidak bisa
// let judulBuku = "Harry Potter";
// if (judulBuku === "Harry Potter") {
//   let pengarang = "J.K. Rowling";
// }
// console.log(pengarang); // Output ReferenceError: pengarang is not defined

//5---------------------------------------------------------------------------------------------------------------------
//  5.  TEMPLATE LITERAL

//     //ES6 - Bisa ada operasi matematika ditengah
// let umur = 16;
// let kalimat = `Umur saya tahun depan adalah ${umur + 1}`;
// console.log(kalimat); // Output: Umur saya tahun depan adalah 17
// let kalimat2 = `Tahun depan saya ${umur + 1 >= 17 ? 'bisa' : 'tidak bisa'} ikut pemilu`;
// console.log(kalimat2); // Output: Tahun depan saya bisa ikut pemilu

//     /// fungsi yang mengembalikan sebuah string
// function namaSaya() {
//   return "Krishna";
// }
// let kalimatPerkenalan = `Halo nama saya adalah ${namaSaya()}`;
// console.log(kalimatPerkenalan); // Output: Halo nama saya adalah Krishna

//6---------------------------------------------------------------------------------------------------------------------
//  6.  ARROW FUNCTION

//     // fungsi dengan parameter
// const operasiPenjumlahan = (bilangan1, bilangan2) => {
//   const hasil =  bilangan1 + bilangan2;
//   return hasil;
// };
// console.log(operasiPenjumlahan(3, 4)); // Output: 7
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     // fungsi yang tidak memiliki parameter
// const namaJenisAnjing = () => {
//   const anjing = ["Pug", "Bulldog", "Poodle"];
//   return anjing[Math.floor(Math.random()*(anjing.length))];
// }
// console.log(namaJenisAnjing()); // Output: Pug (hasil random)

//7---------------------------------------------------------------------------------------------------------------------
//  7.  IMPLICIT RETURN VALUE

// /*
//     kondisi di mana sebuah fungsi langsung mengembalikan nilai tanpa ada deklarasi variabel atau operasi lainnya di dalamnya
// */

// function greeting(nama) {
//    return `Hi ${nama}`;
// }
// console.log(greeting('Einstein')); // Output: Hi Einstein
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     //ES6
// const greeting = (nama) => `Hi ${nama}`;
// console.log(greeting('Einstein')); // Output: Hi Einstein

//8---------------------------------------------------------------------------------------------------------------------
//  8.  Default Parameter

function panggang(bahan = "makanannya", durasi = "yang diperlukan", suhu = "yang cocok") {
    return `Panggang ${bahan} selama ${durasi} pada suhu ${suhu}`;
}
panggang("Risoles", "5 menit"); // Output: Panggang Risoles selama 5 menit pada suhu yang cocok
panggang(); // Output: Panggang makanannya selama yang diperlukan pada suhu yang cocok
