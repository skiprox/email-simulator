'use strict';

const Email = require('./email');
const Reply = require('./reply');
const EmailContent = require('./../helpers/email-content');
const p5 = require('p5');
const SketchFunctions = require('./../helpers/sketches');
const intervalLength = 10 * 1000;

class EmailClient {
	constructor(achievements) {
        this.achievements = achievements;
        this.client = document.getElementById('email-container');
		this.emails = [];
        this.numberOfEmails = 0;
        this.totalEmails = EmailContent.length;
        this.timesRefreshed = 0;
        this.timesDeleted = 0;
        this.emailsDeleted = 0;
        this.btnTrash = document.getElementById('btn-trash');
        this.btnRefresh = document.getElementById('btn-refresh');
        this.btnReply = document.getElementById('reply');
        this.btnClose = document.getElementById('close-btn');
        this.btnReplyClose = document.getElementById('reply-close-btn');
        this.btnReplySend = document.getElementById('reply-send');
        this.trashBtnClick = this.trashBtnClick.bind(this);
        this.refreshBtnClick = this.refreshBtnClick.bind(this);
        this.replyBtnClick = this.replyBtnClick.bind(this);
        this.checkGameEnd = this.checkGameEnd.bind(this);
        this.createOneEmail();
        this.addListeners();
        this.emailInterval = setInterval(() => {
            this.createOneEmail();
        }, intervalLength);
	}
    addListeners() {
        this.btnTrash.addEventListener('click', this.trashBtnClick);
        this.btnRefresh.addEventListener('click', this.refreshBtnClick);
        this.btnReply.addEventListener('click', this.replyBtnClick);
        this.btnClose.addEventListener('click', this.checkGameEnd);
        this.btnReplyClose.addEventListener('click', this.checkGameEnd);
        this.btnReplySend.addEventListener('click', this.checkGameEnd);
    }
    trashBtnClick(e) {
        e.preventDefault();
        let toDelete = [].slice.call(this.client.querySelectorAll('.active'));
        let len = toDelete.length;
        this.emailsDeleted = this.emailsDeleted + len;
        for (let i = 0; i < len; i++) {
            // TODO: call destroy instead of delete element,
            // we need to get the ID of the element and use that to find it
            // in this.emails array, then call destroy on it
            //this.emails[i].destroy();
            toDelete[i].parentElement.removeChild(toDelete[i]);
        }
        if (len == 1) {
            this.achievements.showAchievement("delete-one");
        } else if (len >= 2) {
            this.achievements.showAchievement("delete-multiple");
        }
        this.timesDeleted++;
        this.checkGameEnd();
    }
    refreshBtnClick(e) {
        e.preventDefault();
        clearInterval(this.emailInterval);
        this.emailInterval = null;
        this.createOneEmail();
        this.emailInterval = setInterval(() => {
            this.createOneEmail();
        }, intervalLength);
        this.achievements.showAchievement("refresh");
        this.timesRefreshed++;
    }
    replyBtnClick(e) {
        e.preventDefault();
    }
    createOneEmail() {
        if (this.numberOfEmails < this.totalEmails) {
            this.emails[this.numberOfEmails] = new Email(this.numberOfEmails, this.achievements);
            this.numberOfEmails++;
        } else {
            clearInterval(this.emailInterval);
        }
        if (this.numberOfEmails == this.totalEmails) {
            if (this.btnRefresh !== null) {
                this.btnRefresh.parentElement.removeChild(this.btnRefresh);
                this.btnRefresh = null;
            }
            clearInterval(this.emailInterval);
        }
    }
    checkGameEnd() {
        let remainingEmails = [].slice.call(this.client.querySelectorAll('.email'));
        let readEmails = [].slice.call(this.client.querySelectorAll('.read'));
        if (remainingEmails.length == 0 &&
            this.numberOfEmails == this.totalEmails) {
            this.showGameEndScreen();
        } else if (remainingEmails.length == readEmails.length &&
            document.getElementById('btn-refresh') == null) {
            this.showGameEndScreen();
        }
    }
    showGameEndScreen() {
        let fullScreenGlitch = new p5(SketchFunctions.gameOver, 'p5-fullpage');
        document.getElementById('p5-fullpage').style.display = 'block';
    }
}

module.exports = EmailClient;
