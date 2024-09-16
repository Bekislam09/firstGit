// let num = prompt('Введите число');

// console.log(num);

// if (num == null) {
//     document.write('Вы ничего не ввели')
// }else if(num < 0 || num >= 0){
//     document.write('')
//     if (num % 2 == 1) {
//         document.write('Не четное число')
//     }else if (num % 2 == 0){
//         document.write('Четное число')
//     }
// }else{
//     document.write('Введите число а не символы')
// }
// && - и
// || - или

// switch(true){
//     case num == null:{
//         document.write('<h1>Nothing</h1>')
//         break;
//     }
//     case num < 0 || num >= 0 : {
//         document.write('<h1>Это число</h1>')
//         break;
//     }
//     default : {
//         document.write('<h1>Введите число а не символы</h1>')
//         break;
//     }
// }


// nu m == null
//     ? document.write('<h1>Nothing</h1>')
//     : num < 0 || num >= 0
//     ? document.write('<h1>Это число</h1>')
//     : document.write('<h1>Введите число а не символы</h1>')

// let i = 0;

// while (i <= num){
//     console.log('Hello world', i);
//     i++
// }

// do{
//     console.log('Hello world', i);
//     i++
// }while(i <= num)

let mas =[12, 2, 'dfsf', [12, 2, 2, 'ddd'], null, true];
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for(let j in week){
    document.write(<h1>${week[j]}</h1>);
}

// console.log(mas[2]);

// for(let i = 0; i <= 5; i++){
//     console.log('Hello', i);
// }

// for(let i in mas){
//     console.log(mas[i]);
    
// }