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
// p5
const p5 = require('p5');
// Custom modules
const EmailClient = require('./modules/email-client');
const Achievements = require('./modules/achievements');
const SketchFunctions = require('./helpers/sketches');

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
        let startScreen = new p5(SketchFunctions.startScreen, 'p5-fullpage');
        document.getElementById('p5-fullpage').style.display = 'block';
		new EmailClient(this.achievements);
	}
}

new Main();
