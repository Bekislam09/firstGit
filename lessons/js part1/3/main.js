// //  declaration
// function sum(a = 0, b = 1) {
//     return a + b;
// }

// console.log(sum(2, 8));
// document.write(sum(8, 9))
// alert(sum(4, 5))


// // expression
// const func = function(a, b)  {
//     return a + b;
// }

// console.log(func(5, 9));

// const func2 = () => {
//     console.log(2, 3);
    
// }
// func2()

// const func3 = function(a, b, c) {
//     return (a + b + c) / 3;
// }

// console.log(func3(10, 20, 30));

// function func(a, b, c) {
//     return (a + b + c) / 3;
// }
// console.log(func(32435, 89, 99));

// const func =(collback) => {
//     return collback(10, 12, 12) / 3;
// }
// console.log(func((a, b, c) =>{
//     return(a, b, c)
// }))

// Анонимная функция
// const fun = (a) => {
//     // Изоляция
//     let abs = 1223
//     return(b) => {
//         console.log(abs);
//         return a + b;
        
//     }
// }
// // Первый способ
// const secFunc = fun(1)
// console.log(secFunc(2));
// // Второй способ
// console.log(fun(1)(3));

// let object = new Object();
// let object2 = {
//     name: 'Bekislam',
//     age: 15,
//     ful: function(a, b, c) {
//         return (a + b + c) / 3
//     },
//     work: {
//         companyName: 'Google',
//         location: 'USA',
//         addres: '22',
//         man: {
//             name: 'Jorg'
//         }
//     }
        // 'full name': 'Abdyldaev Bekislam'
// };
// console.log(object2.name, object2.age, user['full name]);

// console.log(object2.ful(12, 3, 2));

// console.log(object2.work.addres, object2.work.companyName, object2.work.location, object2.work.man.name);


let user = {
    login: 'Bekislam',
    password: 123456789,
}

console.log(user.login, user.password);


user.login = 'Beki'
Object.freeze(user);
let user2 = {...user}
user.nickname = 'Vividi'