let delay = (mensaje, milisegundos) =>{
    setTimeout(() =>  {
        console.log(mensaje);
    }, milisegundos);
}

let run = () => {
   console.log(1);
   delay('Terminó 1', 3000);
   console.log(2);
   delay('Terminó 2', 2000);
   console.log(3);
   delay('Terminó 3', 1000);
}

run();
