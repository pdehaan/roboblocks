/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.logic_operation block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'logic_operation');

				assert.equal(Blockly.Arduino.workspaceToCode().replace(/&amp;/g, '&'), 'void setup()\n{\n\n}\n\n\nvoid loop()\n{\n   && ;\n\n}' );
			});
		});
	});

}).call( this );
