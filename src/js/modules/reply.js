'use strict';

const Email = require('./email');
const AiResponses = require('./../helpers/ai-responses');

class Reply {
    constructor() {
        this.emailReply = document.getElementById('email-reply');
        this.sendBtn = document.getElementById('reply-send');
        this.closeBtn = document.getElementById('reply-close-btn');
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
        this.destroy();
    }
    onCloseBtnClick(e) {
        e.preventDefault();
        this.destroy();
    }
    destroy() {
        this.sendBtn.removeEventListener('click', this.onSendBtnClick);
        this.emailReply.style.display = 'none';
    }
}

module.exports = Reply;
