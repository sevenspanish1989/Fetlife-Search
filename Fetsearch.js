//This is an iMacros script to search for Fetlife users by age/role and location
//This script will **ONLY** work in the Firefox version of iMacros!
//It's not very fast, but it does automate the process
//I have been using it for a while and haven't been banned, but...
//**DISCLAIMER: USE AT YOUR OWN RISK**


//***************************************************
//****************  INSTRUCTIONS  *******************
//***************************************************
// 1: Download Firefox and the iMacros addon
// 2: Download and open fetsearch.js
// 3: Click the script, click the Manage tab, click Edit Macro
// 4: Fill in the values (explained below), click "Save & Close" button
// 5: Open Fetlife, sign in, go to Places at the top
// 6: Click a location from the list
// 7: (Optional but recommended) Click a city
// 8: Make sure that's the ONLY tab open in Firefox
// 9: Play the script


//************ VALUES *************

var age = '28F';
// What you'll be searching for. Can be age, age + gender, OR role
// Examples:
// var age = '25M';
// var age = '32';
// var age = 'Sub';

var wait = 2;
// How long (in seconds) the script will wait after clicking the "Next->" button
// Only whole numbers accepted
// Increase this if you get errors, decrease if you have a superfast computer/connection

var pages = 20;
// How many tabs the script will open before stopping
// Lower this if you have a slower computer
// Keep in mind you will have to close each tab manually

// ********* END OF VALUES YOU NEED TO ENTER ***********


var tab = 2;
var places = 0;
var x = 1;

GOTO2: do {
var pos = 1;


var Fextract=1;
GOTO1: do {
	iimSet( "age" , age );
	iimSet( "pos" , pos );
	iimPlay("CODE: TAG POS={{pos}} TYPE=div ATTR=class:fl-flag__body&&TXT:*{{age}}* EXTRACT=HTM ");
	var Fextract = iimGetLastExtract(1);
	if (Fextract==null||Fextract=='#EANF'){
		break GOTO1};
	var s = Fextract; 
	var matches = s.match(/href="(.*?)">/i); 
	if (matches==null){
		break GOTO1};
	matches[1];
	pos++;
	iimSet( "!VAR5" , pos );
	iimPlay("CODE: TAB OPEN");
	iimSet( "tab", tab );
	iimPlay("CODE: TAB T={{tab}}");
	tab++;
	iimSet( "!VAR1" , matches[1] );
	iimPlay("CODE: URL GOTO=fetlife.com{{!VAR1}}");
	x++;
	if (x==pages){
		break GOTO2};
	iimSet( "places" , places );
	iimPlay("CODE: TAB T={{places}}");
	places--
	iimPlay("CODE: WAIT SECONDS=1");
} while (Fextract!="#EANF#");

iimPlay("CODE: TAG POS=1 TYPE=A ATTR=TXT:Next<SP>→");
iimSet( "wait" , wait );
iimPlay("CODE: WAIT SECONDS={{wait}}");
} while (x!=pages);