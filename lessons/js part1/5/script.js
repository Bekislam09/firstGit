// let time = prompt('Введите число')

// let setTime = setTimeout(() => {
//     // console.log('Set Time');
//     clearInterval(interval);
// }, time * 1000)

// // clearTimeout(setTime);

// let interval = setInterval(() => {
//     console.log("set interval");
// }, 1000)

// let arr = [1, 2, 3, 4, 5, 6]; // Массив

// arr.sort(); // Сортировка
// arr.reverse(); // Перевернуть массив

// arr[2] = 21; // Присвоение.
// delete arr[1]  // Удаление

//Добавоение едлемента в массив
// arr.push(10) // в конце
// arr.unshift(10) // в начале

// console.log(arr); 

// for (let i in arr){
//     console.log(arr[i]);  
// }


// console.log(arr.slice(1, 5));


// arr.forEach((item, ind) => {
//     console.log(item, ind);
// });

// console.log(arr.map((item, ind) => {
//     return item * 5 
// }));

// console.log(arr.filter((item) => {
//     return item < 5;
// }));


let timer = document.getElementById('timer');
let count = document.getElementById('count');
let result = document.getElementById('result');
let clickBtn = document.getElementById('clickBtn');
let reset = document.getElementById('reset');

const stopFunc = () => {
    clickBtn.disabled = true;
    result.textContent = (count.textContent / timer.value).
    toFixed(2);
}

let setTime;
let interval;

const start = () => {
    interval = setInterval(() => {
        timer.value -= 1;
        if(timer.value < 1){
            clearInterval(interval)
        }
    }, 1000)
}


let i = 0;

clickBtn.onclick = () => {
    if(i < 1){
        setTime = setTimeout(() => {
            stopFunc();
        }, timer.value * 1000)
        start();
    }
    i++;
    count.textContent = i;

}

reset.onclick = () => {
    i = 0;
    timer.value= 15;
    count.textContent = 0;
    result.textContent = 0;
    clearTimeout(setTime)
    clearInterval(interval)
    clickBtn.disabled = false;
}