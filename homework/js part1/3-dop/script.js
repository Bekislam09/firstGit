function number() {
    let num = prompt("Введите число:");
    num = parseFloat(num);
    if (isNaN(num)) {
        alert("Введите только числа");
    } else {
        if (num % 2 === 0) {
            alert("Четное");
        } else {
            alert("Нечетное");
        }
    }
}
number();