'use strict';

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
    removeListeners() {
        this.sendBtn.removeEventListener('click', this.onSendBtnClick);
        this.closeBtn.removeEventListener('click', this.onCloseBtnClick);
    }
    onSendBtnClick(e) {
        console.log("we send");
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
                break;
        }
        this.destroy();
    }
    onCloseBtnClick(e) {
        e.preventDefault();
        this.destroy();
    }
    destroy() {
        console.log('are we getting to destroy??');
        this.removeListeners();
        this.achievements = null;
        this.emailType = null;
        this.replySubject.value = '';
        this.replyBody.value = '';
        this.emailReply.style.display = 'none';
    }
}

module.exports = Reply;
