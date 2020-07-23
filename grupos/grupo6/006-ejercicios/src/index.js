const MOUNTAINS = [
    { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
    { name: 'Everest', height: 8848, place: 'Nepal' },
    { name: 'Mount Fuji', height: 3776, place: 'Japan' },
    { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
    { name: 'Denali', height: 6168, place: 'United States' },
    { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
    { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
  ];
  
  // let body = document.getElementsByTagName('body')[0];
  
  const tableCreate = (idioma) => {
    let body = document.getElementsByTagName('body')[0];
    let tabla = document.createElement('table');
    let tbdy = document.createElement('tbody');
    let tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
      if (i == 0) {
        let th = document.createElement('th');
        idioma
          ? th.appendChild(document.createTextNode('name'))
          : th.appendChild(document.createTextNode('nombre'));
        tr.appendChild(th);
      } else if (i == 1) {
        let th = document.createElement('th');
        idioma
          ? th.appendChild(document.createTextNode('height'))
          : th.appendChild(document.createTextNode('altura'));
        tr.appendChild(th);
      } else {
        let th = document.createElement('th');
        idioma
          ? th.appendChild(document.createTextNode('place'))
          : th.appendChild(document.createTextNode('lugar'));
        tr.appendChild(th);
      }
    }
    tbdy.appendChild(tr);
    tabla.appendChild(tbdy);
    body.appendChild(tabla);
  
    agregarInfoTabla();
  };
  
  const agregarInfoTabla = () => {
    let body = document.getElementsByTagName('body')[0];
    let tabla = document.createElement('table');
    let tbdy = document.createElement('tbody');
    for (let j = 0; j < MOUNTAINS.length; j++) {
      let tr = document.createElement('tr');
      for (let i = 0; i < 3; i++) {
        if (i == 0) {
          let td = document.createElement('td');
          td.appendChild(document.createTextNode(MOUNTAINS[j].name));
          console.log(MOUNTAINS[j].place);
          tr.appendChild(td);
        } else if (i == 1) {
          let td = document.createElement('td');
          td.appendChild(document.createTextNode(MOUNTAINS[j].height));
          tr.appendChild(td);
        } else {
          let td = document.createElement('td');
          td.appendChild(document.createTextNode(MOUNTAINS[j].place));
          tr.appendChild(td);
        }
      }
      tbdy.appendChild(tr);
    }
    tabla.appendChild(tbdy);
    body.appendChild(tabla);
  };
  
  
  let body = document.getElementsByTagName('body')[0];
  let btn = document.getElementById('btn1');
  
  btn.addEventListener('click', function(){
      body.removeChild(body.lastChild);
      body.removeChild(body.lastChild);
      tableCreate(true);
  });
  
  let btn2 = document.getElementById('btn2');
  
  btn2.addEventListener('click', function(){
      body.removeChild(body.lastChild);
      body.removeChild(body.lastChild);
      tableCreate(false);
  });