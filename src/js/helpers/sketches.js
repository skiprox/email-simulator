'use strict';

const p5 = require('p5');
const fontMultiplier = window.innerWidth < 800 ? 0.4 : 1;

const SketchFunctions = {
    startScreen: (p5) => {
        let shouldDestroy = false;
        p5.setup = () => {
            p5.createCanvas(window.innerWidth, window.innerHeight);
            p5.background(0);
            p5.noStroke();
        }
        p5.draw = () => {
            if (shouldDestroy) {
                p5.remove();
                document.getElementById('p5-fullpage').style.display = 'none';
            } else {
                p5.background(0);
                p5.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                p5.textSize(120 * fontMultiplier);
                p5.textAlign(p5.CENTER, p5.CENTER);
                p5.text("EMAIL", window.innerWidth/2, window.innerHeight/2 - 50);
                p5.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                p5.textSize(48 * fontMultiplier);
                p5.text("the game", window.innerWidth/2, window.innerHeight/2 + 30);
                p5.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                p5.textSize(32 * fontMultiplier);
                p5.text("(click anywhere to start)", window.innerWidth/2, window.innerHeight/2 + 100);
            }
        }
        p5.mousePressed = () => {
            console.log('hello world!');
            p5.destroy();
        }
        p5.destroy = () => {
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
                p5.update();
                p5.bounce();
                p5.render();
                p5.textAlign(p5.CENTER, p5.CENTER);
                p5.fill(0);
                p5.textSize(100 * fontMultiplier);
                p5.text("OVER 100 POINTS!\nKEEP IT UP!", window.innerWidth/2, window.innerHeight/2);
            }
        }
        p5.update = () => {
            let i = balls.length;
            while (i--) {
                balls[i].y = balls[i].y + balls[i].speedY;
                balls[i].x = balls[i].x + balls[i].speedX;
            }
        }
        p5.bounce = () => {
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
        p5.render = () => {
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
    reward2: (p5) => {
        let balls = [];
        let shouldDestroy = false;
        let maxD = 200;
        p5.setup = () => {
            p5.createCanvas(window.innerWidth, window.innerHeight);
            p5.background(255);
            p5.noStroke();
            for (let i = 0; i < 200; i++) {
                balls[i] = {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    color: p5.color(Math.random() * 255, Math.random() * 255, Math.random() * 255),
                    diameter: Math.random() * 100 + 20,
                    speedD: Math.random() * 5 + 5
                }
            }
        }
        p5.draw = () => {
            if (shouldDestroy) {
                p5.remove();
            } else {
                p5.background(255);
                p5.update();
                p5.bounce();
                p5.render();
                p5.textAlign(p5.CENTER, p5.CENTER);
                p5.fill(0);
                p5.textSize(100 * fontMultiplier);
                p5.text("OVER 200 POINTS!\nGOOD JOB!", window.innerWidth/2, window.innerHeight/2);
            }
        }
        p5.update = () => {
            let i = balls.length;
            while (i--) {
                balls[i].diameter = balls[i].diameter + balls[i].speedD;
            }
        }
        p5.bounce = () => {
            let i = balls.length;
            while (i--) {
                if((balls[i].diameter > maxD) || (balls[i].diameter <= 20)) {
                    balls[i].speedD *= -1;
                }
            }
        }
        p5.render = () => {
            let i = balls.length;
            while (i--) {
                p5.fill(balls[i].color);
                p5.ellipse(balls[i].x, balls[i].y, balls[i].diameter, balls[i].diameter);
            }
        }
        p5.destroy = () => {
            console.log('we should destroy');
            shouldDestroy = true;
        }
    },
    reward3: (p5) => {
        let balls = [];
        let shouldDestroy = false;
        let maxD = 200;
        p5.setup = () => {
            p5.createCanvas(window.innerWidth, window.innerHeight);
            p5.background(255);
            p5.noStroke();
            for (let i = 0; i < 200; i++) {
                balls[i] = {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    color: p5.color(Math.random() * 255, Math.random() * 255, Math.random() * 255),
                    heightX: Math.random() * 100 + 20,
                    heightY: Math.random() * 100 + 20,
                    speedX: (Math.random() * 15 + 5) * (i % 2),
                    speedY: (Math.random() * 15 + 5) * ((i + 1) % 2)
                }
            }
        }
        p5.draw = () => {
            if (shouldDestroy) {
                p5.remove();
            } else {
                p5.background(255);
                p5.update();
                p5.bounce();
                p5.render();
                p5.textAlign(p5.CENTER, p5.CENTER);
                p5.fill(0);
                p5.textSize(100 * fontMultiplier);
                p5.text("OVER 300 POINTS!\nAMAZING!", window.innerWidth/2, window.innerHeight/2);
            }
        }
        p5.update = () => {
            let i = balls.length;
            while (i--) {
                balls[i].y = balls[i].y + balls[i].speedY;
                balls[i].x = balls[i].x + balls[i].speedX;
            }
        }
        p5.bounce = () => {
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
        p5.render = () => {
            let i = balls.length;
            while (i--) {
                p5.fill(balls[i].color);
                p5.rect(balls[i].x, balls[i].y, balls[i].heightX, balls[i].heightY);
            }
        }
        p5.destroy = () => {
            console.log('we should destroy');
            shouldDestroy = true;
        }
    },
    reward4: (p5) => {
        let balls = [];
        let shouldDestroy = false;
        p5.setup = () => {
            p5.createCanvas(window.innerWidth, window.innerHeight);
            p5.background(255);
            p5.noStroke();
        }
        p5.draw = () => {
            if (shouldDestroy) {
                p5.remove();
            } else {
                p5.background(255);
                for (let i = 0; i < window.innerWidth; i += 100) {
                    p5.render(i);
                }
                p5.textAlign(p5.CENTER, p5.CENTER);
                p5.fill(0);
                p5.textSize(100 * fontMultiplier);
                p5.text("OVER 400 POINTS!\nINCREDIBLE!", window.innerWidth/2, window.innerHeight/2);
            }
        }
        p5.render = (i) => {
            let j = 0;
            while(j < window.innerHeight) {
                let rand = Math.floor(Math.random() * 2);
                if (rand == 1) {
                    p5.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                    p5.rect(i, j, 100, 100);
                } else {
                    p5.fill(255);
                    p5.rect(i, j, 100, 100);
                }
                j += 100;
            }
        }
        p5.destroy = () => {
            console.log('we should destroy');
            shouldDestroy = true;
        }
    },
    reward5: (p5) => {
        let balls = [];
        let shouldDestroy = false;
        p5.setup = () => {
            p5.createCanvas(window.innerWidth, window.innerHeight);
            p5.background(255);
            p5.noStroke();
        }
        p5.draw = () => {
            if (shouldDestroy) {
                p5.remove();
            } else {
                p5.background(255);
                for (let i = 0; i < window.innerWidth; i += 100) {
                    p5.render(i);
                }
                p5.textAlign(p5.CENTER, p5.CENTER);
                p5.fill(0);
                p5.textSize(100 * fontMultiplier);
                p5.text("OVER 500 POINTS!\nYOU'RE ON FIRE!", window.innerWidth/2, window.innerHeight/2);
            }
        }
        p5.render = (i) => {
            let j = 0;
            while(j < window.innerHeight) {
                p5.push();
                p5.translate(i, j);
                p5.rotate(p5.radians(p5.frameCount));
                p5.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                p5.triangle(0, 0, 50, 100, 100, 0);
                p5.pop();
                j += 100;
            }
        }
        p5.destroy = () => {
            console.log('we should destroy');
            shouldDestroy = true;
        }
    },
    reward6: (p5) => {
        let shouldDestroy = false;
        p5.setup = () => {
            p5.createCanvas(window.innerWidth, window.innerHeight);
            p5.background(255);
            p5.noStroke();
        }
        p5.draw = () => {
            if (shouldDestroy) {
                p5.remove();
            } else {
                p5.background(255);
                for (let i = 0; i < window.innerWidth; i += 100) {
                    p5.render(i);
                }
                p5.textAlign(p5.CENTER, p5.CENTER);
                p5.fill(0);
                p5.textSize(100 * fontMultiplier);
                p5.text("OVER 600 POINTS!\nGODDAMN!", window.innerWidth/2, window.innerHeight/2);
            }
        }
        p5.render = (i) => {
            let j = 0;
            while(j < window.innerHeight) {
                p5.push();
                p5.translate(i, j);
                p5.shearX(p5.radians(p5.frameCount));
                p5.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                p5.rect(20, 20, 60, 60);
                p5.pop();
                j += 100;
            }
        }
        p5.destroy = () => {
            console.log('we should destroy');
            shouldDestroy = true;
        }
    },
    reward7: (p5) => {
        let shouldDestroy = false;
        p5.setup = () => {
            p5.createCanvas(window.innerWidth, window.innerHeight);
            p5.background(255);
            p5.noStroke();
        }
        p5.draw = () => {
            if (shouldDestroy) {
                p5.remove();
            } else {
                p5.background(255);
                for (let i = 0; i < window.innerWidth; i += 100) {
                    p5.render(i);
                }
                p5.textAlign(p5.CENTER, p5.CENTER);
                p5.fill(0);
                p5.textSize(100 * fontMultiplier);
                p5.text("OVER 700 POINTS!\nWOW!", window.innerWidth/2, window.innerHeight/2);
            }
        }
        p5.render = (i) => {
            let j = 0;
            while(j < window.innerHeight) {
                p5.push();
                p5.translate(i, j);
                p5.shearY(p5.radians(p5.frameCount));
                p5.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                p5.ellipse(0, 0, 100, 100);
                p5.pop();
                j += 100;
            }
        }
        p5.destroy = () => {
            console.log('we should destroy');
            shouldDestroy = true;
        }
    },
    gameOver: (p5) => {
        let shouldDestroy = false;
        let points = this;
        p5.setup = () => {
            p5.createCanvas(window.innerWidth, window.innerHeight);
            p5.background(0);
            p5.noStroke();
        }
        p5.draw = () => {
            if (shouldDestroy) {
                p5.remove();
            } else {
                p5.background(0);
                p5.textAlign(p5.CENTER, p5.CENTER);
                p5.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                p5.textSize(120 * fontMultiplier);
                p5.text("GAME OVER!", window.innerWidth/2, window.innerHeight/2 - 100);
                p5.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                p5.textSize(60 * fontMultiplier);
                p5.text("(you are all caught up with email)", window.innerWidth/2, window.innerHeight/2);
                p5.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                p5.textSize(32 * fontMultiplier);
                p5.text(`score: ${document.getElementById('points').innerText}`, window.innerWidth/2, window.innerHeight/2 + 75);
                p5.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                p5.text("made by Sean Scanlan", window.innerWidth/2, window.innerHeight/2 + 125);
                p5.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                p5.text("refresh to try again", window.innerWidth/2, window.innerHeight/2 + 175);
            }
        }
        p5.destroy = () => {
            console.log('we should destroy');
            shouldDestroy = true;
        }
    }
}

module.exports = SketchFunctions;
