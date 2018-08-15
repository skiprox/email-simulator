'use strict';

const AchievementContent = require('./../helpers/achievement-content');
const p5 = require('p5');
const SketchFunctions = require('./../helpers/sketches');

class Achievements {
    constructor() {
        this.pointsCounter = document.getElementById('points');
        this.achievementPoints = 0;
        this.achievementSketchLevel = 0;
        this.achievement
    }
    showAchievement(achievementName) {
        if (AchievementContent[achievementName]) {
            this.achievementPoints = this.achievementPoints + AchievementContent[achievementName].points;
            AchievementContent[achievementName].hasRun = true;
            this.updatePoints();
            let div = document.createElement('div');
            div.classList.add('achievement');
            div.innerHTML = `<p>ACHIEVEMENT UNLOCKED:</p><p>${AchievementContent[achievementName].body}</p><p>Points: ${AchievementContent[achievementName].points >= 0 ? '+' + AchievementContent[achievementName].points : AchievementContent[achievementName].points}</p>`;
            div.style.display = 'none';
            document.body.append(div);
            TweenLite.set(div, {
                y: '200px',
            });
            div.style.display = 'block';
            TweenLite.to(div, 1, {
                y: '0px',
                onComplete: () => {
                    TweenLite.to(div, 1, {
                        y: '200px',
                        delay: 4,
                        onComplete: () => {
                            div.style.display = 'none';
                        }
                    });
                }
            });
            // Show the animations
            if (document.getElementById('p5-fullpage').style.display == 'none') {
                if (this.achievementSketchLevel == 0 && this.achievementPoints >= 100) {
                    this.achievementSketchLevel++;
                    let fullScreenGlitch = new p5(SketchFunctions.reward1, 'p5-fullpage');
                    document.getElementById('p5-fullpage').style.display = 'block';
                    setTimeout(() => {
                        document.getElementById('p5-fullpage').style.display = 'none';
                        fullScreenGlitch.destroy();
                    }, 5000);
                } else if (this.achievementSketchLevel == 1 && this.achievementPoints >= 200) {
                    this.achievementSketchLevel++;
                    let fullScreenGlitch = new p5(SketchFunctions.reward2, 'p5-fullpage');
                    document.getElementById('p5-fullpage').style.display = 'block';
                    setTimeout(() => {
                        document.getElementById('p5-fullpage').style.display = 'none';
                        fullScreenGlitch.destroy();
                    }, 5000);
                } else if (this.achievementSketchLevel == 2 && this.achievementPoints >= 300) {
                    this.achievementSketchLevel++;
                    let fullScreenGlitch = new p5(SketchFunctions.reward3, 'p5-fullpage');
                    document.getElementById('p5-fullpage').style.display = 'block';
                    setTimeout(() => {
                        document.getElementById('p5-fullpage').style.display = 'none';
                        fullScreenGlitch.destroy();
                    }, 5000);
                } else if (this.achievementSketchLevel == 3 && this.achievementPoints >= 400) {
                    this.achievementSketchLevel++;
                    let fullScreenGlitch = new p5(SketchFunctions.reward4, 'p5-fullpage');
                    document.getElementById('p5-fullpage').style.display = 'block';
                    setTimeout(() => {
                        document.getElementById('p5-fullpage').style.display = 'none';
                        fullScreenGlitch.destroy();
                    }, 5000);
                } else if (this.achievementSketchLevel == 4 && this.achievementPoints >= 500) {
                    this.achievementSketchLevel++;
                    let fullScreenGlitch = new p5(SketchFunctions.reward5, 'p5-fullpage');
                    document.getElementById('p5-fullpage').style.display = 'block';
                    setTimeout(() => {
                        document.getElementById('p5-fullpage').style.display = 'none';
                        fullScreenGlitch.destroy();
                    }, 5000);
                } else if (this.achievementSketchLevel == 5 && this.achievementPoints >= 600) {
                    this.achievementSketchLevel++;
                    let fullScreenGlitch = new p5(SketchFunctions.reward6, 'p5-fullpage');
                    document.getElementById('p5-fullpage').style.display = 'block';
                    setTimeout(() => {
                        document.getElementById('p5-fullpage').style.display = 'none';
                        fullScreenGlitch.destroy();
                    }, 5000);
                } else if (this.achievementSketchLevel == 6 && this.achievementPoints >= 700) {
                    this.achievementSketchLevel++;
                    let fullScreenGlitch = new p5(SketchFunctions.reward7, 'p5-fullpage');
                    document.getElementById('p5-fullpage').style.display = 'block';
                    setTimeout(() => {
                        document.getElementById('p5-fullpage').style.display = 'none';
                        fullScreenGlitch.destroy();
                    }, 5000);
                }
            }
        }
    }
    updatePoints() {
        this.pointsCounter.innerText = `Points: ${this.achievementPoints}`;
    }
}

module.exports = Achievements;
