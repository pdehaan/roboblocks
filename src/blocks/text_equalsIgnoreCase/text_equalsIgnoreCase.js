'use strict';
/* global Blockly, JST, RoboBlocks */

/**
  * text_equalsIgnoreCase code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.text_equalsIgnoreCase = function() {
    var string1 = Blockly.Arduino.valueToCode(this, 'STRING1', Blockly.Arduino.ORDER_NONE);
    string1=string1.replace(/&quot;/g,'"');
    var string2 = Blockly.Arduino.valueToCode(this, 'STRING2', Blockly.Arduino.ORDER_NONE);
    string2=string2.replace(/&quot;/g,'"');

    var code = JST['text_equalsIgnoreCase']({
        'string1': string1,
        'string2': string2
    });

    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Blocks.text_equalsIgnoreCase = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/text_equalsIgnoreCase',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendValueInput('STRING1')
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_IS'));

        this.appendValueInput('STRING2')
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_EQUAL'))
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_QUESTION'));

        this.setInputsInline(true);

        this.setOutput(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_TOOLTIP'));
    }
};