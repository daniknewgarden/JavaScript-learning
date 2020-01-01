// let money = prompt("Ваш бюджет на месяц?", ""),
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false
// };

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     a2 = prompt("Во сколько обойдется?", ""),
//     a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     a4 = prompt("Во сколько обойдется?", "");

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

// alert(appData.budget / 30);

var num = prompt('Вгадай моє число від 0 до 100', '10');

    if (num > 25) {
        num = prompt('Забагато спробуй ще раз', '')
    } else if (num < 25) {
        num = prompt('Замало спробуй ще раз', '')
    } else {
        alert('ТакБ ти вагадав. Це 25')
    }

    // do{
    //     if (num > 25) {
    //         num = prompt('Забагато спробуй ще раз', '')
    //     } else if (num < 25) {
    //         num = prompt('Замало спробуй ще раз', '')
    //     }
    // }   while (25 > num, num > 25);

    // alert('Yes, you are right');
