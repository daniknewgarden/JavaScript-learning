let page = {
    body: document.querySelector('body'),
    menuItem: document.getElementsByTagName('li'),
    menu: document.querySelector('.menu'),
    ad: document.querySelector('.adv'),
    textArea: document.querySelector('.prompt'),
    replaceItems: function () {
        page.menu.insertBefore(page.menuItem[2], page.menuItem[1]);
    },
    addItem: function (a) {
        a = page.menuItem[2].cloneNode();
        console.log(page.menuItem);
        console.log(a);
    },
    changeBackground: function () {
        page.body.style.backgroundImage = 'url(img/apple_true.jpg)';
    },
    remove: function () {
        page.ad.remove();
    },
    question: function (answer) {

        setTimeout(() => {
            answer = prompt('Как вы относитесь к технике apple', '');
            page.textArea.innerHTML = 'Вы ' + answer + ' относитесь к технике apple';
        }, 300);

    }
};

page.replaceItems();
page.addItem();
page.changeBackground();
page.remove();
page.question();













