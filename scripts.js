"use strict"
const getId = (id) => document.getElementById(id);
const newListener = (elementId, eventName, action) => getId(elementId).addEventListener(eventName, action);
const semaphore = document.getElementById('semaphore');
let automatic;

newListener('red', 'click', () => semaphorePhases.red())
newListener('yellow', 'click', () => semaphorePhases.yellow())
newListener('green', 'click', () => semaphorePhases.green())
newListener('automatic', 'click', () => semaphorePhases.automatic())
newListener('off', 'click', () => semaphorePhases.off())

const semaphorePhases = {
    semaphore: getId('semaphore'),
    red: () => this.semaphore.src = "./public/images/vermelho.png",
    yellow: () => this.semaphore.src = "./public/images/amarelo.png",
    green: () => this.semaphore.src = "./public/images/verde.png",
    off: () => {
        this.semaphore.src = "./public/images/desligado.png";
        clearInterval(automatic);
    },
    automatic: () => {
        semaphorePhases.red();
        automatic = setInterval(() => {
            if(this.semaphore.src.includes("verde")) semaphorePhases.red();
            else if(this.semaphore.src.includes("vermelho")) semaphorePhases.yellow();
            else semaphorePhases.green();
        }, 2000);
        automatic;
    }
};
