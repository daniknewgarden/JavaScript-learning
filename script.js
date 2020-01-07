let money, time;

function data() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
data();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function addExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) !=
            null && a != '' && b != '') {
            console.log('ok,all is good');
            appData.expenses.a = b;
        } else {
            i = i - 1;
        }
    };
}
addExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(0);

alert('Бюджет на день: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 1000) {
    alert('У тебя низкий уровень дохода');
} else if (appData.moneyPerDay < 2000) {
    alert('У тебя средний уровень дохода');
} else if (appData.moneyPerDay > 2000) {
    alert('У тебя высокий уровень дохода', '')
} else {
    alert('Произошла ошибка', '');
}

appData.savings = confirm('У вас есть накопления?');
console.log(appData.savings);

if (appData.savings == true) {

    let addDeposit = confirm('Хотите прибавить деньги?');

    if (addDeposit == true) {
        function deposit(savings, percent) {
            
            savings = +prompt('Какова сумма накоплений сейчас?', '');
            percent = +prompt('Выберите процент от 1 до 25', '');

            while (isNaN(percent) || percent == null || percent == '' || percent > 25) {
                percent = +prompt('Я же сказал выберите процент от 1 до 25', '');
            }

            appData.incomeFromDeposit = savings / 100 / 12 * percent;
            alert('Ваша прибыль в месяц: ' + appData.incomeFromDeposit);
        }
        deposit();
    } else {
        alert('Ну ладно');
    }
}
