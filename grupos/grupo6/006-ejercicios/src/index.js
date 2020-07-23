const MOUNTAINS = [
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
  { name: 'Everest', height: 8848, place: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, place: 'Japan' },
  { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
  { name: 'Denali', height: 6168, place: 'United States' },
  { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
  { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];

function createHeader(idioma) {
  let tr = document.createElement('tr');

  const idiomas = {
    english: ['name', 'height', 'place'],
    spanish: ['nombre', 'altura', 'lugar'],
  };

  idiomas[idioma].forEach((name) => tr.appendChild(createNode(name, 'th')));

  return tr;
}

function createEntry(obj) {
  let tr = document.createElement('tr');

  for (const propiedad in obj) {
    tr.appendChild(createNode(obj[propiedad], 'td'));
  }

  return tr;
}

function createNode(text, type) {
  let th = document.createElement(type);

  th.textContent = text;

  return th;
}

const tableCreate = (idioma) => {
  let app = document.getElementsByTagName('div')[0];

  let tabla = document.createElement('table');

  tabla.appendChild(createHeader(idioma));

  app.appendChild(tabla);

  MOUNTAINS.forEach((mountain) => tabla.appendChild(createEntry(mountain)));
};

let div = document.getElementsByTagName('div')[0];
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function () {
  div.removeChild(div.lastChild);
  tableCreate('english');
});

btn2.addEventListener('click', function () {
  div.removeChild(div.lastChild);
  tableCreate('spanish');
});
