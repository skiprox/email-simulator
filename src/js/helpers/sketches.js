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
    reward1: (p5) => {
        let balls = [];
        let shouldDestroy = false;
        p5.setup = () => {
            p5.createCanvas(window.innerWidth, window.innerHeight);
            p5.background(255);
            p5.noStroke();
            for (let i = 0; i < 200; i++) {
                balls[i] = {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    color: p5.color(Math.random() * 255, Math.random() * 255, Math.random() * 255),
                    speedX: Math.random() * 15 + 5,
                    speedY: Math.random() * 15 + 5
                }
            }
        }
        p5.draw = () => {
            if (shouldDestroy) {
                p5.remove();
            } else {
                p5.background(255);
                p5.updateBalls();
                p5.bounceBalls();
                p5.renderBalls();
                p5.textAlign(p5.CENTER, p5.CENTER);
                p5.fill(0);
                p5.textSize(120);
                p5.text("KEEP IT UP!", window.innerWidth/2, window.innerHeight/2)
            }
        }
        p5.updateBalls = () => {
            let i = balls.length;
            while (i--) {
                balls[i].y = balls[i].y + balls[i].speedY;
                balls[i].x = balls[i].x + balls[i].speedX;
            }
        }
        p5.bounceBalls = () => {
            let i = balls.length;
            while (i--) {
                if((balls[i].x > window.innerWidth) || (balls[i].x < 0)) {
                    balls[i].speedX = balls[i].speedX * -1;
                }
                if((balls[i].y > window.innerHeight) || (balls[i].y < 0)) {
                    balls[i].speedY = balls[i].speedY * -1;
                }
            }
        }
        p5.renderBalls = () => {
            let i = balls.length;
            while (i--) {
                p5.fill(balls[i].color);
                p5.ellipse(balls[i].x, balls[i].y, 50, 50);
            }
        }
        p5.destroy = () => {
            console.log('we should destroy');
            shouldDestroy = true;
        }
    },
    keepGoing: (p5) => {
        let shouldDestroy = false;
        p5.setup = () => {
            p5.createCanvas(window.innerWidth, window.innerHeight);
            p5.background(255);
        }
        p5.draw = () => {
            if (shouldDestroy) {
                p5.remove();
            } else {
                p5.background(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                p5.textAlign(p5.CENTER, p5.CENTER);
                p5.fill(255);
                p5.textSize(120);
                p5.text("KEEP GOING!", window.innerWidth/2, window.innerHeight/2)
            }
        }
        p5.destroy = () => {
            console.log('we should destroy');
            shouldDestroy = true;
        }
    }
}

module.exports = SketchFunctions;
