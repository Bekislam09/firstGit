function number() {
    let start = parseInt(prompt('Введите первое число'))
    let end = parseInt(prompt('Введите второе число'))

    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

number();