'use strict';

/***********************
*
* REQUIRE ALL MODULES
*
************************/

// Greensock
require('tween-lite');
require('ease-pack');
require('css-plugin');
require('scroll-to-plugin');
require('timeline-lite');
// Custom modules
const EmailClient = require('./modules/email-client');
const Achievements = require('./modules/achievements');

/***********************
*
* INITIATE ALL MODULES
*
************************/
class Main {
	constructor() {
        this.achievements = new Achievements();
		this.initializeModules();
	}
	initializeModules() {
		new EmailClient(this.achievements);
	}
}

new Main();
