{
 	"kind" : "mytoolbox",
	"contents": [	
    { 	"kind": "category", 
		"name": "IVR",
		"colour": "210",
		"cssConfig": {
			"icon"  : "customIcon_cat_ivr",
			"row"   : "cat_row",
			"label" : "cat_label"
		},
		"contents": [
			{ "kind" : "block", "type" : "answer_call_flow" },  	\
			{ "kind" : "block", "type" : "callback_dialer" },  
			{ "kind" : "block", "type" : "context_flow" },  				
			{ "kind" : "block", "type" : "extension_flow" }, 	
			{ "kind" : "block", "type" : "handler_flow" },  
			{ "kind" : "block", "type" : "hangup_call_flow" },  
			{ "kind" : "block", "type" : "input_flow" }, 
			{ "kind" : "block", "type" : "menu_flow" },  	
			{ "kind" : "block", "type" : "playback_flow" },  				
			{ "kind" : "block", "type" : "say_number" },  	
			{ "kind" : "block", "type" : "say_track_flow" },  	
			{ "kind" : "block", "type" : "voicemail_flow" },  
			{ "kind" : "block", "type" : "waitexten_flow" },  
			{ "kind" : "block", "type" : "wait_call_flow" },  				
			{ "kind" : "block", "type" : "log_flow" }
		]
	},
    { 	"kind": "category", 
		"name": "Flow Control",
		"colour": "210",	
		"cssConfig": {
			"icon"  : "customIcon_cat_flow",
			"row"   : "cat_row",
			"label" : "cat_label"
		},
		"contents": [
			{ "kind" : "block", "type" : "case_handler_flow" }, 
			{ "kind" : "block", "type" : "start_flow" },  		   
			{ "kind" : "block", "type" : "stop_flow" },  
			{ "kind" : "block", "type" : "loop_statement" },  
			{ "kind" : "block", "type" : "label_flow" },  
			{ "kind" : "block", "type" : "goto_flow" },  
			{ "kind" : "block", "type" : "return_flow" },  
			{ "kind" : "block", "type" : "if_flow" }, 
			{ "kind" : "block", "type" : "ifelse_flow" }, 
			{ "kind" : "block", "type" : "ifelseifelse_flow" }, 
			{ "kind" : "block", "type" : "ifelseif2else_flow" }, 
			{ "kind" : "block", "type" : "ifelseif3else_flow" }, 
			{ "kind" : "block", "type" : "test_flow" }, 
			{ "kind" : "block", "type" : "switch_flow1" }, 
			{ "kind" : "block", "type" : "switch_flow2" }, 
			{ "kind" : "block", "type" : "switch_flow3" }, 
			{ "kind" : "block", "type" : "switch_flow5" }, 
			{ "kind" : "block", "type" : "gosub_flow" }, 
			{ "kind" : "block", "type" : "macro_flow" }, 	
			{ "kind" : "block", "type" : "agi_flow" }, 	
			{ "kind" : "block", "type" : "controls_whileUntil" },  
			{ "kind" : "block", "type" : "controls_for">
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
			{ "kind" : "block", "type" : "logic_compare" },
			{ "kind" : "block", "type" : "logic_operation" },
			{ "kind" : "block", "type" : "logic_negate" },
			{ "kind" : "block", "type" : "logic_boolean" },
			{ "kind" : "block", "type" : "logic_null" }
		]
	},
    { 	"kind": "category", 
		"name": "Math",
		"colour": "230",		
		"cssConfig": {
			"icon"  : "customIcon_cat_math",
			"row"   : "cat_row",
			"label" : "cat_label"
		},		
		"contents": [
			{ "kind" : "block", "type" : "calculation_flow" },  
			{ "kind" : "block", "type" : "set_flow" }
		]
	},
    { 	"kind": "category", 
		"name": "Queue",
		"colour": "20",
		"cssConfig": {
			"icon"  : "customIcon_cat_queue",
			"row"   : "cat_row",
			"label" : "cat_label"
		},		
		"contents": [
			{ "kind" : "block", "type" : "musiconhold" },  			
			{ "kind" : "block", "type" : "queue_flow" }, 	
			{ "kind" : "block", "type" : "sayqueueposition_flow" }, 
			{ "kind" : "block", "type" : "say_hold_time_flow" }
		]
	},
    { 	"kind": "category", 
		"name": "Conference" ,
		"colour": "210",
		"cssConfig": {
			"icon"  : "customIcon_cat_ivr",
			"row"   : "cat_row",
			"label" : "cat_label"
		},		
		"contents": [
			{ "kind" : "block", "type" : "confbridge_flow" }
		]
	},
    { 	"kind": "category", 
		"name": "Function",
		"colour": "210",	
		"cssConfig": {
			"icon"  : "customIcon_cat_ivr",
			"row"   : "cat_row",
			"label" : "cat_label"
		},		
		"contents": [
			{ "kind" : "block", "type" : "function_addhanguphandler_flow" },				
			{ "kind" : "block", "type" : "function_askforpin_flow" },	
			{ "kind" : "block", "type" : "function_busyretry_flow" },		
			{ "kind" : "block", "type" : "function_callerid_block_flow" }, 			
			{ "kind" : "block", "type" : "function_callqueue_agentloginlogout_flow" }, 	
			{ "kind" : "block", "type" : "function_callqueue_agentlogoutall_flow" }, 	
			{ "kind" : "block", "type" : "function_callqueue_join_flow" }, 
			{ "kind" : "block", "type" : "function_callreturn_flow" }, 
			{ "kind" : "block", "type" : "function_changemeetmeadminpin_flow" }, 	
			{ "kind" : "block", "type" : "function_changemeetmepin_flow" }, 
			{ "kind" : "block", "type" : "function_checkothervoicemail_flow" }, 
			{ "kind" : "block", "type" : "function_checkownvoicemail_flow" }, 		
			{ "kind" : "block", "type" : "function_callqueue_agentsetstatus_flow" },	
			{ "kind" : "block", "type" : "function_changemeetmeadminannouncement_flow" },	
			{ "kind" : "block", "type" : "function_changepersonalmeetmepin_flow" },	
			{ "kind" : "block", "type" : "function_checkchannellimit_flow" },					
			{ "kind" : "block", "type" : "function_callqueue_handlecallqueuefallout_flow" },	
			{ "kind" : "block", "type" : "function_daynightmodetoggle_flow" },					
			{ "kind" : "block", "type" : "function_dialexten_flow" },					
			{ "kind" : "block", "type" : "function_dialhuntgroup_flow" }, 	
			{ "kind" : "block", "type" : "function_dialhuntgroupstack_flow" },				
			{ "kind" : "block", "type" : "function_dialin_flow" },					
			{ "kind" : "block", "type" : "function_dialout_flow" },	
			{ "kind" : "block", "type" : "function_dialphonemaphelper_flow" },	
			{ "kind" : "block", "type" : "function_dialphonemap_flow" },
			{ "kind" : "block", "type" : "function_disableallcallforwarding_flow" },	
			{ "kind" : "block", "type" : "function_disablebusycallforwarding_flow" },					
			{ "kind" : "block", "type" : "function_disablecallforwarding_flow" },					
			{ "kind" : "block", "type" : "function_disableremotecallforwarding_flow" },
			{ "kind" : "block", "type" : "function_disableselectcallforwarding_flow" },
			{ "kind" : "block", "type" : "function_docalleridremap_flow" },
			{ "kind" : "block", "type" : "function_donotdisturbtoggle_flow" },
			{ "kind" : "block", "type" : "function_dotrackoverridetoggle_flow" },	
			{ "kind" : "block", "type" : "function_echoTest_flow" }, 
			{ "kind" : "block", "type" : "function_enableallcallforwarding_flow" }, 
			{ "kind" : "block", "type" : "function_enablebusycallforwarding_flow" }, 	
			{ "kind" : "block", "type" : "function_enablecallforwarding_flow" },
			{ "kind" : "block", "type" : "function_enableremotecallforwarding_flow" },					
			{ "kind" : "block", "type" : "function_enableselectcallforwarding_flow" }, 
			{ "kind" : "block", "type" : "function_generic_flow" },	
			{ "kind" : "block", "type" : "function_handlesla_flow" },	
			{ "kind" : "block", "type" : "function_handlesla_channelbridge_flow" },	
			{ "kind" : "block", "type" : "function_handleStoreCalls_flow" }, 	
			{ "kind" : "block", "type" : "function_hotdesking_flow" }, 					
			{ "kind" : "block", "type" : "function_huntgroupstack_loginlogout_flow" },
			{ "kind" : "block", "type" : "function_invalidhandler_flow" },
			{ "kind" : "block", "type" : "function_nosuchnumber_flow" },
			{ "kind" : "block", "type" : "function_pagephones_flow" },	
			{ "kind" : "block", "type" : "function_park_timeout_flow" },	
			{ "kind" : "block", "type" : "function_parkcaller_flow" }, 	
			{ "kind" : "block", "type" : "function_parkorparkpickup_flow" },
			{ "kind" : "block", "type" : "function_parkpickup_flow" },	
			{ "kind" : "block", "type" : "function_playannouncementifneeded_flow" },
			{ "kind" : "block", "type" : "function_playoverrideifneeded_flow" },
			{ "kind" : "block", "type" : "function_playtrackifneeded_flow" },
			{ "kind" : "block", "type" : "function_queue_callmonitor_flow" },	
			{ "kind" : "block", "type" : "function_recordingsmanager_flow" },
			{ "kind" : "block", "type" : "function_runagi_flow" },
			{ "kind" : "block", "type" : "function_setchannelgroup_flow" },
			{ "kind" : "block", "type" : "function_setDayOfWeekCoverage_flow" }, 	
			{ "kind" : "block", "type" : "function_setHolidayMusicOnHoldIfNeeded_flow" }, 	
			{ "kind" : "block", "type" : "function_setphoneautoanswer_flow" },												
			{ "kind" : "block", "type" : "function_setuptrack_flow" },			
			{ "kind" : "block", "type" : "function_setuptrackoverride_flow" },
			{ "kind" : "block", "type" : "function_setuptrackoverridetoggle_flow" },
			{ "kind" : "block", "type" : "function_simplemeetme_flow" },	
			{ "kind" : "block", "type" : "function_simplemeetmemain_flow" },	
			{ "kind" : "block", "type" : "function_sla_dial_from_flow" },	
			{ "kind" : "block", "type" : "function_sla_dialfromsla_flow" },
			{ "kind" : "block", "type" : "function_stealholdingcall_flow" },	
			{ "kind" : "block", "type" : "function_toggleoption_flow" },	
			{ "kind" : "block", "type" : "function_tooperatordepricated_flow" },
			{ "kind" : "block", "type" : "function_tovoicemail_flow" },			
			{ "kind" : "block", "type" : "function_updatevoicemailboxcount_flow" },	
			{ "kind" : "block", "type" : "function_vmauthenticate_flow" }	
		]
	}
}