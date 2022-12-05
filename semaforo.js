const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    turnOn[event.target.id]();
    stopAutomatic();
}

const nextIndex = () => {
    if (colorIndex < 2) {
    colorIndex++
    }else {
        colorIndex = 0;
    }
}

const changecolor = () => {
    const colors = ['red','yellow','green']
    const color = colors[colorIndex];
    turnOn[color]();
    colorIndex++;
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval()
}

const turnOn = {
    'red': () => img.src = './semaforo-vermelho.jpg',
    'yellow': () => img.src = './semaforo-amarelo.jpg',
    'green': () => img.src = './semaforo-verde.jpg',
    'automatic': () => intervalId = setInterval(changecolor, 1000)
}


buttons.addEventListener('click', trafficLight);