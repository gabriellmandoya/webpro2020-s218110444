/*
    DESTRUKTURISASI
*/

//1---------------------------------------------------------------------------------------------------------------------
//  1. DESTRUKTURISASI ARRAY

let buah = ["mangga", "pisang", "anggur"];
    // lakukan destrukturisasi array
let [buah1, buah2, buah3] = buah;
console.log(buah1); // Output: mangga
console.log(buah2); // Output: pisang
console.log(buah3); // Output: anggur

// .....................................................

    // gunakan koma kosong untuk melewati element kedua dan keempat
let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];
console.log(namaDepan); // Output: Joanne
console.log(namaBelakang); // Output: Rowling
console.log(buku); // Output: Harry Potter

// .....................................................

    //Menukar nilai
let a = 10;
let b = 15
[a,b] = [b,a];
    // nilai a sekarang adalah 15, dan nilai b adalah 10



//2---------------------------------------------------------------------------------------------------------------------
//  1. DESTRUKTURISASI OBJECK

    //Sesuai nama properti pada objek
let orang = {
  nama: "Joko",
  umur: 22,
  sudahMenikah: false
};
    // Destrukturisasi Objek
let { nama, umur, statusMenikah } = orang;
console.log(nama); // Output: Joko
console.log(umur); // Output: 22
console.log(statusMenikah); // Output: undefined karena nama variabel dan properti berbeda

// .....................................................

    //Tidak sesuai nama properti pada objek
let orang = {
  name: "Joko",
  age: 22,
};
    // buat variabel nama berisi nilai dari properti name pada orang
    // buat variabel age berisi nilai dari properti umur pada orang
let { name: nama, age: umur } = orang;
console.log(nama); // Output: Joko
console.log(umur); // Output: 22

// .....................................................
//  2. DESTRUKTURISASI OBJEK DALAM OBJEK

let murid = {
  kelas: "12a",
  nama: ["ani", "yahya", "sinto"],
  prestasi: {
    olahraga: "juara 1",
    akademik: "juara 2"
  }
};
let {
  prestasi: { olahraga }
} = murid;
console.log(olahraga); // Output: juara 1