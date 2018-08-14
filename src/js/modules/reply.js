'use strict';

const Email = require('./email');

class Reply {
    constructor(achievements, emailType) {
        this.achievements = achievements;
        this.emailType = emailType;
        this.emailReply = document.getElementById('email-reply');
        this.sendBtn = document.getElementById('reply-send');
        this.closeBtn = document.getElementById('reply-close-btn');
        this.replySubject = document.getElementById('reply-subject');
        this.replyBody = document.getElementById('reply-body');
        this.emailReply.style.display = 'block';
        this.onSendBtnClick = this.onSendBtnClick.bind(this);
        this.onCloseBtnClick = this.onCloseBtnClick.bind(this);
        this.addListeners();
    }
    addListeners() {
        this.sendBtn.addEventListener('click', this.onSendBtnClick);
        this.closeBtn.addEventListener('click', this.onCloseBtnClick);
    }
    onSendBtnClick(e) {
        e.preventDefault();
        switch(this.emailType) {
            case 'spam':
                this.achievements.showAchievement("reply-to-spam");
                break;
            case 'personal':
                this.achievements.showAchievement("reply-to-personal");
                break;
            default:
                this.achievements.showAchievement("reply-default");
        }
        this.destroy();
    }
    onCloseBtnClick(e) {
        e.preventDefault();
        this.destroy();
    }
    destroy() {
        this.sendBtn.removeEventListener('click', this.onSendBtnClick);
        this.replySubject.value = '';
        this.replyBody.value = '';
        this.emailReply.style.display = 'none';
    }
}

module.exports = Reply;
