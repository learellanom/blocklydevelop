#!"C:\xampp\perl\bin\perl.exe"
# /usr/bin/perl -w
use strict;
use warnings;
#
# Modules required for intellasoft environment servers
#
#use feature 'say';
#use feature 'switch';
#use experimental 'smartmatch';
#use IntellaConfig;
#use lib '/usr/local/library/perl';
#use lib '/usr/local/library/perl/lib/perl5';
 
use CGI;
use CGI::Fast;
use JSON;
#use Data::Dumper;
	
	my $myvalue;
	$myvalue = "TRUE";
	$myvalue = lc($myvalue);
	if ($myvalue){
		print "Value is true \r\n";
	}else{
		print "Value is false \r\n";
	}
	print "the value is ->" . $myvalue . "<-";
	exit;
	
	print 
	my $myjson;
	my $mydata;
	local $/ = undef;		
	open  (FHJ , '<', "intellasoftblocks.MetaData.js");
	$myjson = <FHJ>;
	close (FHJ);

	

	print "read_config -> start";
			  print "\r\n";

	print "read_config -> open file";	
			  print "\r\n";
	print "read_config -> close file";		
			  print "\r\n";	
	$mydata = decode_json($myjson);
	
	print "read_config -> after decode";	
	print "\r\n";
	#print Dumper $mydata;
	print "\r\n";	
	print "read_config -> read -> dirFlows        ->" . $mydata->{"dirFlows"} . "-<";	
	print "\r\n";
	print "read_config -> read -> dirMusicOndHold ->" . $mydata->{"dirMusicOndHold"} . "-<";		
	print "\r\n";
	print "read_config -> read -> dirTracks       ->" . $mydata->{"dirTracks"} . "-<";			
	print "\r\n";
	print "read_config -> read -> logServices     ->" . $mydata->{"logServices"} . "-<";		
	print "\r\n";
	  
	if (exists($mydata->{"logServices"})) {
		print "read_config -> logservices  exists **** ";
		print "\r\n";
	    }
	 else{
		print "read_config -> logservices no exists 222222222222";
		print "\r\n";
	}		
	
	print "read_config -> end ----";	
	print "\r\n";
	
