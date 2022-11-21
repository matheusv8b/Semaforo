const img = document.getElementById("img");
const buttons = document.getElementById("buttons");

const trafficLght = (event) => {
    turnOn[event.target.id]();
}

const turnOn = {
    'red': () => img.src = './semaforo-vermelho.jpg',
    'yellow': () => img.src = './semaforo-amarelo.jpg',
    'green': () => img.src = './semaforo-verde.jpg',
}


buttons.addEventListener('click', trafficLght);