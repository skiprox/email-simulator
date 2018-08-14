'use strict';

const Email = require('./email');
const Reply = require('./reply');
const EmailContent = require('./../helpers/email-content');

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
        this.trashBtnClick = this.trashBtnClick.bind(this);
        this.refreshBtnClick = this.refreshBtnClick.bind(this);
        this.replyBtnClick = this.replyBtnClick.bind(this);
        this.createOneEmail();
        this.addListeners();
        this.emailInterval = setInterval(() => {
            this.createOneEmail();
        }, 60 * 1000);
	}
    addListeners() {
        this.btnTrash.addEventListener('click', this.trashBtnClick);
        this.btnRefresh.addEventListener('click', this.refreshBtnClick);
        this.btnReply.addEventListener('click', this.replyBtnClick);
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
    }
    refreshBtnClick(e) {
        e.preventDefault();
        clearInterval(this.emailInterval);
        this.emailInterval = null;
        this.createOneEmail();
        this.emailInterval = setInterval(() => {
            this.createOneEmail();
        }, 60 * 1000);
        this.achievements.showAchievement("refresh");
        this.timesRefreshed++;
    }
    replyBtnClick(e) {
        e.preventDefault();
        // new Reply(this.achievements);
    }
    createOneEmail() {
        if (this.numberOfEmails < this.totalEmails) {
            this.emails[this.numberOfEmails] = new Email(this.numberOfEmails, this.achievements);
            this.numberOfEmails++;
        } else {
            this.numberOfEmails = 1;
            this.emails[this.numberOfEmails] = new Email(this.numberOfEmails, this.achievements);
            this.numberOfEmails++;
            // clearInterval(this.emailInterval);
        }
    }
    createAiResponse() {

    }
}

module.exports = EmailClient;
