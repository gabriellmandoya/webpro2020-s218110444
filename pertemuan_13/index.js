//1---------------------------------------------------------------------------------------------------------------------
//  1. REST PARAMETER

    //Mengkonversi argumen menjadi array
const foo = (...params) => {
  console.log(params);
};
foo("A", "B", "C"); // Output: ["A", "B", "C"]

//  .................................................................................................

    // rest parameter ditaruh sebagai parameter terakhir, ia akan mengambil sisa dari argument yang kita berikan pada fungsi tersebut.
    // Pada dasarnya, hanya bisa ada satu rest parameter dalam sebuah fungsi. Dan dia harus ditempatkan di paling belakang. Kalau tidak, akan muncul error saat kita mendeklarasikan fungsinya.
    // Berikut akibat kalau rest parameter ditempatkan di tengah-tengah parameter lainnya

const buzz = (param1, ...params, param2) => {
  console.log(param1);
  console.log(params);
  console.log(param2);
}
// Output: SyntaxError: Rest parameter must be last formal parameter

//  .................................................................................................



//2---------------------------------------------------------------------------------------------------------------------
//  2. SPREAD OPERATOR

    // Bedanya dengan rest parameter:
    // Mengkonversi array menjadi objek individu 

let arrayBilangan = [1, 2, 3, 4, 5];
    // tanpa spread operator
console.log(arrayBilangan); // Output: [1, 2, 3, 4, 5]
    // kalau pakai spread operator
console.log(...arrayBilangan); // Output: 1, 2, 3, 4, 5

    // Dapat membuat array duplikat
let arrayAsli = [1, 2, 3];
let arrayDuplikat = [...arrayAsli];
    // Tujuan duplikat adalah untuk menggunakan array duplikat untuk suatu percobaan tanpa mengubah array asli
    // Contoh case:
let arrayAsli = [1, 2, 3];
let arrayDuplikat = arrayAsli;
/*
Dalam kode di atas, arrayAsli dan arrayDuplikat itu menunjuk pada array yang sama, sehingga kalau kita membuat perubahan pada arrayDuplikat, arrayAsli juga ikut berubah. Sebaliknya juga begitu.
*/

    // Dapat menggabungkan 2 array
let array1 = ["foo", "bar"];
let array2 = ["fizz", "buzz"];
    // menggunakan spread operator
array1 = [...array1, ...array2];
console.log(array1); // Output: ["foo", "bar", "fizz", "buzz"]

//  ..........................................................................................

    //  SPREAD OPERATOR DENGAN OBJEK
    //  spread operator memecah objek menjadi pasangan properti-nilai yang membentuknya
let orang = {
  nama: "Yudistya",
  umur: 32
};
    // Cara biasa
// orang.pekerjaan = "arsitek";
// orang.pendidikan = "S1";
    // Menggunakan Spread Operator
orang = {...orang, pekerjaan: "arsitek", pendidikan: "S1"};

//  ..........................................................................................

    // MENGGABUNGKAN OBJEK
const objek1 = {a: 1, b: 2};
const objek2 = {c: 3, d: 4};
const objekGabungan = {...objek1, ...objek2};
console.log(objekGabungan); // Output: {a: 1, b: 2, c: 3, d: 4}