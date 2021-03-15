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

my $mycgi    = CGI->new;
my $myaction = $mycgi->param('action');
my $myconfig;

print $mycgi->header('application/json');
# print header(-type => "application/json", -status => "200 OK");



#
# Default configuration values
#
$myconfig->{"dirFlows"}        = "./flows";
$myconfig->{"dirMusicOndHold"} = "./flows";
$myconfig->{"dirTracks"}       = "./flows";
$myconfig->{"logServices"}     = 1;





read_config();


	
	
debug_to_console("Action -> " . $myaction);


if (!$myaction){
    debug_to_console("Servertools ->  no action received");
}elsif($myaction eq "save"){
	save_flow();
}elsif ($myaction eq "read"){
	read_flow();
}elsif ($myaction eq "showdir"){
	show_dir("showdir");	
}elsif ($myaction eq "showdirmoh"){
	show_dir("showdirmoh");	
}elsif ($myaction eq "showdirtrack"){
	show_dir("showdirtrack");	
}elsif ($myaction eq "upload"){
	upload_flow();	
}elsif ($myaction eq "readconfig"){
	#read_config();		
}else{
    debug_to_console("Servertools ->  invalid action ");
}

debug_to_console("End of transaction -> " . $myaction);

		

 sub save_flow {
	my $myfile = $mycgi->param('name'); 
	my $mydata = $mycgi->param('data'); 	
	
	debug_to_console("save -> file -> " . $myfile);
	debug_to_console("save -> data -> " . $mydata);

	if(!$myfile){
		debug_to_console("save -> error file name is null ");	
		return;
	}
	
	if (substr($myfile, -4) != ".xml"){
		$myfile = $myfile . "xml";
	}
	
	if (!$mydata){
		debug_to_console("save -> error data to save is null ");	
		return;	
	}
	open  (FH , '>', $myconfig->{"dirFlows"} . '/' . $myfile);
	print FH $mydata;
	close (FH);
	
 }


sub show_dir{

	my ($mychoice) = @_;
	my $mydir;
	
	if ($mychoice=="showdir")
	{
		$mydir = $myconfig->{"dirFlows"};
	}
	elsif ($mychoice=="showdirmoh")
	{
		$mydir = $myconfig->{"dirMusicOndHold"};	
		$mydir = $myconfig->{"dirFlows"};		
	}
	elsif ($mychoice=="showdirtrack")
	{	
		$mydir = $myconfig->{"dirTracks"};	
		$mydir = $myconfig->{"dirFlows"};		
	}
	else
	{
		return;
	}
	
	debug_to_console("show dir  -> start -> " . $mydir);	
	
	if(!$mydir){
		debug_to_console("read -> error file name is null ");	
		return;
	}
	
	opendir (DIR, $mydir) or die $!;
	my @myfiles = readdir(DIR);
	
	shift(@myfiles);
	shift(@myfiles);	

	print encode_json(\@myfiles);
	debug_to_console(encode_json(\@myfiles));
	debug_to_console("numero de archivos -> " . scalar(@myfiles));
	closedir(DIR);
	
	debug_to_console("show dir  -> end");		
}

sub upload_flow{

	debug_to_console("Upload -> Start" );
	
	
	my $myfile   = $mycgi->param('myfile');
	
	if (!$myfile){
		debug_to_console("Upload -> Error : empty filename received" );		
		return;
	}
	
	my $dir         = $myconfig->{"dirFlows"};

	debug_to_console("Upload -> File : " . $myfile);

	
	my $filehandle = $mycgi->upload('myfile');
	
	debug_to_console("Upload -> FileHandle : " . $filehandle);
	
	open ( UPLOADFILE, ">$dir/$myfile" ) or die "$!";
	binmode UPLOADFILE;

	while ( <$filehandle> )
	{
	print UPLOADFILE;
	debug_to_console("Upload -> pasa" );		
	}

	close UPLOADFILE;

	debug_to_console($filehandle);	

	debug_to_console("Upload -> Flow Load Succefully" );		
}


sub read_flow{
	my $myfile = $mycgi->param('flow'); 	
	
	debug_to_console("read -> file -> " . $myconfig->{"dirFlows"} . '/' . $myfile);

	if(!$myfile){
		debug_to_console("read -> error file name is null ");	
		return;
	}
	
	if (substr($myfile, -4) != ".xml"){
		$myfile = $myfile . "xml";
	}
	

	open  (DATA , '<', $myconfig->{"dirFlows"} . '/' . $myfile);
	print <DATA>;
	close (DATA);
	
	debug_to_console("read -> end of read");		
}

sub debug_to_console {
    my ($data) = @_;
	
	# if (!$myconfig->{"logServices"}){
		# return;
	# }
	
	#my $dt     = DateTime->now; 
	#my $mydate = $dt->ymd('-') . ' ' . $dt->hms(':');
	
	my $mydate = localtime();
	
	open  (FH , '>>', "servertools.log");
	print FH $mydate . " - " . $data . "\r\n";
	close (FH);
}

sub read_config{
	
	debug_to_console("read_config -> start");
	
	my $myjson;
	my $mydata;
	
	debug_to_console("read_config -> open file");	
	
	local $/ = undef;	
	open  (FHJ , '<', "intellasoftblocks.MetaData.js") or die "ajua";
	$myjson = <FHJ>;
	close (FHJ);
	
	debug_to_console("read_config -> close file ");		
	debug_to_console("read_config -> decode  file ->" . $myjson);		
	
	$mydata = decode_json($myjson);
	
	debug_to_console("read_config -> after decode");	
	debug_to_console($mydata);

	# my $llave;
	
	# foreach $llave (keys $mydata){
		# debug_to_console("value is -- $llave -->  $mydata->{$llave} \r\n" );
	# }

	if (exists($mydata->{"dirFlows"})) {
		$myconfig->{"dirFlows"} = $mydata->{"dirFlows"}	;
		debug_to_console("read_config -> dirFlows exists");
	}

	if (exists($mydata->{"dirMusicOndHold"})) {
		$myconfig->{"dirFlows"} = $mydata->{"dirMusicOndHold"}	;
		debug_to_console("read_config -> dirMusicOndHold exists");
	}

	if (exists($mydata->{"dirTracks"})) {
		$myconfig->{"dirFlows"} = $mydata->{"dirTracks"}	;
		debug_to_console("read_config -> dirTracks exists");
	}
	
	if (exists($mydata->{logServices})) {
		$mydata->{logServices} = uc($mydata->{logServices});
		if ($mydata->{logServices} == "true") {	
			$myconfig->{logServices} = 1;
		}else{
			$myconfig->{logServices} = 0;		
		}
		debug_to_console("read_config -> logservices exists");
	}

	# my $existe;
	# $existe = $mydata->{logServices};
	# debug_to_console("read_config -> read -> existe var     ->" . $existe . "-<");			
	
	
	
	# debug_to_console("read_config -> read -> dirFlows        ->" . $mydata->{"dirFlows"} . "-<");	
	# debug_to_console("read_config -> read -> dirMusicOndHold ->" . $mydata->{"dirMusicOndHold"} . "-<");		
	# debug_to_console("read_config -> read -> dirTracks       ->" . $mydata->{"dirTracks"} . "-<");			
	# debug_to_console("read_config -> read -> logServices     ->" . $mydata->{"logServices"} . "-<");
	
	debug_to_console("read_config -> end ----");	

	
	return $mydata;

}
