function first_quest() {
    document.getElementById("first_buttom").
        onclick = function () {
            let a = prompt("Введите первый катет.");
            let int_a = Number(a);                                                               // Переводим строку в число
            if (isNaN(int_a) == true) alert("Вы ввели не число, повторите попытку.");     // Отмена при вводе не числа
            if (a == null) alert("Перехотел решать?");                                    // Сброс при отмене ввода
            var b = prompt("Введите второй катет.");
            let int_b = Number(b);                                                               // Переводим строку в число
            if (isNaN(int_b) == true) alert("Вы ввели не число, повторите попытку.");     // Отмена при вводе не числа
            if (b == null) alert("Мы же почти закончили...");                             // Сброс при отмене ввода
            let gip = Math.sqrt(Math.pow(int_a, 2) + Math.pow(int_b, 2))                         // Вычисляем корень из квадратов введеных катетов
            let P = gip + int_a + int_b                                                          // Сумма всех катетов
            alert("Гипотенуза = " + gip + ";" + " Периметр = " + P)                              // Вывод
        }
}

function two_quest() {
    document.getElementById("two_quest").
        onclick = function () {
            let number = prompt("Введите число, которое будем разворачивать.");
            if (number == null) alert("Тебе правда стоит ввести число.");                        // Сброс при отмене ввода
            if (isNaN(number) == true) alert("Число! ЧИСЛО!!!");                                 // Отмена при вводе не числа
            if ((number > 999) || (number < -999)) alert("Трёхзначное для кого написано?");      // Отмена при вводе не трёхзначного числа
            alert ((number.split('').reverse().join('')));                                       // Разбитие числа на массив символов, разворот и обратный сбор
        }
}