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