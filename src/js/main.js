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
        //new p5(SketchFunctions.test, 'p5-container');
        // let fullScreenGlitch = new p5(SketchFunctions.reward1, 'p5-fullpage');
        // document.getElementById('p5-fullpage').style.display = 'block';
        // setTimeout(() => {
        //     document.getElementById('p5-fullpage').style.display = 'none';
        //     fullScreenGlitch.destroy();
        // }, 5000);
        // document.getElementById('p5-fullpage').style.display = 'block';
        // let finalScreen = new p5(SketchFunctions.finalAiWins, 'p5-fullpage');
        //let anotherTest = new p5(SketchFunctions.anotherTest);
        //anotherTest.destroy();
		new EmailClient(this.achievements);
	}
}

new Main();
