"use strict"
const getId = (id) => document.getElementById(id);
const newListener = (elementId, eventName, action) => getId(elementId).addEventListener(eventName, action);
let automatic;

newListener('red', 'click', () => {
    clearInterval(automatic);
    semaphorePhases.red();
});
newListener('yellow', 'click', () => {
    clearInterval(automatic);
    semaphorePhases.yellow();
});
newListener('green', 'click', () => () => {
    clearInterval(automatic);
    semaphorePhases.green();
});
newListener('automatic', 'click', () => semaphorePhases.automatic());
newListener('off', 'click', () => semaphorePhases.off());

const semaphorePhases = {
    semaphore: getId('semaphore'),
    red: () => this.semaphore.src = "./public/images/vermelho.png",
    yellow: () => this.semaphore.src = "./public/images/amarelo.png",
    green: () => this.semaphore.src = "./public/images/verde.png",
    off: () => {
        clearInterval(automatic);
        this.semaphore.src = "./public/images/desligado.png";
    },
    automatic: () => {
        clearInterval(automatic);
        const switchImages = () => {
            const src = this.semaphore.src;
            if(src.includes("verde") || src.includes("desligado")) semaphorePhases.red();
            else if(src.includes("vermelho")) semaphorePhases.yellow();
            else semaphorePhases.green();
        }
        switchImages();
        automatic = setInterval(switchImages, 2000);
    }
};
