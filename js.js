let round = document.querySelector('.round'),
    square = document.getElementById('square'),
    box = document.getElementsByClassName('box'),
    btn = document.querySelector('.button'),
    ro = document.querySelectorAll('.round'),
    block = document.querySelector('.block');

ro[2].style.backgroundColor = '#468542';

function addElement() {
    let div = document.createElement('div');

    div.style.width = '150px';
    div.style.height = '150px';
    div.style.backgroundColor = 'yellow';

    document.body.appendChild(div);
}

btn.onclick = function addElement() {
    block.classList.toggle('active');
};