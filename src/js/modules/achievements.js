'use strict';

const AchievementContent = require('./../helpers/achievement-content');

class Achievements {
    constructor() {
        this.achievementPoints = 0;
        this.achievement
    }
    showAchievement(achievementName) {
        if (AchievementContent[achievementName] && !AchievementContent[achievementName].hasRun) {
            this.achievementPoints = this.achievementPoints + AchievementContent[achievementName].points;
            console.log(this.achievementPoints);
            AchievementContent[achievementName].hasRun = true;
            let div = document.createElement('div');
            div.classList.add('achievement');
            div.innerHTML = `<p>ACHIEVEMENT UNLOCKED:</p><p>${AchievementContent[achievementName].body}</p><p>Points: ${AchievementContent[achievementName].points <= 0 ? '-' + AchievementContent[achievementName].points : AchievementContent[achievementName].points}</p>`;
            div.style.display = 'none';
            document.body.append(div);
            TweenLite.set(div, {
                y: '-200px',
            });
            div.style.display = 'block';
            TweenLite.to(div, 1, {
                y: '0px',
                onComplete: () => {
                    TweenLite.to(div, 1, {
                        y: '-200px',
                        delay: 4,
                        onComplete: () => {
                            div.style.display = 'none';
                        }
                    });
                }
            });
        }
    }
}

module.exports = Achievements;
