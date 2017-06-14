/***********************************************
 * Copyright (C) 2017 All rights reserved.
 ***********************************************
 * Filename:   index.js
 * Author:     index.js
 * Date:       2017-06-14
 * Description: 
 *   Demo tool for any npm test.
 * Modification: 
 * 
 ***********************************************/

function demo() {

	this.desc = "This is a demo tool for any npm test.";
}

demo.prototype = {

	name: function() {
		return "demo-tool";
	},

	job: function() {
		return "demonstrator";
	},

	company: function() {
		return "Alibaba";
	},

	__proto__: demo.prototype
}

module.exports = new demo();

