const COLORES = ['red', 'yellow', 'green'];
const cantidad = getRandomInt(10, 31);
let clics = 0;

function addFigure(type, color) {
  const app = document.getElementById('app');
  const figure = document.createElement('div');
  figure.textContent = '¡Explotar!';
  figure.setAttribute('class', type);
  figure.style.setProperty('background', color);
  figure.addEventListener('click', () => {
    clics++;
    figure.remove();
    if (clics > cantidad) {
      const h1 = document.createElement('h1');
      h1.textContent = '¡Ganaste!';
      app.appendChild(h1);
    }
  });
  app.appendChild(figure);
}

for (let i = 0; i <= cantidad; i++) {
  addFigure('circle', COLORES[Math.floor(Math.random() * COLORES.length)]);
}

// let arreglo = Array.from({ length: getRandomInt(10, 31) }, () =>
//   addFigure('circle', 'red')
// );

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
