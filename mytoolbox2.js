var mytoolbox = `
<xml id="toolbox" style="display: none">
 <category name="IVR" colour="210" css-icon="customIcon_cat_ivr" css-row="cat_row" css-label="cat_label">	 
	<block type="answer_call_flow"></block>  	
	<block type="callback_dialer"></block>  
	<block type="context_flow"></block>  				
	<block type="extension_flow"></block> 	
	<block type="handler_flow"></block>  
	<block type="hangup_call_flow"></block>  
	<block type="input_flow"></block> 
	<block type="menu_flow"></block>  	
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
