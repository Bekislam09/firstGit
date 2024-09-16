// let h1 = document.getElementById('firstText');
// let secondText = document.getElementsByClassName('secondText');
// // let btn = document.getElementsByTagName('button');

// let tag = document.querySelector('#firstText'); // по id
// let tag1 = document.querySelector('.secondText');// по class
// let tag2 = document.querySelector('h1');// по тегам

// console.log(h1.getAttribute('id'));

// h1.setAttribute('class', 'text'); 
// // h1.removeAttribute('class'); // Удаляет класс
// // h1.className = 'Parahraph' ; // меняет название класса

// let secText = document.getElementById('secondText');

// secText.textContent = '<h1>New Text</h1>';
// secText.innerText = '<h1>Text</h1>';
// secText.innerHTML = '<h1>fhhfhfhf</h1>';

// let p = document.createElement('p');

// p.textContent = 'Новый создан элемент'
// p.setAttribute('class', 'text')

// document.body.append(p)

// secText.append(p)
 

let input = document.getElementById('input');
let btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//     console.log('dsff');
// })
btn.onclick = () => {
    let text = document.createElement('h1')
    text.textContent = input.value;
    document.body.append(text)
    text.setAttribute('class', 'text')
    input.value = '';
}

// input.addEventListener('change', (event) => {
//     console.log(event.target.value);
    
// })

input.onchange = (event) => {
    console.log(event.target.value);
}