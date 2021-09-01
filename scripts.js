"use strict"
const getId = (id) => document.getElementById(id);
const newListener = (elementId, eventName, action) => getId(elementId).addEventListener(eventName, action);
let automatic;

newListener('red', 'click', () => semaphorePhases.red())
newListener('yellow', 'click', () => semaphorePhases.yellow())
newListener('green', 'click', () => semaphorePhases.green())
newListener('automatic', 'click', () => semaphorePhases.automatic())
newListener('off', 'click', () => semaphorePhases.off())

const semaphorePhases = {
    semaphore: getId('semaphore'),
    red: () => {
        clearInterval(automatic);
        this.semaphore.src = "./public/images/vermelho.png";
    },
    yellow: () => {
        clearInterval(automatic);
        this.semaphore.src = "./public/images/amarelo.png";
    },
    green: () => {
        clearInterval(automatic);
        this.semaphore.src = "./public/images/verde.png";
    },
    off: () => {
        clearInterval(automatic);
        this.semaphore.src = "./public/images/desligado.png";
    },
    automatic: () => {
        clearInterval(automatic);
        semaphorePhases.red();
        automatic = setInterval(() => {
            if(this.semaphore.src.includes("verde")) semaphorePhases.red();
            else if(this.semaphore.src.includes("vermelho")) semaphorePhases.yellow();
            else semaphorePhases.green();
        }, 2000);
    }
};
