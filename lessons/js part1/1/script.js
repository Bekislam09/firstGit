// console.log('Hello World');
// console.log(20 - 5);

// alert('Hello World')

// var num = 12;
// let num1 = 10;
// const num2 = 20;

// let userName = 'Bekislam';
// let user_name = 'Bekislam';
// let user$name = 'Bekislam';

// console.log(userName);

// let num = 12;
// let str = 'slovo123(,./!@#$%^&*)';
// let bool = true; //false
// let nul = null;
// let und = undefined;
// let flot = 1.2;

// console.log(num, str, bool, nul, und, flot);

// let sum = 1 + 1;
// let min = 1 - 1;
// let mylt = 5 * 2;
// let del = 10 / 2;
// let ost = 10 % 3;

// console.log(ost);

// let dinam = prompt('Введите число')

// console.log(dinam);

// if(dinam % 2 === 0){
//     console.log('Четное');
// }else{
//     console.log('Не Четное');
// }

// console.log(5 < 11);
// console.log(50 > 11);
// console.log(5 <= 11);
// console.log(52 >= 11);
// console.log(11 == 11);
// console.log(11 === 11);
// console.log(true > false);

// let str = 'Итог ';
// let num = 100;
// let num1 = '20'

// console.log(+num);
// console.log('' + num);
// console.log(str + num1);

// if (20 < 30) {
//     console.log('Все правильно');
// }else if (30 > 25){ 
//     console.log('Все не правильно ');
// }else if (10 == 20){
//     console.log('Все не сработвло');
// }

let age = prompt('Введите ваш возраст')

console.log(age);
if (age == ''){
    console.log('Вы ничего не ввели'); 
}else if (age < 18){
    console.log('молодой');
}else if(age < 50){
    console.log('зрелый');
}else if(age > 50){
    console.log('старый');
}

let conf = confirm('Подвердите');

console.log(conf);

if (conf) {
    console.log('Вы подвердили');
}else{
    console.log('Вы не подвердили'); 
}