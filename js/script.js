function first_quest() {
    document.getElementById("first_buttom").
        onclick = function () {
            let a = prompt("Введите первый катет.");
            let int_a = Number(a);                                                              // Переводим строку в число
            if (isNaN(int_a) == true || (a == null)) return;                                    // Отмена при вводе не числа или при отмене ввода
            var b = prompt("Введите второй катет.");
            let int_b = Number(b);                                                              // Переводим строку в число
            if (isNaN(int_b) == true || b == null) return;                                     // Отмена при вводе не числа или при отмене ввода                           
            let gip = Math.sqrt(Math.pow(int_a, 2) + Math.pow(int_b, 2))                        // Вычисляем корень из квадратов введеных катетов
            let P = gip + int_a + int_b                                                         // Сумма всех катетов
            alert("Гипотенуза = " + gip + ";" + " Периметр = " + P)                             // Вывод
        }
}

function two_quest() {
    document.getElementById("two_quest").
        onclick = function () {
            let number = prompt("Введите число, которое будем разворачивать.");
            if (number == null || isNaN(number) == true || (number > 999) || (number < -999)) return;        // Проверка на правильность ввода данных
            alert((number.split('').reverse().join('')));                                                    // Разбитие числа на массив символов, разворот и обратный сбор
        }
}

function one_task() {
    document.getElementById("one_task").
        onclick = function () {
            let A = document.getElementById("input_one_task_A");
            let B = document.getElementById("input_one_task_B");
            let C = document.getElementById("input_one_task_C");
            if (Number(A.value) > 0 && Number(B.value) > 0 && Number(C.value) > 0) {
                document.getElementById("one_task_result").textContent = "TRUE";
            } else {
                if (Number(A.value) < 0 || Number(B.value) < 0 || Number(C.value) < 0) {
                    document.getElementById("one_task_result").textContent = "FALSE";
                } else {
                    if (isNaN(Number(A.value)) == true || isNaN(Number(B.value)) == true || isNaN(Number(C.value) == true)) {
                        document.getElementById("one_task_result").textContent = "NOT NUMBER";
                    } else {
                        if (A.value != null || B.value != null || C.value != null) {
                            document.getElementById("one_task_result").textContent = "EMPTY VALUES";
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
            if (first.value != null && second.value != null && tree.value != null && isNaN(first.value) != true && isNaN(second.value) != true && isNaN(tree.value) != true) {
                if (Number(first.value) <= Number(second.value) && Number(first.value) <= Number(tree.value)) {
                    document.getElementById("two_task_result").textContent = "Ответ: " + first.value;
                } else {
                    if (Number(second.value) <= Number(first.value) && Number(second.value) <= Number(tree.value)) {
                        document.getElementById("two_task_result").textContent = "Ответ: " + second.value;
                    } else {
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
            if (Number(X.value) > -2 && Number(X.value) <= 0) {
                let result_one = 1 / (1 + (2.1 * Math.abs(Number(X.value))));
                document.getElementById("tree_task_result").textContent = "Ответ: " + result_one;
            } else {
                if (Number(X.value) <= -2) {
                    let result_two = Math.cos(0.7 * (Number(X.value) * Number(X.value))) + (0.5 * Number(X.value));
                    document.getElementById("tree_task_result").textContent = "Ответ: " + result_two;
                } else {
                    if (Number(X.value) > 0) {
                        let result_tree = Math.sqrt(1 + Math.E ** (2.1 * X.value));
                        document.getElementById("tree_task_result").textContent = "Ответ: " + result_tree;
                    }
                }
            }
        }
}

function four_task() {
    document.getElementById("four_task").
        onclick = function () {
            let X = document.getElementById("input_four_task_X");
            switch (Number(X.value)) {
                case 0:
                    let result_one = 1 / (1 + (2.1 * Math.abs(Number(X.value))));
                    document.getElementById("four_task_result").textContent = "Ответ: " + result_one;
                    break;
                case -2:
                    let result_two = Math.cos(0.7 * (Number(X.value) * Number(X.value))) + (0.5 * Number(X.value));
                    document.getElementById("four_task_result").textContent = "Ответ: " + result_two;
                    break;
                case 1:
                    let result_tree = Math.sqrt(1 + Math.E ** (2.1 * X.value));
                    document.getElementById("four_task_result").textContent = "Ответ: " + result_tree;
                    break;
                default:
                    break;
            }
        }
}

function four_lab_first_quest() {
    document.getElementById("four_lab_first_buttom").
        onclick = function () {
            let number = prompt("Введите число:");
            let result = 0;
            console.log(number);
            while (Number(number) != 0) {
                if (Number(number) == 0 || isNaN(Number(number)) == true) {
                    return
                } else {
                    if (Number(number) < 0) {
                        result += 0;
                        number = prompt("Введите число:");
                        console.log(number);
                    } else {
                        result += Number(number);
                        number = prompt("Введите число:");
                        console.log(number);
                    }
                }

            }
            document.getElementById("four_lab_first_quest_result").textContent = "Сумма всех положительных чисел: " + result;
            console.log(result);
        }
}

function four_lab_two_quest() {
    document.getElementById("four_lab_two_buttom").
        onclick = function () {
            let N = document.getElementById("input_two_task_N");
            let result = 1.0;
            let multiplier = 0;
            for (let i = 1; i < Number(N.value) + 1; i++) {
                multiplier = 1 + i * 0.1;
                result *= multiplier
                document.getElementById("four_lab_two_quest_result").textContent = "Произведение : " + result;
            }
            return
        }
}

function Menu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
}


let stepNow = "";

let ArrayQuest = {
    1: {
        text: "Увесистые ворота входа в подземелье стояли перед моим взором. Два факела по бокам навеивали на мысль, что я не первый кто сунулся сюда.",
        img: 'img/vxod.jpeg',
        next: ['2', 'Далее'],
    },

    2: {
        text: "Но выбора у меня нет, если что договорюсь с местными обитателями, может пропустят меня с миром.",
        img: 'img/vxod.jpeg',
        next: ['3', 'Открыть ворота'],
    },

    3: {
        text: "Уже собравшись толкнуть ворота, что то внутри меня ёкнуло и я глупо замер в паре метров от входа.",
        img: 'img/vxod.jpeg',
        next: ['4', 'Аккуратно приоткрыть дверь', "3.1", "Проигнорировать чувство"],
    },

    3.1: {
        text: "Наплевав на чувство, я толкаю дверь и уверенно шагаю внутрь, попадая в поставленный аккурат возле двери капкан. Адская боль тут же заставила меня закричать, привлекая внимание стоящего за дверью бандита. Он избавил меня от страданий.",
        img: 'img/trap.jpg',
        next: ['1', 'Нет, так точно ничего не выйдет'],
    },
};

function getButton(event) {
    body_novel(event.target.id);
}


function Novel_buttom(step) {
    document.getElementById("Text_box").innerHTML = ArrayQuest[step]["text"];
    document.getElementById("img_novel").src = ArrayQuest[step]["img"];
    if (ArrayQuest[step]["next"].length == 2) {
        document.getElementById("Novel_buttom_2").style.display = "none";

        document.getElementById("Novel_buttom_1").textContent =
            ArrayQuest[step]["next"][1];
    } else {
        if (ArrayQuest[step]["next"].length == 4) {
            document.getElementById("Novel_buttom_2").style.display = "block";

            document.getElementById("Novel_buttom_1").textContent =
                ArrayQuest[step]["next"][1];
            document.getElementById("Novel_buttom_2").textContent =
                ArrayQuest[step]["next"][3];
        }
    }
}

function body_novel(idButton) {
    if (idButton == "Novel_buttom_1") {
        if (stepNow == "") {
            stepNow = "1";
        } else {
            stepNow = ArrayQuest[stepNow]["next"][0];
        }
    } else {
        if (idButton == "Novel_buttom_2") {
            stepNow = ArrayQuest[stepNow]["next"][2];
        }
    }
    Novel_buttom(stepNow);
}