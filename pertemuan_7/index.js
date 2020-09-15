/*
    1. JavaScript Conditional
*/

// var job="teacher";
// var firstName= "jhon";
// switch(job){
//     case "teacher":
//         console.log(firstName + " is a teacher");
//         break;
//     case "driver":
//         console.log(firstName + " is a driver");
//         break;
//     case "designer":
//         console.log(firstName + " is a digigner");
//         break;
//     default:
//         console.log (firstName +" does something else");
// }

// var firstName = "jhon";
// var age = 16;
// if(age < 13){
//     console.log(firstName + "is a boy");
// }
// else if (age >=13 && age<20)
// {
//     console.log(firstName + "is a teenager");
// }
// else if(age >=20 && age<30){
//     console.log(firstName + "is a young man");
// }
// else{
//     console.log(firstName + "is a man");
// }

// //////////////////////////////////
// /*
//     Apabila kita mempunyai dua atau lebih kondisi yang berbeda, 
//     tetapi keputusan yang akan dijalankan sama,kita bisa 
//     menggabungkan beberapa perintah case tanpa menggunakan 
//     break dan hanya menggunakan break di kondisi terakhir.
// */
// let seragamSekolah;
// let hari = "senin";

// switch (hari) {
//   case "senin":
//   case "selasa":
//   case "rabu":
//   case "kamis":
//     seragamSekolah = "kemeja putih bawahan merah";
//     break;
//   case "jumat":
//     seragamSekolah = "baju pramuka";
//     break;
//   default:
//     seragamSekolah = "baju bebas";
// }

// console.log(seragamSekolah); // Output: kemeja putih bawahan merah

///////////////////////////////////////////////////////////////

/*
    2. JavaScript Loop
*/

//---------------------------------------------------------
//  For Loop

// for(var i=0; i<10;i++){
//     console.log(i);
// }

// //Example
// var jhon = ["jhon","smith",1990, "teacher",false];
// for(var i =0;i<jhon.length;i++){
//     console.log(jhon[i]);
// }

//---------------------------------------------------------
//  For/In Loop

/*
    Berbeda dengan for loop dari topik sebelumnya, 
    for...in digunakan untuk mengulang setiap properti dari 
    sebuah objek.
*/

// const buku = {
//     judul: "Harry Potter and The Philosopher's Stone",
//     pengarang: "J. K. Rowling",
//     tahun: 1997
//  };
//  for (x in buku) {
//    console.log(x, ':', buku[x]);
//  }
 
//  /*
//  Output:
//  judul : Harry Potter and The Philosopher's Stone
//  pengarang : J. K. Rowling
//  tahun: 1997
//  */
 
//---------------------------------------------------------
//  For/Of Loop

// /*
//     Berbeda dengan for loop dari topik sebelumnya, 
//     for...of digunakan untuk mengulang setiap element 
//     dari objek yang bisa diulang (contoh array atau string).
// */

// const buku = ["Game of Thrones: A Song of Ice and Fire",  
//    "Harry Potter and The Philosopher's Stone", 
//    "Lord of The Rings: The Fellowship of The Ring"
// ];

// for (x of buku) {
//   console.log(x);
// }

// /*
// Output:
// Game of Thrones: A Song of Ice and Fire
// Harry Potter and The Philosopher's Stone
// Lord of The Rings: The Fellowship of The Ring
// */

//========================================================
//  While Loop
var i=0;
while(i <10){
    console.log(i);
    i++;
}

//========================================================
//  Do While Loop

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

/*
Output:
1
2
3
4
5
6
7
8
9
10
*/