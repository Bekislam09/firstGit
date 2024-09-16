let ageCheck = confirm("Вам есть 15 лет?");


if (ageCheck) {
    let name = prompt("Введите ваше имя:");
    if (name) {
        alert("Добро пожаловть, " + name);
    } else {
        alert("Доступ не разрешен");
    }
} else {
    alert("Доступ не разрешен");
}