const countBtn = document.querySelector('.countBtn button');
const resetBtn = document.querySelector('.resetBtn button');
const countVol = document.querySelector('.countVol h2');

countBtn.addEventListener('click', countUp);
resetBtn.addEventListener('click', reset);

function countUp(){
    countVol.innerHTML++;
}

function reset(){
    countVol.innerHTML = 0;
}