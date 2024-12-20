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
        name: "",
        text: "Увесистые ворота входа в подземелье стояли перед моим взором. Два факела по бокам навеивали на мысль, что я не первый кто сунулся сюда.",
        img: ['img/vxod.jpeg'],
        next: ['2', 'Далее'],
    },

    2: {
        name: "",
        text: "Но выбора у меня нет, если что договорюсь с местными обитателями, может пропустят меня с миром.",
        img: ['img/vxod.jpeg'],
        next: ['3', 'Открыть ворота'],
    },

    3: {
        name: "",
        text: "Уже собравшись толкнуть ворота, что то внутри меня ёкнуло и я глупо замер в паре метров от входа.",
        img: ['img/vxod.jpeg'],
        next: ['4', 'Аккуратно приоткрыть дверь', "3.1", "Проигнорировать чувство"],
    },

    3.1: {
        name: "Смерть",
        text: "Наплевав на чувство, я толкаю дверь и уверенно шагаю внутрь, попадая в поставленный аккурат возле двери капкан. Адская боль тут же заставила меня закричать, привлекая внимание стоящего за дверью бандита. Он избавил меня от страданий.",
        img: ['img/trap.jpg'],
        next: ['1', 'Нет, так точно ничего не выйдет'],
    },

    4: {
        name: "",
        text: "Доверившись чувству я аккуратно приоткрываю дверь и замечаю разложенный капкан. Интересно, кто его сюда поставил?",
        img: ['img/trap.jpg'],
        next: ['5', 'Обойти капкан'],
    },

    5: {
        name: "",
        text: "А вот и владелец капкана. Бандит, стоявший за дверью, повернулся в мою сторону и вытащил свой меч.",
        img: ['img/bandit.png'],
        next: ['6', 'Стоять на месте'],
    },

    6: {
        name: "Бандит",
        text: 'Ты ошибся дверью дружок пирожок, готовься к смерти!',
        img: ['img/bandit.png'],
        next: ['7', 'Ответить что то крутое в ответ'],
    },

    7: {
        name: "Я",
        text: 'Ещё посмотрим кто кого!',
        img: ['img/bandit.png'],
        next: ['8', 'Приготовиться к бою'],
    },

    8: {
        name: "",
        text: 'Против меча с кулаками не лучшая затея, но и я ведь не пальцем деланный!',
        img: ['img/fight.png'],
        next: ['9', 'Атака (Возможна ответная атака противника)', '9.1', 'Защита (Есть шанс восстановить здоровье)'],
    },

    9: {
        name: "Я",
        text: 'Получай!',
        img: ['img/ydar.png', 'img/ydar2.png'],
        next: ['8', 'На позицию'],
    },

    9.1: {
        name: "Бандит",
        text: 'Подохни уже!',
        img: ['img/block.png'],
        next: ['8', 'Терпеть'],
    },

    10: {
        name: "Смерть",
        text: 'Клинок протыкает моё тело и кровь забрызгивает весь мой обзор. В последнии минуты жизни я вижу лишь ухмылку бандита, который замахивается для последнего удара.',
        img: ['img/lose.png'],
        next: ['1', 'Нет, так точно ничего не выйдет'],
    },

    11: {
        name: "",
        text: 'НОКАУТ! Бандит лежит в отключке.',
        img: ['img/win.png'],
        next: ['12', 'Взять меч'],
    },

    12: {
        name: "",
        text: 'Бандитский мечь пригодится, всяко лучше чем разбивать костяшки об лица.',
        img: ['img/meq.png'],
        next: ['13', 'Продолжить путь'],
    },

    13: {
        name: "",
        text: 'Следующая комната представляла собой зал с водопадом, текущим откуда то сверху. Лестницы наверх нигде не виднелость, поэтому я не придумал ничего лучше как...',
        img: ['img/voda.jpg'],
        next: ['14', 'Поискать лестницу', '14.1', 'Телепортировать себя наверх'],
    },

    14.1: {
        name: "",
        text: 'Ты не умеешь телепортироваться.',
        img: ['img/voda.jpg'],
        next: ['14.2', 'С чего бы это?'],
    },

    14.2: {
        name: "",
        text: 'Ты же не серьезно сейчас? Люди не умеют телепортироваться когда захотят. Для этого нужны спец...',
        img: ['img/voda.jpg'],
        next: ['14.3', 'Да, да, телепортируй меня давай'],
    },

    14.3: {
        name: "",
        text: 'Нет.',
        img: ['img/voda.jpg'],
        next: ['13', 'Чёрт бы тебя побрал!'],
    },

    14: {
        name: "",
        text: 'Кроме кучи черепов и скелетов ты ничего не находишь.',
        img: ['img/voda.jpg'],
        next: ['15', 'Искать усерднее'],
    },

    15: {
        name: "",
        text: 'Всё ещё ничего кроме костей.',
        img: ['img/voda.jpg'],
        next: ['16', 'Так вот же лестница!'],
    },

    16: {
        name: "",
        text: 'Что? Какого х... Ладно, ты находишь лестницу и взбираешься наверх.',
        img: ['img/voda_les.png'],
        next: ['17', 'Другое дело'],
    },

    17: {
        name: "",
        text: 'Пройдя чуть вперед ты натыкаешься на четыре колонны и расположенный в центре комнаты рыгач.',
        img: ['img/quest.jpg'],
        next: ['18', 'Похоже это какая-то загадка'],
    },

    18: {
        name: "",
        text: 'Неожиданно перед тобой появляется зеленый портал и из него выходят два человека.',
        img: ['img/quest_portal.png'],
        next: ['19', 'В шоке стоять на месте'],
    },

    19: {
        name: "Рик",
        text: 'Чёрт, похоже я перепутал места, мы теперь в чёртовой визуальной новелле в браузере.',
        img: ['img/quest_portal.png'],
        next: ['20', 'По прежднему стоять на месте'],
    },

    20: {
        name: "Морти",
        text: 'О чём ты Рик? Почему мы не двигаемся? Что происходит?',
        img: ['img/quest_portal.png'],
        next: ['21', 'О чём он вообще?'],
    },

    21: {
        name: "Рик",
        text: 'Послушай Морти, мы картинки, мы двигаемся только когда двигается сюжет.',
        img: ['img/quest_portal_talk.png'],
        next: ['22', 'Я вот точно не картинка'],
    },

    22: {
        name: "Морти",
        text: 'Боже мой, и что нам теперь делать?!',
        img: ['img/quest_portal_talk.png'],
        next: ['23', 'Кажется пора готовиться к новой битве'],
    },

    23: {
        name: "Рик",
        text: 'Да не парься, эй, странно выглядящий чувак с алмазным мечом, хочешь выйти на первую концовку?',
        img: ['img/quest_portal.png'],
        next: ['24', 'Да ну вас, мне тут загадку решать надо', '24.1', 'Да'],
    },

    24.1: {
        name: "Рик",
        text: 'Вот и круто, запрыгивай с нами в портал.',
        img: ['img/quest_portal.png'],
        next: ['24.2', 'Прыгнуть в портал'],
    },

    24.2: {
        name: "Первая концовка",
        text: 'Вы учавствовали в приключениях Рика и Морти около двух серий, после чего вас бездарно и глупо слили. Такое себе.',
        img: ['img/end_1.jpg'],
        next: ['23', 'Кажется, всё могло закончится иначе'],
    },


    24: {
        name: "Рик",
        text: 'Поди уже открыл её, а? Ладно, нажимай на кнопку и решай свою тупую загадку.',
        img: ['img/quest_portal.png'],
        next: ['25', 'Какую кнопку?'],
    },

    25: {
        name: "",
        text: 'Портал пропал раньше, чем он услышал твой вопрос. Пора браться за загадку.',
        img: ['img/quest.jpg'],
        next: ['26', 'Изучить колонны'],
    },

    26: {
        name: "",
        text: 'Колонны имеют по четыре рисунка с каждой стороны, видимо необходимо развернуть их в правильную комбинацию.',
        img: ['img/quest.jpg'],
        next: ['27', 'Изучить таблички сверху'],
    },

    27: {
        name: "",
        text: 'На табличках нарисованы различные животные, точно такие же как на колоннах, похоже это и есть комбинация.',
        img: ['img/quest.jpg'],
        next: ['28', 'Как то слишком легко, тебе не кажется?'],
    },

    28: {
        name: "",
        text: 'Может и кажется, думаешь создатели этого места так просто дали бы ответ на свою загадку? Мне по большей части без разницы, так что выбирай сам.',
        img: ['img/quest.jpg'],
        next: ['28.1', 'Повернуть колонны согласно весячим табличкам и дёрнуть рычаг', '29', 'Дёрнуть рычаг просто так'],
    },

    28.1: {
        name: "Смерть",
        text: 'Развернув последнюю колонну и дёрнув за рычаг ты слышишь скрежет механизмов, после чего комнату наполняет едкий газ.',
        img: ['img/quest_smoke.png'],
        next: ['1', 'Нет, так точно ничего не выйдет'],
    },

    29: {
        name: "",
        text: 'Послышался скрип и через пару мгновений ворота открылись.',
        img: ['img/quest.jpg'],
        next: ['30', 'Идти дальше'],
    },

    30: {
        name: "",
        text: 'Ещё одна комната, но на этот раз двери куда то ещё не было. Похоже конец, значит кулон где-то тут.',
        img: ['img/after_quest.jpg'],
        next: ['30.1', 'Изучить статую', '31', 'Изучить ящик для украшений'],
    },

    30.1: {
        name: "",
        text: 'Огромная статуя какого-то человекоподобного механизма. Надеюсь всё же декоративная.',
        img: ['img/after_quest_robot.png'],
        next: ['30.2', 'Дотронуться до неё', '30', 'Отойти от статуи'],
    },

    30.2: {
        name: "",
        text: 'Ты аккуратно касаешься статуи. Ничего не происходит.',
        img: ['img/after_quest_robot.png'],
        next: ['30', 'Оставить статую в покое'],
    },

    31: {
        name: "",
        text: 'За стеклом лежит кулон. Он полностью совпадает с тем, что был в заказе.',
        img: ['img/after_quest_chest.png'],
        next: ['31.1', 'Попытаться разбить стекло мечом', '30', 'Отойти от ящика'],
    },

    31.1: {
        name: "",
        text: 'Сильный удар мечом не дал никакого эффекта. На стекле даже царапины не осталось.',
        img: ['img/after_quest_chest.png'],
        next: ['30', 'Оставить ящик в покое'],
    },

    32: {
        name: "",
        text: 'Неожиданно твоё внимание привлекает некое устройство с кнопочками на столе. Ты подходишь к нему и берешь его в руки.',
        img: ['img/after_quest.jpg'],
        next: ['33', 'Далее'],
    },

    33: {
        name: "",
        text: 'Странный механизм с кнопочками.',
        img: ['img/term.png'],
        next: ['33.1', 'Нажать случайную кнопку', '34', 'Нажать случайную кнопку'],
    },

    33.1: {
        name: "",
        text: 'После нажатия стекло, защищающее кулон, сдвинулось в сторону.',
        img: ['img/term.png'],
        next: ['33.2', 'Схватить кулон'],
    },

    33.2: {
        name: "",
        text: 'Вот и он, задание выполнено, пора сматываться отсюда.',
        img: ['img/kylon.png'],
        next: ['33.3', 'Бежать к выходу'],
    },

    33.3: {
        name: "",
        text: 'Оказавшись в комнате с водой, кулон неожиданно заговорил.',
        img: ['img/voda_les.png'],
        next: ['33.4', 'Достать его'],
    },

    33.4: {
        name: "Кулон",
        text: 'Постой, не отдавай меня заказчику. При помощи меня он уничтожит весь мир!',
        img: ['img/voda_les_kylon.png'],
        next: ['33.5', 'С чего мне тебе верить?'],
    },

    33.5: {
        name: "Кулон",
        text: 'Хочешь я тебя озолочу? Будешь самым богатым человеком на планете! Только не отдавай меня ему!',
        img: ['img/voda_les_kylon.png'],
        next: ['33.6', 'Согласиться', '33.7', 'Отказаться'],
    },

    33.6: {
        name: "Вторая концовка",
        text: 'Кулон неожиданно начал выплевывать из себя золотые монеты, да в таком большом количестве, что они быстро заполнили комнату. Выбросив кулон и набив карманы до отказа ты быстро покидаешь подземелье.',
        img: ['img/end_2.png'],
        next: ['33', 'Кажется я не все кнопки на том терминале нажал'],
    },

    33.7: {
        name: "Смерть",
        text: 'Насильно засунув кулон обратно в карман ты продолжил идти, пока резкая боль в сердце не свалила тебя на землю. Неожиданная остановка сердца, кто бы мог подумать?',
        img: ['img/death_hearth.png'],
        next: ['1', 'Нет, так точно ничего не выйдет'],
    },

    34: {
        name: "",
        text: 'Статуя робота неожиданно зашевелилась.',
        img: ['img/after_quest.jpg'],
        next: ['35', 'Пора делать ноги!'],
    },

    35: {
        name: "Третья концовка",
        text: 'Выпущенный на свободу робот ещё долго терроризировал окрестности, убивая каждого на своём пути. А что касается тебя, то никто и никогда больше не давал тебе никакую работу.',
        img: ['img/robot.jpg'],
        next: ['33', 'Кажется я не все кнопки на том терминале нажал'],
    },


};

function getButton(event) {
    body_novel(event.target.id);
}

var hp_hero = 3;
var hp_enemy = 1;
flag = 0;
flag_one = 0;
function Novel_buttom(step) {
    document.getElementById("Text_box").innerHTML = ArrayQuest[step]["text"];
    if (ArrayQuest[step]["next"][1] == "Атака (Возможна ответная атака противника)") {
        document.getElementById("Text_box_hp").style.display = "block";
        document.getElementById("Text_box_hp").innerHTML = "Здоровье: " + hp_hero;
    }
    if (ArrayQuest[step]["next"][0] == "12") {
        document.getElementById("Text_box_hp").innerHTML = " ";
    }
    if (ArrayQuest[step]["next"][0] == "1") {
        document.getElementById("Text_box_hp").style.display = "none";
    } else {
        document.getElementById("Text_box_hp").style.display = "block";
    }
    if (ArrayQuest[step]["next"][1] != "На позицию" && hp_enemy > 0) {
        document.getElementById("img_novel").src = ArrayQuest[step]["img"][0];
    } else {
        let hand = Math.floor(Math.random() * 2);
        if (hand == 1) {
            document.getElementById("img_novel").src = ArrayQuest[step]["img"][1];
        } else {
            document.getElementById("img_novel").src = ArrayQuest[step]["img"][0];
        }
        if (hp_hero <= 0 && ArrayQuest[step]["next"][0] == "8") {
            ArrayQuest[step]["next"][0] = "10";
            hp_hero = 3;
        }
        if (ArrayQuest[step]["next"][1] == "На позицию" && hp_enemy > 0) {
            dmg_in_hero = (Math.floor(Math.random() * 3))
            reverse_damage_chance = (Math.floor(Math.random() * 3))
            dmg = (Math.floor(Math.random() * 2) + 1)
            hp_enemy = hp_enemy - dmg;
            if (reverse_damage_chance == 1) {
                hp_hero = hp_hero - dmg_in_hero;
            }
        } else if (ArrayQuest[step]["next"][0] == "8") {
            ArrayQuest[step]["next"][0] = "11";
        };
        if (ArrayQuest[step]["next"][1] == "Продолжить путь") {
            hp_enemy += 3;
        }
    }

    if (ArrayQuest[step]["next"][1] != "Терпеть" && hp_enemy > 0) {
        document.getElementById("img_novel").src = ArrayQuest[step]["img"][0];
    } else {
        enemy_dmg = Math.floor(Math.random() * 2);
        reverse_damage_chance = (Math.floor(Math.random() * 5));
        if (reverse_damage_chance == 4 && ArrayQuest[step]["next"][1] != "На позицию") {
            hp_hero = hp_hero - enemy_dmg;
        } else if (hp_hero < 3) {
            hp_hero = hp_hero + (Math.floor(Math.random() * 2));
        }
    }

    if (ArrayQuest[step]["next"][1] == "Оставить ящик в покое") {
        flag += 1;
    }

    if (ArrayQuest[step]["next"][1] == "Оставить статую в покое") {
        flag_one += 1;
    }
    if (flag >= 1 && flag_one >= 1 && (ArrayQuest[step]["next"][1] == "Изучить статую" || ArrayQuest[step]["next"][1] == "Изучить ящик для украшений")) {
        ArrayQuest[step]["next"][0] = "32";
    }


    if (ArrayQuest[step]["name"].length > 0) {
        document.getElementById("Text_box_name").style.display = "block";
        document.getElementById("Text_box_name").innerHTML = ArrayQuest[step]["name"];
        if (ArrayQuest[step]["name"] == "Я") {
            document.getElementById("Text_box_name").style.color = "#19ff00";
        } else if (ArrayQuest[step]["name"] == "Бандит" || ArrayQuest[step]["name"] == "Смерть") {
            document.getElementById("Text_box_name").style.color = "#ff0000";
        } else if (ArrayQuest[step]["name"] == "Рик") {
            document.getElementById("Text_box_name").style.color = "#30d5c8";
        } else if (ArrayQuest[step]["name"] == "Морти") {
            document.getElementById("Text_box_name").style.color = "#fde910";
        } else if (ArrayQuest[step]["name"] == "Первая концовка" || ArrayQuest[step]["name"] == "Вторая концовка" || ArrayQuest[step]["name"] == "Третья концовка") {
            document.getElementById("Text_box_name").style.color = "#ffd700";
        } else if (ArrayQuest[step]["name"] == "Кулон") {
            document.getElementById("Text_box_name").style.color = "#30d5c8";
        }
    } else {
        document.getElementById("Text_box_name").style.display = "none";
    }


    if (ArrayQuest[step]["name"] == "Смерть") {
        music_death = new Audio("img/death.mp3")
        music_death.play();
    }
    if (ArrayQuest[step]["next"][0] == "7") {
        music_fight = new Audio("img/fight.mp3")
        music_fight.play();
    }
    if (ArrayQuest[step]["next"][1] == "На позицию") {
        music_hit = new Audio("img/hit.mp3")
        music_hit.play();
    }

    if (ArrayQuest[step]["next"][0] == "12") {
        music_fight.pause()
    }

    if (ArrayQuest[step]["name"] == "Первая концовка" || ArrayQuest[step]["name"] == "Вторая концовка" || ArrayQuest[step]["name"] == "Третья концовка") {
        music_win = new Audio("img/end.mp3")
        music_win.play();
    }


    if (ArrayQuest[step]["next"].length == 2) {
        document.getElementById("Novel_buttom_2").style.display = "none";
        document.getElementById("Novel_buttom_1").textContent =
            ArrayQuest[step]["next"][1];
    } else {
        if (ArrayQuest[step]["next"].length == 4) {
            document.getElementById("Novel_buttom_2").style.display = "block";
            document.getElementById("Novel_buttom_1").textContent = ArrayQuest[step]["next"][1];
            document.getElementById("Novel_buttom_2").textContent = ArrayQuest[step]["next"][3];
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


fetch('https://dummyjson.com/products?limit=30&skip=164')
    .then(res => res.json())
    .then(json => {
        let card = document.getElementById('product');
        let search_bar = document.getElementById('search_bar');
        let search_button = document.getElementById('search_button');
        let drop_button = document.getElementById('drop_button');
        let products = json.products;
        function display_products(products_display) {
            card.innerHTML = '';
            products_display.forEach(product => {
                let productElement = document.createElement('div');
                productElement.innerHTML = `
          <img src="${product.thumbnail}">
          <p class="text_card">${product.title}</p>
          <p class="text_card">Price: $${product.price}</p>
          <button type="button" class="card_button" id="${product.id - 1}" onclick="SoloCardDisplay(this.id)">Просмотр</button>
        `;
                card.append(productElement);
            });
        }
        display_products(products);

        if (document.getElementById('drop_button').style.display == "none") {
            document.getElementById('search_button').style.display = "block";
        }
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(json_all => {
                let all_products = json_all.products;
                search_button.addEventListener('click', () => {
                    let text = search_bar.value.toLowerCase();
                    if (text.length != 0) {
                        document.getElementById('search_button').style.display = "none";
                        document.getElementById('drop_button').style.display = "block";
                        document.getElementById('sum').style.display = "block";
                        let filter = all_products.filter(product =>
                            product.title.toLowerCase().includes(text) || product.description.toLowerCase().includes(text)
                        );
                        let filter_main = products.filter(product =>
                            product.title.toLowerCase().includes(text) || product.description.toLowerCase().includes(text)
                        );

                        document.getElementById("sum").textContent = "Всего совпадений найдено: " + filter.length + " | " + "Совпадений из диапазона: " + filter_main.length;
                        display_products(filter_main);
                    }
                });
                drop_button.addEventListener('click', () => {
                    document.getElementById('search_bar').value = "";
                    document.getElementById('search_button').style.display = "block";
                    document.getElementById('drop_button').style.display = "none";
                    document.getElementById('sum').style.display = "none";
                    display_products(products);
                });
            })
    })

function SoloCardDisplay(i) {
    onclick = function () {
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(solo_json => {
                let card_solo = document.getElementById('solo_product');
                let one_product = solo_json.products;
                card_solo.innerHTML = '';
                let solo_productElement = document.createElement('div');
                solo_productElement.innerHTML = `
                    <p class="text_card">${one_product[i].title}</p>
                    <p class="text_card">${one_product[i].description}</p>
                    <p class="text_card">Price: $${one_product[i].price}</p>
                    <img src="${one_product[i].thumbnail}">
                    <button type="button" class="card_button" id="card_button" onclick="SoloCardHide()">Закрыть</button>
                  `;
                card_solo.append(solo_productElement);
            })
        document.getElementById('solo_card').style.display = "block";
        document.getElementById('solo_card').style.position = "fixed";
        document.body.style.overflow = "hidden";
        document.body.style.userSelect = "none";
    }
}


function SoloCardHide() {
    onclick = function () {
        document.getElementById('solo_card').style.display = "none";
        document.getElementById('solo_card').style.position = "absolute";
        document.body.style.overflow = "auto";
        document.body.style.userSelect = "auto";
    }
}


function AddCard() {
    document.getElementById('new_card_main').style.display = "block";
    document.getElementById('new_card_main').style.position = "fixed";
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";
}


let outsideProduct;

function HideNew() {
    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: document.getElementById("name_product").value,
            description: document.getElementById("description_product").value,
            price: document.getElementById("cost_product").value,
        })
    })
        .then(res => res.json())
        .then((createdProduct) => {
            outsideProduct = createdProduct;
            let new_card_solo = document.getElementById('new_product');
            let new_solo_productElement = document.createElement('div');
            new_solo_productElement.innerHTML = `
                    <p class="text_card">${createdProduct.title}</p>
                    <p class="text_card">Price: $${createdProduct.price}</p>
                    <button type="button" class="card_button" id="${createdProduct.id}" onclick="NewCard()">Просмотр</button>
                  `;
            new_card_solo.append(new_solo_productElement);
            document.getElementById('new_card_main').style.display = "none";
            document.getElementById('new_card_main').style.position = "absolute";
            document.body.style.overflow = "auto";
            document.body.style.userSelect = "auto";
        })
}

function NewCard() {
    document.getElementById('new_solo_card').style.display = "block";
    document.getElementById('new_solo_card').style.position = "fixed";
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";
    let new_card = document.getElementById('new_product_disp');
    new_card.innerHTML = '';
    let new_productElement = document.createElement('div');
    new_productElement.innerHTML = `
    <p class="text_card">${outsideProduct.title}</p>
    <p class="text_card">${outsideProduct.description}</p>
    <p class="text_card">Price: $${outsideProduct.price}</p>
    <button type="button" class="card_button" id="card_button" onclick="NewCardHide()">Закрыть</button>
  `;
    new_card.append(new_productElement);

};

function NewCardHide() {
    document.getElementById('new_solo_card').style.display = "none";
    document.getElementById('new_solo_card').style.position = "absolute";
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto";
}
