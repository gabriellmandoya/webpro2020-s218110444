/*
    1. Array
*/

// //Deklarasi Array
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(angka);
// let buah = ["Mangga", "Apel", "Jeruk"];
// console.log(buah);

// let arr = ["text", 1, true];
// console.log(arr);

// let myFunc = function () {
//     return "Helloe Array";
// };

// let arr2 = ["text", 1, true, myFunc(), [1, 2, 3, 4, 5]];
// //Mengakses element dalam array
// console.log(arr2[2]);
// console.log(arr2[3]);
// console.log(arr2[4][2]);
// console.log(arr2);

// console.log(typeof arr2);
// console.log(arr2.length);

// let arr2a = ["text", 1, true, myFunc()];
// console.log(typeof arr2a);


// //Deklarasi array menggunakan kata kunci new
// let buah2 = new Array("Salak", "Jambu", "Melon");
// console.log(buah2);



// //Manipulasi Array
// //1. Menambah isi Array

// let mhs = [];
// mhs[0] = "John";
// mhs[1] = "Bob";
// mhs[2] = "Jane";
// mhs[3] = "Peter";

// console.log(mhs);

// //2. Mengubah isi Array
// mhs[1] = "Donny";
// console.log(mhs);

// //3. Menghapus isi Array
// mhs[2] = undefined;
// console.log(mhs);

// //4. Menampilkan isi Array
// let mhs = ["John", "Bob", "Jane", "Peter"];

// for (let i = 0; i < mhs.length; i++) {
//     console.log("Mahasiswa ke-" + [i + 1] + " adalah " + mhs[i]);
// }


//Method dalam Array
// //1. length
// //2. toString
// let mhs = ["John", "Bob", "Jane", "Peter"];
// console.log(mhs);
// console.log(mhs.toString());
// //3. join
// console.log(mhs.join(" - "));

// //4. push, pop, unshift, shift
// mhs.push("Mayrra");
// mhs.push("Stenly");
// console.log(mhs.join(" - "));
// mhs.pop();
// mhs.pop();
// console.log(mhs.join(" - "));

// mhs.unshift("Stenly");
// mhs.unshift("Mayrra");
// console.log(mhs.join((" - ")));
// mhs.shift();    
// mhs.shift();
// console.log(mhs.join(" - "));

// //Pop n Push: Belakang
// //shift n unshift: Depan


// //5. Concat
// let buah = ["Mangga", "Apel", "Anggur"];
// let sayur = ["Kangkung", "Bayam", "Buncis"];
// let makanan = sayur.concat(buah); //Menggabungkan 2 Array
// console.log(makanan);

// //6. Splice and Slice
// //Splice
// let buah = ["Pisang", "Mangga", "Apel", "Jeruk"];
// buah.splice(2, 0, "Melon", "Semangka");
// console.log(buah.join(" - "));
// //Slice
// let buah2 = buah.slice(0, 3);
// console.log(buah2.join(" - "));

// //7. forEach and map
// //forEach
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// let tampilkanAngka = function (el) {        //Argumen 'el' dapat dinamakan terserah
//     console.log(el);                        
// };
// angka.forEach(tampilkanAngka);
// //map
// let angka2 = angka.map(function (el) {
//     return el;
// });
// console.log(angka2);

// // forEach: Tidak mengembalikan Array, tidak mengembalikan nilai apapun, hanya untuk memanggil ulang fungsi(callback function) tetapi tidak mengembalikan nilai
// // map: memanggil ulang fungsi(callback function) tetapi mengembalikan nilai

// //8. sort
// let angka = [1, 100, 2, 20, 5, 3, 7, 8];
// let mhs = ["John", "Bob", "Erick"];
// mhs.sort();             //Sort Ascending
// console.log(mhs);       
// mhs.reverse();          //Sort Descending
// console.log(mhs);
// angka.sort(function (a, b){     //sort: callback function
//     return a - b;               //a-b: sort acs, if b-a: sort dsc
// });
// console.log(angka);
// //aphabetical and numeric sorting is different

// //9. Filter
// let angka = [1, 100, 2, 20, 5, 3, 7, 8];
// let angka2 = angka.filter(function (el){
//     return el > 5;
// });
// console.log(angka2);