'use strict';
/* global Blockly, RoboBlocks */
/* jshint sub:true */

  /**
  * array_get code generation
  * @return {String} Code generated with block parameters
  */

Blockly.Arduino.array_get = function() {
    // Numeric value.
    var code = '{';
    code+=window.parseFloat(this.getFieldValue('NUM0'));
    code+=',';
    code+=window.parseFloat(this.getFieldValue('NUM1'));
    code+=',';
    code+=window.parseFloat(this.getFieldValue('NUM2'));
    code+='}';

    // -4.abs() returns -4 in Dart due to strange order of operation choices.
    // -4 is actually an operator and a number.  Reflect this in the order.
    // var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.array_get = {
  // Numeric value.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'),
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/array_get',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendDummyInput('DUMMY')
            .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GET'))
            .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

        this.appendDummyInput('DUMMY2')
            .appendField(RoboBlocks.locales.getKey('LANG_ARRAY_GET_BRACKET1'))
            .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.array_get.validator), 'INDEX')
            .appendField(RoboBlocks.locales.getKey('LANG_ARRAY_GET_BRACKET2'));

        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ARRAY_GET_TOOLTIP'));
    },
    getVariables: function(){
        var variables= Blockly.Variables.allVariables();
        var dropdown=[];
        if (variables.length>0){
            for (var i in variables){
                dropdown.push([variables[i],variables[i]]);
            }
        }
        else{
            dropdown.push(['', '']);
        }
        return dropdown;
    },
    onchange: function(){
        if (!this.last_variables){
            this.last_variables=Blockly.Variables.allVariables();
        }
        var variables=Blockly.Variables.allVariables();

        for (var i in variables){
            if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
                try{
                    this.removeInput('DUMMY');
                    this.removeInput('DUMMY2');
                }catch(e){}

                this.appendDummyInput('DUMMY')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GET'))
                    .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                this.appendDummyInput('DUMMY2')
                    .appendField(RoboBlocks.locales.getKey('LANG_ARRAY_GET_BRACKET1'))
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.array_get.validator), 'INDEX')
                    .appendField(RoboBlocks.locales.getKey('LANG_ARRAY_GET_BRACKET2'));

                this.last_variables=Blockly.Variables.allVariables();
            }
        }
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};


Blockly.Blocks.array_get.validator = function(text) {
  // Ensure that only a number may be entered.
  // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
    var n = window.parseFloat(text || 0);
    return window.isNaN(n) ? null : String(n);
};