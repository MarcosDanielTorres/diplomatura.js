const TODO = ['Queso', 'Tomates', 'Zanahorias', 'Toalla'];

miStorage = window.localStorage;


let body = document.getElementsByTagName('body')[0];

const iniciar = (miStorage) => {
  let ul = document.createElement('ul');
  for (let i = 0; i < TODO.length; i++) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(TODO[i]));
    li.className = TODO[i];
    var btn = document.createElement('input');
    btn.type = 'button';
    btn.value = 'eliminar';
    btn.style.background = 'red';
    btn.style.marginLeft = '10px';
    btn.addEventListener('click', function () {
      dlt(li);
    });
    miStorage.setItem(`li${i}`, JSON.stringify(li));
    li.appendChild(btn);
    ul.appendChild(li);
  }
  return ul;
};

const agregarElemento = (ul, miStorage) => {
  const elem = document.getElementById('text').value;
  let body = document.getElementsByTagName('body')[0];
  let li = document.createElement('li');
  li.className = elem;
  li.appendChild(document.createTextNode(elem));
  var btn = document.createElement('input');
  btn.type = 'button';
  btn.value = 'eliminar';
  btn.style.background = 'red';
  btn.style.marginLeft = '10px';
  btn.addEventListener('click', function () {
    dlt(li);
  });
  miStorage.setItem('li', JSON.stringify(li));
  li.appendChild(btn);
  ul.appendChild(li);
  body.appendChild(ul);
  document.getElementById('text').value = '';
};

let ul = iniciar(miStorage);
body.appendChild(ul);

let btn = document.getElementById('btn');

btn.style.background = 'lightgreen';
btn.style.marginLeft = '10px';
// btn.style.borderBottomRightRadius ='10px';
 btn.style.borderStyle = 'rounded';

btn.addEventListener('click', function () {
  agregarElemento(ul, miStorage);
});

function dlt(li) {
  li.parentNode.removeChild(li);
}
