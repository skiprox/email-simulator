'use strict';

const p5 = require('p5');
const EmailContent = require('./../helpers/email-content');
const noScroll = require('no-scroll');
const SketchFunctions = require('./../helpers/sketches');
const Reply = require('./reply');

class Email {
    constructor(index, achievements) {
        this.achievements = achievements;
        this.emailIndex = index;
        this.line = null;
        this.actionIcon = null;
        this.emailOpenContainer = document.getElementById('email-open');
        this.emailCloseBtn = document.getElementById('close-btn');
        this.emailReplyBtn = document.getElementById('reply');
        this.emailOpenSubject = document.getElementById('open-subject');
        this.emailOpenFrom = document.getElementById('open-from');
        this.emailOpenBody = document.getElementById('open-body');
        this.emailFrom = EmailContent[index]["from"];
        this.emailSubject = EmailContent[index]["subject"];
        this.emailBody = EmailContent[index]["body"];
        this.emailType = EmailContent[index]["type"];
        this.onEmailClick = this.onEmailClick.bind(this);
        this.closeEmail = this.closeEmail.bind(this);
        this.onActionClick = this.onActionClick.bind(this);
        this.onReplyClick = this.onReplyClick.bind(this);
        this.createHTML(this.emailIndex);
        this.addListeners();
    }
    createHTML(index) {
        this.line = document.createElement('div');
        this.line.classList.add('email', 'unread', this.emailType);
        this.line.setAttribute('id', `email-${index}`);
        this.actionIcon = document.createElement('div');
        this.actionIcon.classList.add('action-icon');
        this.line.innerHTML = `<div class="from">${this.emailFrom}</div><div class="subject">${this.emailSubject}</div>`;
        this.line.prepend(this.actionIcon);
        document.getElementById('email-container').prepend(this.line);
    }
    addListeners() {
        this.line.addEventListener('click', this.onEmailClick);
        this.actionIcon.addEventListener('click', this.onActionClick);
    }
    onEmailClick(e) {
        e.preventDefault();
        this.line.classList.remove('unread');
        this.line.classList.add('read');
        this.openEmail();
    }
    onActionClick(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.line.classList.contains('active')) {
            this.line.classList.remove('active');
        } else {
            this.line.classList.add('active');
        }
    }
    openEmail() {
        this.achievements.showAchievement("open-email");
        noScroll.on();
        this.addContent();
        this.emailOpenContainer.style.display = 'block';
        this.emailCloseBtn.addEventListener('click', this.closeEmail);
        this.emailReplyBtn.addEventListener('click', this.onReplyClick);
        // check how many unread emails there are
        let emailContainer = document.getElementById('email-container');
        let unreadEmails = [].slice.call(emailContainer.querySelectorAll('.unread'));
        if (unreadEmails.length == 0) {
            this.achievements.showAchievement("up-to-date");
        }
        if (this.emailType == 'ai') {
            console.log('we got ai');
            let fullScreenGlitch = new p5(SketchFunctions.glitch1, 'p5-fullpage');
            document.getElementById('p5-fullpage').style.display = 'block';
            setTimeout(() => {
                document.getElementById('p5-fullpage').style.display = 'none';
                fullScreenGlitch.destroy();
            }, 500);
        }
    }
    closeEmail(e) {
        if (e) {
            e.preventDefault();
        }
        noScroll.off();
        this.emailOpenContainer.style.display = 'none';
        this.emailCloseBtn.removeEventListener('click', this.closeEmail);
    }
    onReplyClick(e) {
        e.preventDefault();
        this.closeEmail();
        new Reply(this.achievements, this.emailType);
    }
    addContent() {
        this.emailOpenSubject.innerHTML = this.emailSubject;
        this.emailOpenFrom.innerHTML = this.emailFrom;
        this.emailOpenBody.innerHTML = this.emailBody;
        this.currentOpenEmailType = this.emailType;
    }
    destroy() {
        console.log('we should destroy');
        this.line.removeEventListener('click', this.onEmailClick);
        this.line.parentElement.removeChild(this.line);
        this.emailIndex = null;
        this.line = null;
        this.emailOpenContainer = null;
        this.emailCloseBtn = null;
        this.emailOpenSubject = null;
        this.emailOpenFrom = null;
        this.emailOpenBody = null;
        this.emailFrom = null;
        this.emailSubject = null;
        this.emailBody = null;
    }
}

module.exports = Email;
