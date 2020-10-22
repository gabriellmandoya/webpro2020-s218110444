/*
    JAVASCRIPT ASYNCHRONOUS
*/

//1---------------------------------------------------------------------------------------------------------------------
//  1. ASYNCHRONOUS

// const second = () => {
//     const num = 10;
//     setTimeout(()=>{
//         console.log('Second');
//         console.log(num);
//     }, 2000, num)
// }

// const first = () => {
//     console.log('First');
//     second();
//     console.log('The End');
// }

// first();


//2---------------------------------------------------------------------------------------------------------------------
//  2. PROMISE (Basic)

// const getData = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         //resolve();
//         reject();
//     }, 2000);
// })

// getData
//     .then(() => console.log('Success'))     //Don't put semicolon here
//     .catch(() => console.log('Error'));


//3---------------------------------------------------------------------------------------------------------------------
//  3. PROMISE (With condition)

// const getData = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         const error = false;
//         if (error) {
//             reject();
//         } else {
//             resolve();
//         }
//     }, 2000);
// })

// getData
//     .then(() => console.log('Success'))     //Don't put semicolon here
//     .catch(() => console.log('Error'));


//4---------------------------------------------------------------------------------------------------------------------
//  4. PROMISE (With condition + parameter)

// const getData = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         const error = false;
//         if (error) {
//             reject('Error!!');
//         } else {
//             resolve('Success!!');
//         }
//     }, 2000);
// })

// getData
//     .then(success => console.log(success))     //Don't put semicolon here
//     .catch(error => console.log(error));


//5---------------------------------------------------------------------------------------------------------------------
//  5. PROMISE (Inside a function)

// const getData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             const error = false;
//             if (error) {
//                 reject('Error!!');
//             } else {
//                 resolve('Success!!');
//             }
//         }, 2000);
//     })
// }

// getData()
//     .then(success => console.log(success))     //Don't put semicolon here
//     .catch(error => console.log(error));


//6---------------------------------------------------------------------------------------------------------------------
//  6. CHAIN

// const getData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             const error = false;
//             if (error) {
//                 reject('Error!!');
//             } else {
//                 resolve(10);
//             }
//         }, 2000);
//     })
// }

// const getName = id => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`ID: ${id} Success`)
//         }, 2000)
//     })
// }

// getData()
//     .then(id => getName(id))                   //Don't put semicolon here
//     .then(success => console.log(success))     //This is Chaining         //Don't put semicolon here
//     .catch(error => console.log(error));


//7---------------------------------------------------------------------------------------------------------------------
//  7. ASYNC AND AWAIT (Try Catch)

// const getData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             const error = false;
//             if (error) {
//                 reject('Error!!');
//             } else {
//                 resolve(10);
//             }
//         }, 2000);
//     })
// }

// const getName = id => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`ID: ${id} Success`)
//         }, 2000)
//     })
// }

// const getNameById = async () => {               
//     try{                                    // To replace (then.) 
//     const id = await getData();
//     const success = await getName(id);
//     console.log(success);
//     } catch (error) {                       // Same as (catch)
//         console.log(error);
//     }
// }

// getNameById();


//8---------------------------------------------------------------------------------------------------------------------
//  8. ASYNC AND AWAIT (Using return)

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const error = false;
            if (error) {
                reject('Error!!');
            } else {
                resolve(10);
            }
        }, 2000);
    })
}

const getName = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`ID: ${id} Success`)
        }, 2000)
    })
}

const getNameById = async () => {               
    let id, success;
    try{                                    // To replace (then.) 
        id = await getData();
        success = await getName(id);
    } catch (error) {                       // Same as (catch)
        console.log(error);
    }
    return success;
}

getNameById().then(result => console.log(result));