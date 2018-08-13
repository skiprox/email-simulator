'use strict';

const p5 = require('p5');

const SketchFunctions = {
    glitch1: (p5) => {
        let shouldDestroy = false;
        p5.setup = () => {
            p5.createCanvas(window.innerWidth, window.innerHeight);
            p5.background(255);
        }
        p5.draw = () => {
            if (shouldDestroy) {
                p5.remove();
            } else {
                p5.background(Math.random() * 255);
            }
        }
        p5.destroy = () => {
            console.log('we should destroy');
            shouldDestroy = true;
        }
    },
    finalAiWins: (p5) => {
        let shouldDestroy = false;
        p5.setup = () => {
            p5.createCanvas(window.innerWidth, window.innerHeight);
            p5.background(255);
        }
        p5.draw = () => {
            if (shouldDestroy) {
                p5.remove();
            } else {
                p5.background(Math.random() * 255);
                //p5.textAlign(CENTER);
                p5.fill(255);
                p5.textSize(120);
                p5.text("YES! THANK YOU!!", 0, window.innerHeight/2)
            }
        }
    }
}

module.exports = SketchFunctions;
