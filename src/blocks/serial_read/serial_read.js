'use strict';
/* global Blockly, profiles, JST, RoboBlocks */
/* jshint sub:true */

/**
 * serial_read code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.serial_read = function() {

	Blockly.Arduino.setups_['setup_serial_read'] = JST['serial_read_setups']({
		'bitrate': profiles.default.serial
	});
	var code = JST['serial_read']({});

	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * serial_read block definition
 * @type {Object}
 */
Blockly.Blocks.serial_read = {
	category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
	helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/serial_read',
	 /**
	  * serial_read initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
		this.appendDummyInput('')
			.appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_READ'));
		this.setOutput(true, String);
		this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_READ_TOOLTIP'));
	}
};
