//Video: https://drive.google.com/file/d/1Gvh1NIIb5UPl_SNVM1yqMmovnk84n-ln/view?usp=sharing
/*
    1. Object
*/

//Mendeklarasikan object
// //1. Object Literals
// const mhs1 = {
//     namaDepan: "John",
//     namaBelakang: "Doe",
//     umur: 31,
//     sudahLulus: true,
//     alamat: {
//         jalan: "Jln. Arnold Mononutu",
//         kecamatan: "Airmadidi",
//         kabupaten: "Minahasa Utara",
//     },
//     IPSemester: [3.05, 3.25, 3.0, 3.4],
//     hitungIPK: function () {
//         let total = 0;
//         this.IPSemester.forEach(function (el) {
//             total = total + el;
//         });
//         this.IPKumulatif = total / 4;
//     },
// };
// //variable 'object' di 'const' dapat diubah hanya melalui browser bukan vscode, lihat video 29:25 - 31:45

// // ////////Aktifasi terpisah
// // delete mhs1.namaBelakang;
// // console.log(mhs1);
// // ////////Aktifasi terpisah

// //2. Kata kunci new
// //const mhs2 = new Object();
// //mhs2.namaDepan = "Jane";
// //mhs2.namaBelakang = "Smith";
// //This number 2 doesn't have 'console.log'

// //Mengakses Properti Object
// //1. Dot notation
// //console.log(mhs1.umur);
// //2. Bracket notation
// //console.log(mhs1["namaBelakang"]);

// //Untuk nomor 1 di atas
// console.log(mhs1.alamat.jalan);
// console.log(mhs1.IPSemester[2]);
// mhs1.hitungIPK();       //Function didalam object tidak akan berjalan kalau tidak dipanggil, tapi function ini sebaiknya di 'console.log' secara khusus agar dapat melihat outputnya secara spesifik. Tapi khusus untuk ini tidak ada 'console.log' secara khusus
// console.log(mhs1);
// //Function dalam object harus dipanggil untuk melihat output dari fungsi tersebut.
// //Kalau function ini tidak dipanggil, maka function ini tidak akan dijalankan didalam object

//Array Object (JSON)
const mahasiswa = [
    {
        nim: "001",
        namaDepan: "John",
        namaBelakang: "Doe",
    },
    {
        nim: "002",
        namaDepan: "Jane",
        namaBelakang: "Smith",
    },
    {
        nim: "003",
        namaDepan: "Stenly",
        namaBelakang: "Adam",
    },
];

mahasiswa.forEach(function (el) {
    console.log(el);        //Array Object ditampilkan satu persatu berdasarkan index yang mulai dari 0
});