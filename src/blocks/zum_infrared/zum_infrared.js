'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * zum_infrared code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_infrared = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC)||'';
	Blockly.Arduino.setups_['setup_infrared_' + dropdown_pin] = JST['zum_infrared_setups']({
		'dropdown_pin': dropdown_pin
	});

	var code = JST['zum_infrared']({
		'dropdown_pin': dropdown_pin
	});

//	code=code.substring(0,code.length-1);
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * zum_infrared block definition
 * @type {Object}
 */
Blockly.Blocks.zum_infrared = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['bq', 'sensor infrarrojo'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/zum_infrared',
    /**
     * zum_infrared initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_INFRARED'))
            .appendField(new Blockly.FieldImage('img/blocks/zum07.png', 208 * options.zoom, 126 * options.zoom))
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_INFRARED_PIN'));
        this.setOutput(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_INFRARED_TOOLTIP'));
    }
};
