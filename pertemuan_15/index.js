/*
    DESTRUKTURISASI (Cont.)
*/

//1---------------------------------------------------------------------------------------------------------------------
//  1. ARRAY

// const colors = ["merah","kuning","hijau"];

// let [satu, dua, tiga] = colors;
// console.log(satu, dua, tiga); // Output: merah kuning hijau

// let [satu, , tiga, empat = "biru"] = colors;
// console.log(satu, tiga, empat); // Output: merah hijau biru

//2---------------------------------------------------------------------------------------------------------------------
//  2. Object

// const user = {
//     name: "John",
//     gender: "male",
//     age: 33,
// };

// const display = ({ name, age }) => {
//     console.log(`Nama saya adalah ${name}. Umur saya adalah ${age}`);
// };

// display(user);

//3---------------------------------------------------------------------------------------------------------------------
//  3. Array Object

// const users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 3, name: "Bob" },
// ];

// // let [user1, user2, user3] = users;
// // console.log(user1, user2, user3);

// let [
//     { id: idUser1, name: nameUser1 },
//     { id: idUser2, name: nameUser2 },
//     { id: idUser3, name: nameUser3 },
// ] = users;
// console.log(idUser1, nameUser1);

//4---------------------------------------------------------------------------------------------------------------------
//  4. Kombinasi dengan Rest Operator

const colors = ["merah","kuning","hijau","biru"];

let [satu, ...lainnya] = colors;

console.log(satu);
console.log(lainnya);