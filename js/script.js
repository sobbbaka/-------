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

function one_task() {
    document.getElementById("one_task").
        onclick = function () {
            let A = document.getElementById("input_one_task_A");
            let B = document.getElementById("input_one_task_B");
            let C = document.getElementById("input_one_task_C");
            if (Number(A.value) > 0 && Number(B.value) > 0 && Number(C.value) > 0){
                document.getElementById("one_task_result").textContent = "TRUE";
            } else{
                if (isNaN(Number(A.value)) == true || isNaN(Number(B.value)) == true || isNaN(Number(C.value) == true)){
                    document.getElementById("one_task_result").textContent = "NOT NUMBER";
                } else{
                    if (Number(A.value) < 0 || Number(B.value) < 0 || Number(C.value) < 0){
                        document.getElementById("one_task_result").textContent = "NEGATIVE NUMBER";
                    } else {
                        if (A.value != null && B.value != null && C.value != null){
                            document.getElementById("one_task_result").textContent = "EMPTY VALUES";
                        } else {
                            document.getElementById("one_task_result").textContent = "FALSE";
                        }
                    }
                }
            }
        }
}

function two_task() {
    document.getElementById("two_task").
        onclick = function () {
            let first = document.getElementById("input_two_task_first");
            let second = document.getElementById("input_two_task_second");
            let tree = document.getElementById("input_two_task_tree");
            if (first.value != null && second.value != null && tree.value != null && isNaN(Number(first.value)) != true && isNaN(Number(second.value)) != true && isNaN(Number(tree.value)) != true){
                if (Number(first.value) < Number(second.value) && Number(first.value) < Number(tree.value)){
                    document.getElementById("two_task_result").textContent = "Ответ: " + first.value;
                } else{
                    if (Number(second.value) < Number(first.value) && Number(second.value) < Number(tree.value)){
                        document.getElementById("two_task_result").textContent = "Ответ: " + second.value;
                    } else{
                        document.getElementById("two_task_result").textContent = "Ответ: " + tree.value;
                    }
                }
            }
        }   
}

function tree_task() {
    document.getElementById("tree_task").
        onclick = function () {
            let X = document.getElementById("input_tree_task_X");
            if (X.value > -2 && X.value <= 0){
                document.getElementById("tree_task_result").textContent = "Ответ: " + (1/(1 + (2,1 * Math.abs(X.value))));
            } else {
                if (X.value <= -2){
                    document.getElementById("tree_task_result").textContent = "Ответ: " + (Math.cos(0,7 * (X.value * X.value)) + (0,5 * X.value));
                } else {
                    if (X.value > 0){
                        document.getElementById("tree_task_result").textContent = "Ответ: " + Math.sqrt(1 + Math.E**(2,1 * X.value));
                    }
                }
            }
        }
}

function four_task() {
    document.getElementById("four_task").
        onclick = function () {
            let X = document.getElementById("input_four_task_X");
            switch(Number(X.value)){
                case 0:
                    document.getElementById("four_task_result").textContent = "Ответ: " + (1/(1 + (2,1 * Math.abs(X.value))));
                    break;
                case -2:
                    document.getElementById("four_task_result").textContent = "Ответ: " + (Math.cos(0,7 * (X.value * X.value)) + (0,5 * X.value));
                    break;
                case 1:
                    document.getElementById("four_task_result").textContent = "Ответ: " + Math.sqrt(1 + Math.E**(2,1 * X.value));
                    break;
                default:
                    break;
            }
        }
    }