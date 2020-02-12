let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    mounthSavingsValue = document.querySelector('.mounthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),


    expensesItem = document.querySelector('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    dayValue = document.querySelector('.day-value'),
    mounthValue = document.querySelector('.mounth-value'),
    yearValue = document.querySelector('.year-value');

let money, time;

let unActiveBtn = document.getElementsByTagName('button');

for (let i = 0; i < 3; i++) {
    unActiveBtn[i].style.opacity = '0.5';
};

startBtn.addEventListener('click', function () {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    for (let i = 0; i < 3; i++) {
        unActiveBtn[i].style.opacity = '1';
    };
});

// appData.budget = money;
// appData.timeData = time;

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false,
//     addExpenses: function () {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//                 b = prompt("Во сколько обойдется?", "");

//             if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) !=
//                 null && a != '' && b != '') {
//                 console.log('ok,all is good');
//                 appData.expenses.a = b;
//             } else {
//                 i = i - 1;
//             }
//         }
//     },
//     detectDayBudget: function () {
//         appData.moneyPerDay = (appData.budget / 30).toFixed(0);
//         alert('Бюджет на день: ' + appData.moneyPerDay);
//     },
//     detectLevel: function () {
//         if (appData.moneyPerDay < 1000) {
//             alert('У тебя низкий уровень дохода');
//         } else if (appData.moneyPerDay < 2000) {
//             alert('У тебя средний уровень дохода');
//         } else if (appData.moneyPerDay > 2000) {
//             alert('У тебя высокий уровень дохода', '');
//         } else {
//             alert('Произошла ошибка', '');
//         }
//     },
//     checkSavings: function () {
//         appData.savings = confirm('У вас есть накопления?');
//         console.log(appData.savings);
//     },
//     addDeposit: function () {
//         if (appData.savings == true) {

//             let addDeposit = confirm('Хотите прибавить деньги?');

//             if (addDeposit == true) {
//                 function deposit(savings, percent) {

//                     savings = +prompt('Какова сумма накоплений сейчас?', '');
//                     percent = +prompt('Выберите процент годових от 1 до 25', '');

//                     while (isNaN(percent) || percent == null || percent == '' || percent > 25) {
//                         percent = +prompt('Я же сказал выберите процент от 1 до 25', '');
//                     }

//                     appData.incomeFromDeposit = savings / 100 / 12 * percent;
//                     alert('Ваша прибыль в месяц: ' + appData.incomeFromDeposit);
//                 }
//                 deposit();
//             } else {
//                 alert('Ну ладно');
//             }
//         }
//     },
//     chooseIncome: function () {
//         items = prompt('Что принесет доход (перечислите через запятую)', '');
//         appData.income = items.split(', ');
//         appData.income.push(prompt('Что-то ещё', ''));
//         appData.income.sort();
//         alert('Ок, добавил ' + appData.income + ' в список');
//     }
// };
// appData.addExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();
// appData.addDeposit();
// appData.chooseIncome();
