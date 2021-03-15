
var mytoolbox = `
<xml id="toolbox" style="display: none">
    <toolboxsearch name="search">
	</toolboxsearch>
	<category name="All" colour="120" hidden="true" expanded="false">		
	</category>
 <category name="IVR" colour="210" css-icon="customIcon_cat_ivr" css-row="cat_row" css-label="cat_label">	 
 	<block type="answer_call_flow"></block>  	
	<block type="callback_dialer"></block>  
	<block type="context_flow"></block>  				
	<block type="extension_flow"></block> 	
	<block type="handler_flow"></block>  
	<block type="hangup_call_flow"></block>  
	<block type="input_flow"></block> 
	<block type="menu_flow"></block>  	
	<block type="menu_flow2"></block>  	
	<block type="playback_flow"></block>  				
	<block type="say_number"></block>  	
	<block type="say_track_flow"></block>  	
	<block type="voicemail_flow"></block>  
	<block type="waitexten_flow"></block>  
	<block type="wait_call_flow"></block>  				
	<block type="log_flow"></block>  					
</category>		
<category name="Flow Control" colour="120" css-icon="customIcon_cat_flow" css-row="cat_row" css-label="cat_label" expanded="false">	  
	<block type="case_handler_flow"></block> 

	<block type="start_flow"></block>  		   
	<block type="stop_flow"></block>  
	<block type="loop_statement"></block>  
	<block type="label_flow"></block>  
	<block type="goto_flow"></block>  

	<block type="return_flow"></block>  
	<block type="if_flow"></block> 
	<block type="ifelse_flow"></block> 
	<block type="ifelseifelse_flow"></block> 
	<block type="ifelseif2else_flow"></block> 
	<block type="ifelseif3else_flow"></block> 
	<block type="test_flow"></block> 
	<block type="switch_flow1"></block> 
	<block type="switch_flow2"></block> 
	<block type="switch_flow3"></block> 
	<block type="switch_flow5"></block> 
	<block type="gosub_flow"></block> 
	<block type="macro_flow"></block> 	
	<block type="agi_flow"></block> 	
	<block type="controls_whileUntil"></block>  
	<block type="controls_for">
		<value name="FROM">
		  <shadow type="math_number">
			<field name="NUM">1</field>
		  </shadow>
		</value>
		<value name="TO">
		  <shadow type="math_number">
			<field name="NUM">10</field>
		  </shadow>
		</value>
		<value name="BY">
		  <shadow type="math_number">
			<field name="NUM">1</field>
		  </shadow>
		</value>
	</block>
	<block type="logic_compare"></block>
	<block type="logic_operation"></block>
	<block type="logic_negate"></block>
	<block type="logic_boolean"></block>
	<block type="logic_null"></block>
</category>	


<category name="Math" colour="230" css-icon="customIcon_cat_math" css-row="cat_row" css-label="cat_label" expanded="false">	 
	<block type="calculation_flow"></block>  
	<block type="set_flow"></block>  
</category>		


<category name="Queue" colour="20" css-icon="customIcon_cat_queue" css-row="cat_row" css-label="cat_label" expanded="false">
	<block type="musiconhold"></block>  			
	<block type="queue_flow"></block> 	
	<block type="sayqueueposition_flow"></block> 
	<block type="say_hold_time_flow"></block>  	
</category>	

<category name="Conference" colour="330" css-icon="customIcon_cat_conference" css-row="cat_row" css-label="cat_label" expanded="false">	
	<block type="confbridge_flow"></block> 
</category>	

<category name="Function" colour="290" css-icon="customIcon_cat_function" css-row="cat_row" css-label="cat_label" expanded="false">	
	<block type="function_addhanguphandler_flow"></block>				
	<block type="function_askforpin_flow"></block>	

	<block type="function_busyretry_flow"></block>		
	
	<block type="function_callerid_block_flow"></block> 			
	<block type="function_callqueue_agentloginlogout_flow"></block> 	
	<block type="function_callqueue_agentlogoutall_flow"></block> 	
	<block type="function_callqueue_join_flow"></block> 
	<block type="function_callreturn_flow"></block> 
	<block type="function_changemeetmeadminpin_flow"></block> 	
	<block type="function_changemeetmepin_flow"></block> 
	<block type="function_checkothervoicemail_flow"></block> 
	<block type="function_checkownvoicemail_flow"></block> 		
	<block type="function_callqueue_agentsetstatus_flow"></block>	
	<block type="function_changemeetmeadminannouncement_flow"></block>	
	<block type="function_changepersonalmeetmepin_flow"></block>	
	<block type="function_checkchannellimit_flow"></block>					
	<block type="function_callqueue_handlecallqueuefallout_flow"></block>	

	<block type="function_daynightmodetoggle_flow"></block>					
	<block type="function_dialexten_flow"></block>					
	<block type="function_dialhuntgroup_flow"></block> 	
	<block type="function_dialhuntgroupstack_flow"></block>				
	<block type="function_dialin_flow"></block>					
	<block type="function_dialout_flow"></block>	
	<block type="function_dialphonemaphelper_flow"></block>	
	<block type="function_dialphonemap_flow"></block>
	<block type="function_disableallcallforwarding_flow"></block>	
	<block type="function_disablebusycallforwarding_flow"></block>					
	<block type="function_disablecallforwarding_flow"></block>					
	<block type="function_disableremotecallforwarding_flow"></block>
	<block type="function_disableselectcallforwarding_flow"></block>
	<block type="function_docalleridremap_flow"></block>
	<block type="function_donotdisturbtoggle_flow"></block>
	<block type="function_dotrackoverridetoggle_flow"></block>	

	<block type="function_echoTest_flow"></block> 
	<block type="function_enableallcallforwarding_flow"></block> 
	<block type="function_enablebusycallforwarding_flow"></block> 	
	<block type="function_enablecallforwarding_flow"></block>
	<block type="function_enableremotecallforwarding_flow"></block>					
	<block type="function_enableselectcallforwarding_flow"></block> 

	<block type="function_generic_flow"></block>	
	
	<block type="function_handlesla_flow"></block>	
	<block type="function_handlesla_channelbridge_flow"></block>	
	<block type="function_handleStoreCalls_flow"></block> 	
	<block type="function_hotdesking_flow"></block> 					
	<block type="function_huntgroupstack_loginlogout_flow"></block>

	<block type="function_invalidhandler_flow"></block>

	<block type="function_nosuchnumber_flow"></block>

	<block type="function_pagephones_flow"></block>	
	<block type="function_park_timeout_flow"></block>	
	<block type="function_parkcaller_flow"></block> 	
	<block type="function_parkorparkpickup_flow"></block>
	<block type="function_parkpickup_flow"></block>	
	<block type="function_playannouncementifneeded_flow"></block>
	<block type="function_playoverrideifneeded_flow"></block>
	<block type="function_playtrackifneeded_flow"></block>

	<block type="function_queue_callmonitor_flow"></block>	

	<block type="function_recordingsmanager_flow"></block>
	<block type="function_runagi_flow"></block>
	
	<block type="function_setchannelgroup_flow"></block>
	<block type="function_setDayOfWeekCoverage_flow"></block> 	
	<block type="function_setHolidayMusicOnHoldIfNeeded_flow"></block> 	
	<block type="function_setphoneautoanswer_flow"></block>												
	<block type="function_setuptrack_flow"></block>			
	<block type="function_setuptrackoverride_flow"></block>
	<block type="function_setuptrackoverridetoggle_flow"></block>
	<block type="function_simplemeetme_flow"></block>	
	<block type="function_simplemeetmemain_flow"></block>	
	<block type="function_sla_dial_from_flow"></block>	
	<block type="function_sla_dialfromsla_flow"></block>
	<block type="function_stealholdingcall_flow"></block>	

	<block type="function_toggleoption_flow"></block>	
	<block type="function_tooperatordepricated_flow"></block>
	<block type="function_tovoicemail_flow"></block>			

	<block type="function_updatevoicemailboxcount_flow"></block>	
	<block type="function_vmauthenticate_flow"></block>		
</category>	
</xml>
`;
 


var mytoolbox2 = `
<xml id="toolbox" style="display: none">
	<category name="All" colour="120" hidden="false">
	</category>
 <category name="IVR" colour="210" css-icon="customIcon_cat_ivr" css-row="cat_row" css-label="cat_label">	 
 	<block type="answer_call_flow"></block>  	
	<block type="callback_dialer"></block>  
	<block type="context_flow"></block>  				
	<block type="extension_flow"></block> 	
	<block type="handler_flow"></block>  
	<block type="hangup_call_flow"></block>  
	<block type="input_flow"></block> 
	<block type="menu_flow"></block>  	
	<block type="menu_flow2"></block>  	
	<block type="playback_flow"></block>  				
	<block type="say_number"></block>  	
	<block type="say_track_flow"></block>  	
	<block type="voicemail_flow"></block>  
	<block type="waitexten_flow"></block>  
	<block type="wait_call_flow"></block>  				
	<block type="log_flow"></block>  					
</category>		
<category name="Flow Control" colour="120" css-icon="customIcon_cat_flow" css-row="cat_row" css-label="cat_label">	  
	<block type="case_handler_flow"></block> 

	<block type="start_flow"></block>  		   
	<block type="stop_flow"></block>  
	<block type="loop_statement"></block>  
	<block type="label_flow"></block>  
	<block type="goto_flow"></block>  

	<block type="return_flow"></block>  
	<block type="if_flow"></block> 
	<block type="ifelse_flow"></block> 
	<block type="ifelseifelse_flow"></block> 
	<block type="ifelseif2else_flow"></block> 
	<block type="ifelseif3else_flow"></block> 
	<block type="test_flow"></block> 
	<block type="switch_flow1"></block> 
	<block type="switch_flow2"></block> 
	<block type="switch_flow3"></block> 
	<block type="switch_flow5"></block> 
	<block type="gosub_flow"></block> 
	<block type="macro_flow"></block> 	
	<block type="agi_flow"></block> 	
	<block type="controls_whileUntil"></block>  
	<block type="controls_for">
		<value name="FROM">
		  <shadow type="math_number">
			<field name="NUM">1</field>
		  </shadow>
		</value>
		<value name="TO">
		  <shadow type="math_number">
			<field name="NUM">10</field>
		  </shadow>
		</value>
		<value name="BY">
		  <shadow type="math_number">
			<field name="NUM">1</field>
		  </shadow>
		</value>
	</block>
	<block type="logic_compare"></block>
	<block type="logic_operation"></block>
	<block type="logic_negate"></block>
	<block type="logic_boolean"></block>
	<block type="logic_null"></block>
</category>	


<category name="Math" colour="230" css-icon="customIcon_cat_math" css-row="cat_row" css-label="cat_label">	 
	<block type="calculation_flow"></block>  
	<block type="set_flow"></block>  
</category>		


<category name="Queue" colour="20" css-icon="customIcon_cat_queue" css-row="cat_row" css-label="cat_label">
	<block type="musiconhold"></block>  			
	<block type="queue_flow"></block> 	
	<block type="sayqueueposition_flow"></block> 
	<block type="say_hold_time_flow"></block>  	
</category>	

<category name="Conference" colour="330" css-icon="customIcon_cat_conference" css-row="cat_row" css-label="cat_label">	
	<block type="confbridge_flow"></block> 
</category>	

<category name="Function" colour="290" css-icon="customIcon_cat_function" css-row="cat_row" css-label="cat_label">	
	<block type="function_addhanguphandler_flow"></block>				
	<block type="function_askforpin_flow"></block>	

	<block type="function_busyretry_flow"></block>		
	
	<block type="function_callerid_block_flow"></block> 			
	<block type="function_callqueue_agentloginlogout_flow"></block> 	
	<block type="function_callqueue_agentlogoutall_flow"></block> 	
	<block type="function_callqueue_join_flow"></block> 
	<block type="function_callreturn_flow"></block> 
	<block type="function_changemeetmeadminpin_flow"></block> 	
	<block type="function_changemeetmepin_flow"></block> 
	<block type="function_checkothervoicemail_flow"></block> 
	<block type="function_checkownvoicemail_flow"></block> 		
	<block type="function_callqueue_agentsetstatus_flow"></block>	
	<block type="function_changemeetmeadminannouncement_flow"></block>	
	<block type="function_changepersonalmeetmepin_flow"></block>	
	<block type="function_checkchannellimit_flow"></block>					
	<block type="function_callqueue_handlecallqueuefallout_flow"></block>	

	<block type="function_daynightmodetoggle_flow"></block>					
	<block type="function_dialexten_flow"></block>					
	<block type="function_dialhuntgroup_flow"></block> 	
	<block type="function_dialhuntgroupstack_flow"></block>				
	<block type="function_dialin_flow"></block>					
	<block type="function_dialout_flow"></block>	
	<block type="function_dialphonemaphelper_flow"></block>	
	<block type="function_dialphonemap_flow"></block>
	<block type="function_disableallcallforwarding_flow"></block>	
	<block type="function_disablebusycallforwarding_flow"></block>					
	<block type="function_disablecallforwarding_flow"></block>					
	<block type="function_disableremotecallforwarding_flow"></block>
	<block type="function_disableselectcallforwarding_flow"></block>
	<block type="function_docalleridremap_flow"></block>
	<block type="function_donotdisturbtoggle_flow"></block>
	<block type="function_dotrackoverridetoggle_flow"></block>	

	<block type="function_echoTest_flow"></block> 
	<block type="function_enableallcallforwarding_flow"></block> 
	<block type="function_enablebusycallforwarding_flow"></block> 	
	<block type="function_enablecallforwarding_flow"></block>
	<block type="function_enableremotecallforwarding_flow"></block>					
	<block type="function_enableselectcallforwarding_flow"></block> 

	<block type="function_generic_flow"></block>	
	
	<block type="function_handlesla_flow"></block>	
	<block type="function_handlesla_channelbridge_flow"></block>	
	<block type="function_handleStoreCalls_flow"></block> 	
	<block type="function_hotdesking_flow"></block> 					
	<block type="function_huntgroupstack_loginlogout_flow"></block>

	<block type="function_invalidhandler_flow"></block>

	<block type="function_nosuchnumber_flow"></block>

	<block type="function_pagephones_flow"></block>	
	<block type="function_park_timeout_flow"></block>	
	<block type="function_parkcaller_flow"></block> 	
	<block type="function_parkorparkpickup_flow"></block>
	<block type="function_parkpickup_flow"></block>	
	<block type="function_playannouncementifneeded_flow"></block>
	<block type="function_playoverrideifneeded_flow"></block>
	<block type="function_playtrackifneeded_flow"></block>

	<block type="function_queue_callmonitor_flow"></block>	

	<block type="function_recordingsmanager_flow"></block>
	<block type="function_runagi_flow"></block>
	
	<block type="function_setchannelgroup_flow"></block>
	<block type="function_setDayOfWeekCoverage_flow"></block> 	
	<block type="function_setHolidayMusicOnHoldIfNeeded_flow"></block> 	
	<block type="function_setphoneautoanswer_flow"></block>												
	<block type="function_setuptrack_flow"></block>			
	<block type="function_setuptrackoverride_flow"></block>
	<block type="function_setuptrackoverridetoggle_flow"></block>
	<block type="function_simplemeetme_flow"></block>	
	<block type="function_simplemeetmemain_flow"></block>	
	<block type="function_sla_dial_from_flow"></block>	
	<block type="function_sla_dialfromsla_flow"></block>
	<block type="function_stealholdingcall_flow"></block>	

	<block type="function_toggleoption_flow"></block>	
	<block type="function_tooperatordepricated_flow"></block>
	<block type="function_tovoicemail_flow"></block>			

	<block type="function_updatevoicemailboxcount_flow"></block>	
	<block type="function_vmauthenticate_flow"></block>		
</category>	
</xml>
`;
 
 var mytoolbox3 = `
<xml id="toolbox" style="display: none">
	<category name="All" colour="120" hidden="false" expanded="true">
	</category>
</xml>
`;

Blockly.defineBlocksWithJsonArray([
{
  "type": "loop_statement",
  "message0": "Loop %1 %2 %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/loop514x514.png",
      "width": 35,
      "height": 35,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
}
  ]);

Blockly.JavaScript['loop_statement'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "start_flow",
  "message0": "Start %1 %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/Start227x227.png",
      "width": 35,
      "height": 35,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    }
  ],
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
  ]);

  Blockly.JavaScript['start_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "stop_flow",
  "message0": "Stop %1 %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/Stop330x330.png",
      "width": 35,
      "height": 35,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
  ]);

Blockly.JavaScript['stop_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "callback_dialer",
  "message0": "Call Back %1 %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/Callback200x200.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20,
  "tooltip": "",
  "helpUrl": ""
}
  ]);

Blockly.JavaScript['callback_dialer'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "say_number",
  "message0": "Say Number %1 %2 Number %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/saynumber.png",
      "width": 65,
      "height": 65,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "number",
      "value": 0,
      "min": 0,
      "max": 99999
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
}
  ]);
  
Blockly.JavaScript['say_number'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 


Blockly.defineBlocksWithJsonArray([
{
  "type": "musiconhold",
  "message0": "Music On Hold %1 %2 Duration %3 %4 MusicClass %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/musiconhold202x202.png",
      "width": 35,
      "height": 35,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "duration",
      "value": 0
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "option_moh",
      "options": [
        [
          "         ",
          "OPTIONNAME"
        ]		
      ]
    }
  ],
  "extensions": ["dynamic_menu"],    
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "",
  "helpUrl": ""
}
  ]);

  
  
Blockly.JavaScript['musiconhold'] = function(block) {
	var number_duration = block.getFieldValue('duration');
	var text_musicclass = block.getFieldValue('option_moh');
	// TODO: Assemble JavaScript into code variable.
	var code = '...;\n';
	return code;
};

Blockly.Extensions.register('dynamic_menu',
  function() {
  
	var mymoh = load_list_moh();
	var mio  = this;
    var mio2 = mio.inputList[2].fieldRow[1].menuGenerator_;

	var i = 0;	
	for (myvalue of mymoh){
		mytemp = [ myvalue , "OPTIONAME" + i];
		mio2[i] = mytemp; 
		i++;
	 }
  });
  
  

Blockly.defineBlocksWithJsonArray([
{
  "type": "sayqueueposition_flow",
  "message0": "Say Queue Position %1 %2 Only is Less than %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/sayqueueposition.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "queueposition",
      "value": 0,
      "min": 0,
      "max": 999
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
}
  ]);
  
Blockly.JavaScript['sayqueueposition_flow'] = function(block) {
  var number_queueposition = block.getFieldValue('queueposition');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
}; 
 

Blockly.defineBlocksWithJsonArray([
{
  "type": "say_hold_time_flow",
  "message0": "Say Hold Time %1 %2 Only If lLess Than %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/sayholdtime.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "holdtime",
      "value": 0,
      "min": 0,
      "max": 999
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
}
  ]);


Blockly.JavaScript['say_hold_time_flow'] = function(block) {
  var number_holdtime = block.getFieldValue('holdtime');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

 
Blockly.defineBlocksWithJsonArray([
{
  "type": "say_track_flow",
  "message0": "Say Track %1 %2 Track Name %3 %4 Wait time %5 %6 Play Once %7 %8 Play Once Token %9",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/saytrack.png",
      "width": 65,
      "height": 65,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "dropdown_track",
      "options": [
        [
          "             ",
          "track"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "WaitTime",
      "value": 0
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "PlayOnce",
      "checked": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "PlaceOnceToken",  
      "text": "           "
    }
  ],
  "extensions": ["dynamic_menu_track"],     
  "previousStatement": null,
  "nextStatement": null,
  "colour": 105,
  "tooltip": "",
  "helpUrl": ""
}
  ]);

Blockly.JavaScript['say_track_flow'] = function(block) {
  var dropdown_dropdown_track = block.getFieldValue('dropdown_track');
  var number_waittime         = block.getFieldValue('WaitTime');
  var checkbox_playonce       = block.getFieldValue('PlayOnce') == 'TRUE';
  var text_placeoncetoken     = block.getFieldValue('PlaceOnceToken');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Extensions.register('dynamic_menu_track',
  function() {
  
	var mymoh = load_list_track();
	var mio   = this;
    var mio2  = mio.inputList[1].fieldRow[1].menuGenerator_;
	var i = 0;	
	for (myvalue of mymoh){
		mytemp = [ myvalue , "track" + i];
		mio2[i] = mytemp; 
		i++;
	 }
  });
 
  
Blockly.defineBlocksWithJsonArray([
{
  "type": "answer_call_flow",
  "message0": "Answer %1 %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/answer.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
  ]);

 Blockly.JavaScript['answer_call_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "hangup_call_flow",
  "message0": "Hangup %1 %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/hangup.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
  ]);

Blockly.JavaScript['hangup_call_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "wait_call_flow",
  "message0": "Wait %1 %2 Time %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/stopwatch.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "waittime",
      "value": 0,
      "min": 0,
      "max": 99
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 75,
  "tooltip": "",
  "helpUrl": ""
}
  ]);

Blockly.JavaScript['wait_call_flow'] = function(block) {
  var number_waittime = block.getFieldValue('waittime');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "label_flow",
  "message0": "Label %1 %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/label.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "label",
      "text": "                              "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "tooltip": "",
  "helpUrl": ""
}
  ]);
  
  Blockly.JavaScript['label_flow'] = function(block) {
  var text_label = block.getFieldValue('label');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
  
 
 Blockly.defineBlocksWithJsonArray([
{
  "type": "context_flow",
  "message0": "Context %1 %2 %3 %4 %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/context.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "Context",
      "text": "                     "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": 45,
  "tooltip": "",
  "helpUrl": ""
}
  ]);
  
Blockly.JavaScript['context_flow'] = function(block) {
  var text_context = block.getFieldValue('Context');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
  
  
Blockly.defineBlocksWithJsonArray([
{
  "type": "goto_flow",
  "message0": "Goto %1 %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/goto.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "goto_label",
      "text": "                    "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "tooltip": "",
  "helpUrl": ""
}
  ]);
  
Blockly.JavaScript['goto_flow'] = function(block) {
  var text_goto_label = block.getFieldValue('goto_label');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
  
Blockly.defineBlocksWithJsonArray([
{
  "type": "extension_flow",
  "message0": "Extension %1 %2 %3 %4 %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/extension.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "extension",
      "text": "             "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "extension_inside"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
  ]);
  
Blockly.JavaScript['extension_flow'] = function(block) {
  var text_extension = block.getFieldValue('extension');
  var statements_extension_inside = Blockly.JavaScript.statementToCode(block, 'extension_inside');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "voicemail_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Voicemail %1 %2 Mailbox %3 %4 Play Busy Message %5 %6 Skip system messages %7 %8 Play unavailable Message %9 %10 Additional Options %11",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/voicemail.png",
      "width": 85,
      "height": 85,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "mailbox",
      "text": "                                  "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "busymessage_u",
      "checked": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "skipsystemmessages_s",
      "checked": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "playunavailablemessage_u",
      "checked": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "options",
      "text": "         "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
  ]);
  
Blockly.JavaScript['voicemail_flow'] = function(block) {
  var text_mailbox = block.getFieldValue('mailbox');
  var checkbox_busymessage = block.getFieldValue('busymessage') == 'TRUE';
  var checkbox_skipsystemmessages = block.getFieldValue('skipsystemmessages') == 'TRUE';
  var checkbox_playunavailablemessage = block.getFieldValue('playunavailablemessage') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
{
  "type": "waitexten_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "WaitExten %1 %2 Extension %3 %4 Seconds %5 %6 Music on Hold Class %7",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/waitexten.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "Extension",
      "text": "          "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "seconds",
      "value": 0
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "mohclass",
      "value": 0
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
  ]);


Blockly.JavaScript['waitexten_flow'] = function(block) {
  var text_extension = block.getFieldValue('Extension');
  var number_seconds = block.getFieldValue('seconds');
  var number_mohclass = block.getFieldValue('mohclass');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

 Blockly.defineBlocksWithJsonArray([
{
  "type": "menu_flow",
  "message0": "Menu %1 %2 Wait %3 %4 Retries %5 %6 Messages %7 %8 Actions %9 %10 Retry Message %11 %12 Timeout %13 %14",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/menu.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "waitinput",
      "value": 0
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "retry",
      "value": 0
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "messages"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "actions"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "retrymessage"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "timeoutstatement"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
}
  ]);
 
Blockly.JavaScript['menu_flow'] = function(block) {
  var number_waitinput = block.getFieldValue('waitinput');
  var number_retry = block.getFieldValue('retry');
  var statements_messages = Blockly.JavaScript.statementToCode(block, 'messages');
  var statements_actions = Blockly.JavaScript.statementToCode(block, 'actions');
  var statements_retrymessage = Blockly.JavaScript.statementToCode(block, 'retrymessage');
  var statements_timeoutstatement = Blockly.JavaScript.statementToCode(block, 'timeoutstatement');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
{
  "type": "handler_flow",
  "message0": "Handler %1 %2 Pattern %3 %4 %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/handler.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "pattern",
      "text": "            "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "handler"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
  ]);
  
  
Blockly.JavaScript['handler_flow'] = function(block) {
  var text_pattern = block.getFieldValue('pattern');
  var statements_handler = Blockly.JavaScript.statementToCode(block, 'handler');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};  

Blockly.defineBlocksWithJsonArray([
{
  "type": "playback_flow",
  "message0": "Playback %1 %2 Sound prompt %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/speaker.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "prompt",
      "options": [
        [
          "",
          "prompt1"
        ]
      ]
    }
  ],
  "extensions": ["dynamic_menu_playback"],      
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
}
  ]);
  
Blockly.JavaScript['playback_flow'] = function(block) {
  var dropdown_prompt = block.getFieldValue('prompt');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Extensions.register('dynamic_menu_playback',
  function() {
  
	var mymoh = load_list_track();
	var mio   = this;
    var mio2  = mio.inputList[1].fieldRow[1].menuGenerator_;
	var i = 0;	
	for (myvalue of mymoh){
		mytemp = [ myvalue , "prompt" + i];
		mio2[i] = mytemp; 
		i++;
	 }
  });

 
Blockly.defineBlocksWithJsonArray([
{
  "type": "input_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Input %1 %2 Variable %3 %4 Prompt %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/input.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "NAME",
      "text": "                "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "prompt_input",
      "options": [
        [
          "",
          "prompt"
        ]
      ]
    }
  ],
  "extensions": ["input_prompt_list"],    
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
  ]);

Blockly.JavaScript['input_flow'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_prompt_input = block.getFieldValue('prompt_input');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Extensions.register('input_prompt_list',
  function() {
  
	var mymoh = load_list_track();
	var mio   = this;
    var mio2  = mio.inputList[2].fieldRow[1].menuGenerator_;
	var i = 0;	
	for (myvalue of mymoh){
		mytemp = [ myvalue , "prompti" + i];
		mio2[i] = mytemp; 
		i++;
	 }
  });
  
  
Blockly.defineBlocksWithJsonArray([
{
  "type": "set_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Set %1 %2 Variable Name %3 %4 Value %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/variables.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "variable",
      "text": "                 "
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "value",
      "text": "                 "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
  ]);

Blockly.JavaScript['set_flow'] = function(block) {
  var text_variable = block.getFieldValue('variable');
  var text_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "return_flow",
  "message0": "Return %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/return.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['return_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
{
  "type": "calculation_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Calculation %1 %2 Variable %3 = %4",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/calculation.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "Variable",
      "text": "               "
    },
    {
      "type": "field_input",
      "name": "calculation",
      "text": "                                         "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['calculation_flow'] = function(block) {
  var text_variable = block.getFieldValue('Variable');
  var text_calculation = block.getFieldValue('calculation');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "if_flow",
  "message0": "IF %1 %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/if.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "NAME"
    },
    {
      "type": "input_statement",
      "name": "if"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

]);

Blockly.JavaScript['if_flow'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_if = Blockly.JavaScript.statementToCode(block, 'if');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
{
  "type": "ifelse_flow",
  "message0": "IF %1 %2 Then %3 Else %4",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/if.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "condition"
    },
    {
      "type": "input_statement",
      "name": "if"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);


Blockly.JavaScript['ifelse_flow'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_if = Blockly.JavaScript.statementToCode(block, 'if');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
{
  "type": "ifelseifelse_flow",
  "message0": "IF %1 %2 Then %3 ElseIf %4 %5 Else %6",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/if.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "condition"
    },
    {
      "type": "input_statement",
      "name": "if"
    },
    {
      "type": "input_value",
      "name": "NAME"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['ifelseifelse_flow'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_if = Blockly.JavaScript.statementToCode(block, 'if');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
{
  "type": "ifelseif2else_flow",
  "message0": "IF %1 %2 Then %3 ElseIf %4 %5 ElseIf %6 %7 Else %8",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/if.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "condition"
    },
    {
      "type": "input_statement",
      "name": "then"
    },
    {
      "type": "input_value",
      "name": "elseif1"
    },
    {
      "type": "input_statement",
      "name": "elseifstatement"
    },
    {
      "type": "input_value",
      "name": "elseif2"
    },
    {
      "type": "input_statement",
      "name": "elseifelseifstatement"
    },
    {
      "type": "input_statement",
      "name": "else"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['ifelseifelseifelse_flow'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_if = Blockly.JavaScript.statementToCode(block, 'if');
  var value_elseif = Blockly.JavaScript.valueToCode(block, 'elseif', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_elseifstatement = Blockly.JavaScript.statementToCode(block, 'elseifstatement');
  var value_elseifelseif = Blockly.JavaScript.valueToCode(block, 'elseifelseif', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_elseifelseifstatement = Blockly.JavaScript.statementToCode(block, 'elseifelseifstatement');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "ifelseif3else_flow",
  "message0": "IF %1 %2 Then %3 ElseIf %4 %5 ElseIf %6 %7 ElseIf %8 %9 Else %10",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/if.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "condition"
    },
    {
      "type": "input_statement",
      "name": "then"
    },
    {
      "type": "input_value",
      "name": "elseif1"
    },
    {
      "type": "input_statement",
      "name": "elseif1statement"
    },
    {
      "type": "input_value",
      "name": "elseif2"
    },
    {
      "type": "input_statement",
      "name": "elseif2statement"
    },
    {
      "type": "input_value",
      "name": "elseif3"
    },
    {
      "type": "input_statement",
      "name": "elseif3statement"
    },
    {
      "type": "input_statement",
      "name": "else"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['ifelseif3else_flow'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
  var value_elseif1 = Blockly.JavaScript.valueToCode(block, 'elseif1', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_elseif1statement = Blockly.JavaScript.statementToCode(block, 'elseif1statement');
  var value_elseif2 = Blockly.JavaScript.valueToCode(block, 'elseif2', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_elseif2statement = Blockly.JavaScript.statementToCode(block, 'elseif2statement');
  var value_elseif3 = Blockly.JavaScript.valueToCode(block, 'elseif3', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_elseif3statement = Blockly.JavaScript.statementToCode(block, 'elseif3statement');
  var statements_else = Blockly.JavaScript.statementToCode(block, 'else');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "test_flow",
  "message0": "Test %1 %2 if True %3 if False %4",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/test.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "testcondition",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "testtrue"
    },
    {
      "type": "input_statement",
      "name": "testfalse"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['test_flow'] = function(block) {
  var value_testcondition = Blockly.JavaScript.valueToCode(block, 'testcondition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_testtrue = Blockly.JavaScript.statementToCode(block, 'testtrue');
  var statements_testfalse = Blockly.JavaScript.statementToCode(block, 'testfalse');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "switch_flow1",
  "message0": "Switch %1 %2 Condition %3 Case %4 %5 Case %6 %7 Case %8 %9 Case %10 %11 Case %12 %13 Case %14 %15 Case %16 %17 Case %18 %19 Case %20 %21 Case %22 %23 Default %24",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/switch.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case1"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case2"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case3"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case4"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case5"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case6"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case7"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case8"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case9"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case0"
    },
    {
      "type": "input_statement",
      "name": "default"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['switch_flow1'] = function(block) {
  var text_condition = block.getFieldValue('condition');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case1 = Blockly.JavaScript.statementToCode(block, 'case1');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case2 = Blockly.JavaScript.statementToCode(block, 'case2');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case3 = Blockly.JavaScript.statementToCode(block, 'case3');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case4 = Blockly.JavaScript.statementToCode(block, 'case4');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case5 = Blockly.JavaScript.statementToCode(block, 'case5');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case6 = Blockly.JavaScript.statementToCode(block, 'case6');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case7 = Blockly.JavaScript.statementToCode(block, 'case7');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case8 = Blockly.JavaScript.statementToCode(block, 'case8');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case9 = Blockly.JavaScript.statementToCode(block, 'case9');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case0 = Blockly.JavaScript.statementToCode(block, 'case0');
  var statements_default = Blockly.JavaScript.statementToCode(block, 'default');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
{
  "type": "switch_flow2",
  "message0": "Switch %1 %2 Condition %3 Case Handlers %4 Default Handler %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/switch_handler.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "condition",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "casehandlers"
    },
    {
      "type": "input_statement",
      "name": "defaulthandler"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 150,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['switch_flow2'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_casehandlers = Blockly.JavaScript.statementToCode(block, 'casehandlers');
  var statements_defaulthandler = Blockly.JavaScript.statementToCode(block, 'defaulthandler');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "case_handler_flow",
  "message0": "Case Handler %1 %2 Value %3 %4 %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/case_handler.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "casevalue",
      "text": "               "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "casestatement"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['case_handler_flow'] = function(block) {
  var text_casevalue = block.getFieldValue('casevalue');
  var statements_casestatement = Blockly.JavaScript.statementToCode(block, 'casestatement');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "switch_flow3",
  "message0": "Switch %1 %2 Condition %3 %4 Case %5 %6 Case %7 %8 Case %9 %10 Default %11",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/switch.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "condition",
      "text": "                "
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case1"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case2"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case3"
    },
    {
      "type": "input_statement",
      "name": "default"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['switch_flow3'] = function(block) {
  var text_condition = block.getFieldValue('condition');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case1 = Blockly.JavaScript.statementToCode(block, 'case1');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case2 = Blockly.JavaScript.statementToCode(block, 'case2');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case3 = Blockly.JavaScript.statementToCode(block, 'case3');
  var statements_default = Blockly.JavaScript.statementToCode(block, 'default');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "switch_flow5",
  "message0": "Switch %1 %2 Condition %3 %4 Case %5 %6 Case %7 %8 Case %9 %10 Case %11 %12 Case %13 %14 Default %15",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/switch.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "condition",
      "text": "                "
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case1"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case2"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case3"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case4"
    },
    {
      "type": "field_input",
      "name": "valuecase",
      "text": "                    "
    },
    {
      "type": "input_statement",
      "name": "case5"
    },
    {
      "type": "input_statement",
      "name": "default"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
}
]);


Blockly.JavaScript['switch_flow5'] = function(block) {
  var text_condition = block.getFieldValue('condition');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case1 = Blockly.JavaScript.statementToCode(block, 'case1');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case2 = Blockly.JavaScript.statementToCode(block, 'case2');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case3 = Blockly.JavaScript.statementToCode(block, 'case3');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case4 = Blockly.JavaScript.statementToCode(block, 'case4');
  var text_valuecase = block.getFieldValue('valuecase');
  var statements_case5 = Blockly.JavaScript.statementToCode(block, 'case5');
  var statements_default = Blockly.JavaScript.statementToCode(block, 'default');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "confbridge_flow",
  "message0": "ConfBridge %1 %2 Conference Number %3 %4 Bridge Profile %5 %6 User Profile %7 %8 %9 Conference Menu %10",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/confbridge.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "conf_number",
      "text": "          "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "bridge_profile",
      "text": "default"
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "user_profile",
      "text": "default"
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);


Blockly.JavaScript['confbridge_flow'] = function(block) {
  var text_conf_number = block.getFieldValue('conf_number');
  var text_bridge_profile = block.getFieldValue('bridge_profile');
  var text_user_profile = block.getFieldValue('user_profile');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "gosub_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "GoSub %1 %2 Label or Context %3 %4 Arguments %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/gosub.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "label",
      "text": "                "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                     "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['gosub_flow'] = function(block) {
  var text_label = block.getFieldValue('label');
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "queue_flow",
  "message0": "Queue %1 %2 Queue Name %3 %4 %5  Allow caller to hang up by pressing *. %6 %7 Allow the called user to transfer the calling user",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/queue.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "queue_name",
      "text": "                                          "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "allow_hangup",
      "checked": true
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "allow_transfer",
      "checked": true
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['queue_flow'] = function(block) {
  var text_queue_name = block.getFieldValue('queue_name');
  var checkbox_allow_hangup = block.getFieldValue('allow_hangup') == 'TRUE';
  var checkbox_allow_transfer = block.getFieldValue('allow_transfer') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "macro_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Macro %1 %2 Name %3 %4 Arguments %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/macro.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "label",
      "text": "                     "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                     "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['macro_flow'] = function(block) {
  var text_label = block.getFieldValue('label');
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "agi_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "AGI %1 %2 Script %3 %4 Arguments %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/agi.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "label",
      "text": "                     "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                     "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['agi_flow'] = function(block) {
  var text_label = block.getFieldValue('label');
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_callerid_block_flow",
  "message0": "Callerid Block %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_callerid_block_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_callqueue_agentloginlogout_flow",
  "message0": "Call Queue Agent Login Logout %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_callqueue_agentloginlogout_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
{
  "type": "function_docalleridremap_flow",
  "message0": "Do Caller Id Remap %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_docalleridremap_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_echoTest_flow",
  "message0": "Echo Test %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_echoTest_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_setDayOfWeekCoverage_flow",
  "message0": "Set Day Of Week Coverage %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_setDayOfWeekCoverage_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_setHolidayMusicOnHoldIfNeeded_flow",
  "message0": "Set Holiday Music On Hold If Needed %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_setHolidayMusicOnHoldIfNeeded_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
{
  "type": "function_handleStoreCalls_flow",
  "message0": "Handle Store Calls %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_handleStoreCalls_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_callqueue_agentlogoutall_flow",
  "message0": "Call Queue Agent Logout All %1 %2 Parameters %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                            "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_callqueue_agentlogoutall_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_callqueue_join_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Call Queue Join %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_callqueue_join_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_changemeetmepin_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Change MeetMe Pin %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_changemeetmepin_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
{
  "type": "function_dialhuntgroup_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Dial Hunt Group %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_dialhuntgroup_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_parkcaller_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Park Caller %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_parkcaller_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_parkpickup_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Park Pickup %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_parkpickup_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_queue_callmonitor_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Queue Call Monitor %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_queue_callmonitor_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_setuptrack_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Setup Track %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_setuptrack_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_simplemeetme_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Simple MeetMe %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_simplemeetme_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_tovoicemail_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "To VoiceMail %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_tovoicemail_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_generic_flow",
  "message0": "Generic Function Call %1 %2 Arguments %3 %4 Function Name %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "function",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_generic_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  var text_function = block.getFieldValue('function');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "log_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Log %1 %2 Text %3 %4 Log to File %5 %6 Log File Name  %7",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/log.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "log_text",
      "text": "                                                           "
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "log_file",
      "checked": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "log_filename",
      "text": "                                                   "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['log_flow'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_addhanguphandler_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Add Hangup Handler %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_addhanguphandler_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_askforpin_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Ask for pin %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);


Blockly.JavaScript['function_askforpin_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
}


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_callqueue_agentsetstatus_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Call Queue Agent Set Status %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);


Blockly.JavaScript['function_callqueue_agentsetstatus_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
}




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_changemeetmeadminannouncement_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Change Meetme Admin Announcement %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_changemeetmeadminannouncement_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_changepersonalmeetmepin_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Change Personal Meetme Pin %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_changepersonalmeetmepin_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_checkchannellimit_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Check Channel Limit %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_checkchannellimit_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_daynightmodetoggle_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Day Night Mode Toggle %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_daynightmodetoggle_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_dialexten_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Dial Exten %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_dialexten_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
{
  "type": "function_dialhuntgroupstack_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Dial Hunt Group Stack %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_dialhuntgroupstack_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_dialin_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Dial In %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_dialin_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_dialout_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Dial Out %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_dialout_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_dialphonemap_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Dial Phone Map %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_dialphonemap_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_disablecallforwarding_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Disable Call Forwarding %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);



Blockly.JavaScript['function_disablecallforwarding_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_disableremotecallforwarding_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Disable Remote Call Forwarding %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);


Blockly.JavaScript['function_disableremotecallforwarding_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_dotrackoverridetoggle_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Do Track Override Toggle %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_dotrackoverridetoggle_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_enablecallforwarding_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Enable Call Forwarding %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_enablecallforwarding_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_enableremotecallforwarding_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Enable Remote Call Forwarding %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_enableremotecallforwarding_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_handlesla_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Handle SLA %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_handlesla_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_handlesla_channelbridge_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Handle SLA Channel Bridge %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_handlesla_channelbridge_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_huntgroupstack_loginlogout_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Hunt Group Stack Login Logout %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_huntgroupstack_loginlogout_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_invalidhandler_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Invalid Handler %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_invalidhandler_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_pagephones_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Page Phones %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_pagephones_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_parkorparkpickup_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Park or Park Pickup %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_parkorparkpickup_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_playannouncementifneeded_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Play Announcement if needed %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_playannouncementifneeded_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_playoverrideifneeded_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Play Override if Needed %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_playoverrideifneeded_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_playtrackifneeded_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Play Track if Needed %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_playtrackifneeded_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_recordingsmanager_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Recordings Manager %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_recordingsmanager_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_runagi_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Run AGI %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_runagi_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_setchannelgroup_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Set Channel Group %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_setchannelgroup_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_setphoneautoanswer_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Set Phone Auto Answer %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_setphoneautoanswer_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_setuptrackoverride_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Setup Track Override %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_setuptrackoverride_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_setuptrackoverridetoggle_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Setup Track OverrideToggle %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_setuptrackoverridetoggle_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_sla_dialfromsla_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "SLA Dial from SLA %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_sla_dialfromsla_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_stealholdingcall_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Steal Holding Call %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_stealholdingcall_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_toggleoption_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Toggle Option %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_toggleoption_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_tooperatordepricated_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "To Operator Depricated %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_tooperatordepricated_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_vmauthenticate_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "VM Authenticate %1 %2 Arguments %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "arguments",
      "text": "                           "
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_vmauthenticate_flow'] = function(block) {
  var text_arguments = block.getFieldValue('arguments');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_callqueue_handlecallqueuefallout_flow",
  "message0": "Call Queue Handle Call Queue Fall Out %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_callqueue_handlecallqueuefallout_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_dialphonemaphelper_flow",
  "message0": "Dial Phonemap Helper %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_dialphonemaphelper_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_updatevoicemailboxcount_flow",
  "message0": "Update Voicemail Box Count %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_updatevoicemailboxcount_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_busyretry_flow",
  "message0": "Busy Retry %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_busyretry_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_callreturn_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Call Return %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_callreturn_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "function_changemeetmeadminpin_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Change Meetme Admin Pin %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_changemeetmeadminpin_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_checkothervoicemail_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Check Other Voicemail %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_checkothervoicemail_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_checkownvoicemail_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Check Own Voicemail %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_checkownvoicemail_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.defineBlocksWithJsonArray([
{
  "type": "function_disablebusycallforwarding_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Disable Busy Call Forwarding %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_disablebusycallforwarding_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_disableallcallforwarding_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Disable All Call Forwarding %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_disableallcallforwarding_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_disableselectcallforwarding_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Disable Select Call Forwarding %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_disableselectcallforwarding_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_donotdisturbtoggle_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Do Not Disturb Toggle %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_donotdisturbtoggle_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
}





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_enableallcallforwarding_flow",
  "message0": "Enable All Call Forwarding %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_enableallcallforwarding_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_enablebusycallforwarding_flow",
  "message0": "Enable Busy Call Forwarding %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_enablebusycallforwarding_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};




Blockly.defineBlocksWithJsonArray([
{
  "type": "function_enableselectcallforwarding_flow",
  "message0": "Enable Select Call Forwarding %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_enableselectcallforwarding_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_hotdesking_flow",
  "message0": "Hot Desking %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_hotdesking_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_nosuchnumber_flow",
  "message0": "No Such Number %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_nosuchnumber_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_park_timeout_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Park Timeout %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_park_timeout_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_simplemeetmemain_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "Simple Meetme Main %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_simplemeetmemain_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};





Blockly.defineBlocksWithJsonArray([
{
  "type": "function_sla_dial_from_flow",
  "lastDummyAlign0": "RIGHT",
  "message0": "SLA Dial From %1",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/function.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['function_sla_dial_from_flow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.defineBlocksWithJsonArray([
{
  "type": "menu_flow2",
  "message0": "Menu %1 %2 Wait %3 %4 Retries %5 %6 Message %7 %8 Retry Msg %9 %10 Exit Msg %11 %12 Actions %13 0 %14 1 %15 2 %16 3 %17 4 %18 5 %19 6 %20 7 %21 8 %22 9 %23",
  "args0": [
    {
      "type": "field_image",
      "src": "./images/menu.png",
      "width": 55,
      "height": 55,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "waitinput",
      "value": 0
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "NAME",
      "value": 0
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "prompt",
      "options": [
        [
          "option",
          "OPTIONNAME"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "retry_message",
      "options": [
        [
          "option",
          "OPTIONNAME"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "exit_msg",
      "options": [
        [
          "option",
          "OPTIONNAME"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "action0"
    },
    {
      "type": "input_statement",
      "name": "action1"
    },
    {
      "type": "input_statement",
      "name": "action2"
    },
    {
      "type": "input_statement",
      "name": "action3"
    },
    {
      "type": "input_statement",
      "name": "action4"
    },
    {
      "type": "input_statement",
      "name": "action5"
    },
    {
      "type": "input_statement",
      "name": "action6"
    },
    {
      "type": "input_statement",
      "name": "action7"
    },
    {
      "type": "input_statement",
      "name": "action8"
    },
    {
      "type": "input_statement",
      "name": "action9"
    }
  ],
  "extensions": ["menu_combos"],     
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['menu_flow2'] = function(block) {
  var number_waitinput = block.getFieldValue('waitinput');
  var number_name = block.getFieldValue('NAME');
  var dropdown_prompt = block.getFieldValue('prompt');
  var dropdown_retry_message = block.getFieldValue('retry_message');
  var dropdown_exit_msg = block.getFieldValue('exit_msg');
  var statements_action0 = Blockly.JavaScript.statementToCode(block, 'action0');
  var statements_action1 = Blockly.JavaScript.statementToCode(block, 'action1');
  var statements_action2 = Blockly.JavaScript.statementToCode(block, 'action2');
  var statements_action3 = Blockly.JavaScript.statementToCode(block, 'action3');
  var statements_action4 = Blockly.JavaScript.statementToCode(block, 'action4');
  var statements_action5 = Blockly.JavaScript.statementToCode(block, 'action5');
  var statements_action6 = Blockly.JavaScript.statementToCode(block, 'action6');
  var statements_action7 = Blockly.JavaScript.statementToCode(block, 'action7');
  var statements_action8 = Blockly.JavaScript.statementToCode(block, 'action8');
  var statements_action9 = Blockly.JavaScript.statementToCode(block, 'action9');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};



Blockly.Extensions.register('menu_combos',
  function() {
  
	var mymoh = load_list_track();
	var mio  = this;
    var mio2 = mio.inputList[3].fieldRow[1].menuGenerator_;

	var i = 0;	
	for (myvalue of mymoh){
		mytemp = [ myvalue , "message" + i];
		mio2[i] = mytemp; 
		i++;
	 }
	 
    var mio2 = mio.inputList[4].fieldRow[1].menuGenerator_;

	var i = 0;	
	for (myvalue of mymoh){
		mytemp = [ myvalue , "message" + i];
		mio2[i] = mytemp; 
		i++;
	 }

    var mio2 = mio.inputList[5].fieldRow[1].menuGenerator_;

	var i = 0;	
	for (myvalue of mymoh){
		mytemp = [ myvalue , "message" + i];
		mio2[i] = mytemp; 
		i++;
	 }
	 
  });
  
  
  
  
  
// blockies

/*
var demoWorkspace = Blockly.inject('blocklyDiv',
	{
	horizontalLayout: false,
	move:{
		scrollbars : true,
		drag       : true,
		wheel      : true},		
	toolbox: document.getElementById('toolbox'),
	zoom:
		 {controls:   true,
		  wheel:      false,
		  startScale: 1.0,
		  maxScale:   3,
		  minScale:   0.3,
		  scaleSpeed: 1.2,
		  pinch: true},
	trashcan: true
	});
*/




	

	
class ToolboxSearch extends Blockly.ToolboxItem {
  /**
   * Constructor for a label in the toolbox.
   * @param {!Blockly.utils.toolbox.ToolboxItemInfo} toolboxItemDef The toolbox
   *    item definition. This comes directly from the toolbox definition.
   * @param {!Blockly.IToolbox} parentToolbox The toolbox that holds this
   *    toolbox item.
   * @override
   */
  constructor(toolboxItemDef, parentToolbox) {
    super(toolboxItemDef, parentToolbox);
    /**
     * The button element.
     * @type {?HTMLLabelElement}
     */
    this.label = null;
	
  }

  /**
   * Init method for the label.
   * @override
   */
  init() {
	  
	if (1==2){
		// var mydiv   = document.createElement("div");
		var mylabel = document.createElement("label");	
		// Create the label.
		// this.label = document.createElement('input');
		this.label = document.createElement('label');
		// Set the name.
		this.label.textContent = this.toolboxItemDef_['name'];
		// Set the color.
		this.label.style.color = this.toolboxItemDef_['colour'];
		// Any attributes that begin with css- will get added to a cssconfig.
		const cssConfig = this.toolboxItemDef_['cssconfig'];
		// Add the class.
		if (cssConfig) {
		  this.label.classList.add(cssConfig['label']);
		}
	}
	
	if (1==2){
		var mylabel = document.createElement("label");	
		// Create the label.
		this.label = document.createElement('input');
		// Set the name.
		this.label.textContent = this.toolboxItemDef_['name'];
		// Set the color.
		this.label.style.color = this.toolboxItemDef_['colour'];
		// Any attributes that begin with css- will get added to a cssconfig.
		const cssConfig = this.toolboxItemDef_['cssconfig'];
		// Add the class.
		if (cssConfig) {
		  this.label.classList.add(cssConfig['label']);
		}
	}


	if (1==2){
		// Create the image.
		this.label = document.createElement('img');
		// Set the name.
		// <img src="./images/search.png" style="height:20px; width:20px;" />
		this.label.src          = "search.png";
		this.label.style.height = "20px";
		this.label.style.width  = "20px";
		this.label.textContent  = this.toolboxItemDef_['name'];
		// Set the color.
		this.label.style.color = this.toolboxItemDef_['colour'];
		// Any attributes that begin with css- will get added to a cssconfig.
		const cssConfig = this.toolboxItemDef_['cssconfig'];
		// Add the class.
		if (cssConfig) {
		  this.label.classList.add(cssConfig['label']);
		}
	}

	//
	// Div
	//
	if (1==1){
		var mydiv   = document.createElement("div");
		var mylabel = document.createElement("label");	
		var myinput = document.createElement("input");	
		var myimage1 = document.createElement("img");
		var myimage2 = document.createElement("img");

		
		//myinput.setAttribute("id", "txtsearch");
		myinput.setAttribute("name", "txtsearch");			
		
		/*
		myinput.addEventListener("click",  function() { 
			});		
		*/
		
		mydiv.style.padding = "10px 10px 10px 10px";	
		
		myimage1.src          = "./images/search.png";
		myimage1.style.padding = "0 0 0 6px";			
		myimage1.style.height = "20px";
		myimage1.style.width  = "20px";
		myimage1.addEventListener("click",  function() { 
			var thesearch = document.getElementsByName("txtsearch")[0].value;
			if (thesearch == null || thesearch == "" ) return;
			showme(thesearch);
			});
		
		myimage2.src          = "./images/clear.png";
		myimage2.style.padding = "0 0 0 6px";				
		myimage2.style.height = "20px";
		myimage2.style.width  = "20px";
		myimage2.addEventListener("click",  function() { 
			document.getElementsByName("txtsearch")[0].value = "";
			mydiv.style.display = "none";
			cleanme();
			});
	
		mydiv.appendChild(mylabel);		
		mydiv.appendChild(myinput);
		mydiv.appendChild(myimage1);		
		mydiv.appendChild(myimage2);	
		
		// Create the label.
		// this.label = document.createElement('label');
		this.label = mydiv;
		// Set the name.
		//this.label.textContent = this.toolboxItemDef_['name'];
		// Set the color.
		this.label.style.color = this.toolboxItemDef_['colour'];
		// Any attributes that begin with css- will get added to a cssconfig.
		const cssConfig = this.toolboxItemDef_['cssconfig'];
		// Add the class.
		if (cssConfig) {
		  this.label.classList.add(cssConfig['label']);
		}
		// mydiv.remove();
	}
	
	
	
  }

  /**
   * Gets the div for the toolbox item.
   * @return {HTMLLabelElement} The label element.
   * @override
   */
  getDiv() {
    return this.label;
  }
 
}



Blockly.JavaScript['toolboxsearch'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    'toolboxsearch',
    ToolboxSearch);
	
	
var demoWorkspace = Blockly.inject('blocklyDiv',
	{
	horizontalLayout: false,
	move:{
		scrollbars : true,
		drag       : true,
		wheel      : true},		
	toolbox: mytoolbox,
	zoom:
		 {controls:   true,
		  wheel:      false,
		  startScale: 1.0,
		  maxScale:   3,
		  minScale:   0.3,
		  scaleSpeed: 1.2,
		  pinch: true},
	trashcan: true
	});
	
	
	
	
	
var v_loadworkspace = false;

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv  = document.getElementById('blocklyDiv');

var onresize = function(e) {
	// Compute the absolute coordinates and dimensions of blocklyArea.
	var element = blocklyArea;
	var x       = 0;
	var y       = 0;
	do {
	  x      += element.offsetLeft;
	  y      += element.offsetTop;
	  element = element.offsetParent;
	} while (element);
	// Position blocklyDiv over blocklyArea.
	blocklyDiv.style.left   = x + 'px';
	blocklyDiv.style.top    = y + 'px';
	blocklyDiv.style.width  = blocklyArea.offsetWidth + 'px';
	blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
	Blockly.svgResize(demoWorkspace);
};

  
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(demoWorkspace);

load_list();



function onFirstComment(event) {
	if (event.type == "ui"){
		return;
	}
/*
  if (event.type == Blockly.Events.CHANGE &&
      event.element == 'comment' &&
      !event.oldValue && event.newValue) {
    alert('Congratulations on creating your first comment!')
    workspace.removeChangeListener(onFirstComment);
  }
  */
  
  //alert('one' + event.type);
     //demoWorkspace.removeChangeListener(onFirstComment);
	 
	 

	 
	 //Blockly.Events.CLICK
	 // alert("here Event Type -> " + event.type);
	 
}
demoWorkspace.addChangeListener(onFirstComment);




function show(opcion){
	
	switch(opcion.value){
		case 'Validate':
			validate_flow();
			break;
		case 'Import':
			import_flow();
			break;
		case 'Download':
			download_local();
			break;
		case 'Clear':
			reload();
			break;
		case 'Save':
			save_flow();
			break;
		case 'Read':
			read_flow();
			break;
	}
	opcion.value = "Menu";
}

function read_flow (myfile){
 
	if (!myfile){
		var myfile = document.getElementById('browserin').value;
	}
	
	var temp = myfile.substr(-4);
	
	if(temp!=".xml") {
		myfile = myfile + ".xml"; 
	
	}
	document.getElementById('browserin').value = myfile;	
	
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			demoWorkspace.clear();
			var xml_text = xhttp.responseText;
			var xml      = Blockly.Xml.textToDom(xml_text);		
			Blockly.Xml.domToWorkspace(xml, demoWorkspace);	
			v_loadworkspace = true;
			
		}
	};
    xhttp.open("GET", "servertools.pl?action=read&flow=" + myfile, false);		
    xhttp.send();	
}


function save_flow(mydata){
		
    var data;
	
    var myfile = document.getElementById('browserin').value;
	
	if (!(myfile)){
		alert("Error : Enter the name of the flow");
		return;
	}

	if (!validate_flow()){
		return;
	}
	
	if(!mydata){
	    
		var xml = Blockly.Xml.workspaceToDom(demoWorkspace);
		var xml_text = Blockly.Xml.domToText(xml);	

		data = 'data='  + xml_text;

	} else {
		data = 	'data=' + "'" + mydata + "'";
	}
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
		// console.log(xmlhttp.responseText);
		alert("Flow Saved Successfully");
		v_loadworkspace = true;		
	  }
	}

	xmlhttp.open("GET","servertools.pl?" + data + "&name=" + myfile + "&action=save",true);

    //Must add this request header to XMLHttpRequest request for POST
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send();		
}


function reload(){
	demoWorkspace.clear();
    document.getElementById('browserin').value = "";
	v_loadworkspace = false;
}

function download_local(myfile) {

	if (!v_loadworkspace){
		alert("Error: There is no Flow Loaded");
		return;		
	}

	if (!myfile){
		var myfile = document.getElementById('browserin').value;
		if(!myfile){
			alert("Error : There is no Flow loaded");
			return;
		}
	}

	var xml       = Blockly.Xml.workspaceToDom(demoWorkspace);
	var xml_text  = Blockly.Xml.domToText(xml);
	var xml_text2 = Blockly.Xml.domToPrettyText(xml);

	var element   = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(xml_text));  
	element.setAttribute('download', myfile);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
 
}

 
function import_flow() {

	var element = document.createElement('input');
	
	element.setAttribute('id', 'myinput'); 	
	element.setAttribute('type', 'file');  
	element.style.display = 'none';
    element.accept        ="xml"
	document.body.appendChild(element);

	element.click();

    element.onchange = function () {upload_flow()};	
	
	//document.body.removeChild(element);

}

function upload_flow(){
	
	var x          = document.getElementById("myinput");
    var myfile     = x.files[0];
	
	
	var myformdata = new FormData();

    myformdata.append("myfile", myfile);
    myformdata.append("action", "upload");	
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
	    // alert(xmlhttp.responseText);
		v_loadworkspace	= true;
	  }
	}
    
	xmlhttp.open("POST","servertools.pl",true);			
    //Must add this request header to XMLHttpRequest request for POST
    //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(myformdata);
	//
	read_flow(myfile.name);

}	
		
function load_list(){

	var mycombo   = document.getElementById("browsers"); 
  
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var data  = JSON.parse(this.responseText);
			
		for (x of data){
		 
			var myoption = document.createElement('option');
			myoption.text  = x;
			myoption.value = x;

			mycombo.appendChild(myoption);		 

		}
      }
    };
    xmlhttp.open("GET", "servertools.pl?action=showdir", true);	
    xmlhttp.send();
 
 
 	var element = document.getElementById('browserin');
	
	
    element.onchange = function () 
	{
	

		var myflow = document.getElementById('browserin').value;
		

		
		var temp = myflow.substr(-4);
		
		if(temp!=".xml") {
			myflow = myflow + ".xml"; 
		    document.getElementById('browserin').value = myflow;
		}
		
		var myoptions = document.getElementById('browsers').options;

		
		var v_exits = 0;
		
		for(x in myoptions)
		{
			if (myoptions[x].value== myflow){
				v_exits = 1;
			}
		}
		
		//if (!v_exits){
		//	alert("Error : Flow not found : " + myflow);
		//}
		if (v_exits){
			demoWorkspace.clear();
	
			read_flow(myflow);				
		}
		
	};	
	
	//document.body.removeChild(element);
	

}
 
 function validate_flow(){

	var xml     = Blockly.Xml.workspaceToDom(demoWorkspace);

    //
	// 
	//
	var myxml        = xml.ownerDocument;
    var mynodes      = xml.childNodes;
	var mynodescount = mynodes.length;
		
	//
	// No empty Workspace
	//
	if(mynodescount==0){
		alert("Error: Flow not found");
		return;
	}		
	//
	// only one flow in the canvas
	//
	if(mynodescount>1){
		alert("Error: only one flow is allow in the canvas");
		return;
	}
	//
	// verify is the first node is a start_flow
	//
	var myattributes = mynodes[0].attributes;
	
	if(myattributes[0].nodeValue != "start_flow"){
		alert("Error: The flow must begin with a Start BLock");	
		return;
	}
	//
	//
	// Verify that flows has more than 1 block
	//
	//
	
    var x            = xml.getElementsByTagName("block");
    var myblockcount = x.length;
	var stopblock    = false;
	
    console.log("nodos    : " + myblockcount);	
  	  		
	if(myblockcount==1){
		alert("Error : Only one Block Found");
		return;
	}
	//
	//
	// Verify that no empty loops found in flow
	//
	//		
	for (var i = 0; i < x.length; i++){
	
		mynodetemp = x[i];


		if(mynodetemp.attributes["type"].value == "say_number"){
			if (mynodetemp.childNodes[0].tagName == "field"){
				console.log("mm" + mynodetemp.childNodes[0].attributes['name'].value);
				if (mynodetemp.childNodes[0].attributes['name'].value == "NAME"){
					if (Number(mynodetemp.childNodes[0].textContent) == 0){
						alert("Error : Number to say must be greather than cero in Say Number Block"); 
						return;						
					}				
				}
			}
		}

		if(mynodetemp.attributes["type"].value == "musiconhold"){
			if (mynodetemp.childNodes[0].tagName == "field"){
				console.log("mm" + mynodetemp.childNodes[0].attributes['name'].value);
				if (mynodetemp.childNodes[0].attributes['name'].value == "duration"){
					if (Number(mynodetemp.childNodes[0].textContent) == 0){
						alert("Error : Duration must be greather than cero in Music on Hold Block"); 
						return;						
					}				
				}
			}
		}

		if(x[i].attributes[0].nodeValue == "loop_statement"){
			if(x[i].childNodes.length<=1){
				alert("Error : Empty Loop found");			
				return;
			}
		}
		if(x[i].attributes[0].nodeValue == "stop_flow"){
			stopblock = true;
		}

	}
	
	if (!stopblock){
		alert("Error : At Least One Stop_flow Block Needed");
		return;
	}
	
	
	if(myblockcount==2){
		alert("Error : Only a Start_flow and Stop_flow found");
		return;
	}
	
	alert("Flow Validated succefully");
	
	return true;
	
 }
 
 function load_list_moh(){

	var lalista;
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data  = JSON.parse(this.responseText);
			lalista = data;
		}
    };	
    xmlhttp.open("GET", "servertools.pl?action=showdirmoh", false);	
    xmlhttp.send();

 	return lalista;
}

 function load_list_track(){

	var lalista;
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data  = JSON.parse(this.responseText);
			lalista = data;
		}
    };	
    xmlhttp.open("GET", "servertools.pl?action=showdirtrack", false);	
    xmlhttp.send();

 	return lalista;
}


function test(){
		

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
		console.log(xmlhttp.responseText);
		alert("Text Successfully");
	  }
	}

	xmlhttp.open("GET","servertools.pl?" + "action=readconfig",false);

    //Must add this request header to XMLHttpRequest request for POST
    // xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send();		
}
