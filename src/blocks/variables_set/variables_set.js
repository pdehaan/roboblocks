
'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

  /**
  * variables_set code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.variables_set = function() {
  // Variable setter.
    var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT)||'';
    var varName = this.getFieldValue('VAR')||'';

    var code = JST['variables_set']({
        'varName' : varName,
        'varValue': varValue
    });


    return code;
};

Blockly.Blocks.variables_set = {
  // Variable setter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'),  // Variables are handled specially.
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/variables_set',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendValueInput('VALUE')
            .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET'))
            .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
            .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET_AS'))
            .setAlign(Blockly.ALIGN_RIGHT);

        this.setInputsInline(false);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_SET_TOOLTIP'));
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
                    this.removeInput('VALUE');

                    this.appendValueInput('VALUE')
                        .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET'))
                        .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                        .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET_AS'))
                        .setAlign(Blockly.ALIGN_RIGHT);

                    this.setInputsInline(false);

                }catch(e){}
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