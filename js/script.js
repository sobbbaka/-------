function first_quest() {
    document.getElementById("first_buttom").
        onclick = function () {
            let a = prompt("Введите первый катет.");
            let int_a = Number(a);                                                              // Переводим строку в число
            if (isNaN(int_a) == true || (a == null)) return;                                    // Отмена при вводе не числа или при отмене ввода
            var b = prompt("Введите второй катет.");
            let int_b = Number(b);                                                              // Переводим строку в число
            if (isNaN(int_b) == true || b == null ) return;                                     // Отмена при вводе не числа или при отмене ввода                           
            let gip = Math.sqrt(Math.pow(int_a, 2) + Math.pow(int_b, 2))                        // Вычисляем корень из квадратов введеных катетов
            let P = gip + int_a + int_b                                                         // Сумма всех катетов
            alert("Гипотенуза = " + gip + ";" + " Периметр = " + P)                             // Вывод
        }
}

function two_quest() {
    document.getElementById("two_quest").
        onclick = function () {
            let number = prompt("Введите число, которое будем разворачивать.");
            if (number == null || isNaN(number) == true || (number > 999) || (number < -999 )) return;        // Проверка на правильность ввода данных
            alert ((number.split('').reverse().join('')));                                                    // Разбитие числа на массив символов, разворот и обратный сбор
        }
}