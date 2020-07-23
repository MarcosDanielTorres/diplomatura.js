let arreglo=Array.from({length: getRandomInt(10,31)}, () => ['']);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
let btnRed = document.getElementById('buttonExplotarRojo');

btnRed.addEventListener('click', function () {
    btnRed.remove();
});

let btnAzul = document.getElementById('buttonExplotarAzul');

btnAzul.addEventListener('click', function () {
    btnAzul.remove();
});
let btnYellow = document.getElementById('buttonExplotarAmarillo');

btnYellow.addEventListener('click', function () {
    btnYellow.remove();
});