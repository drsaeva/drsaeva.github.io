
var matchID = prompt("Enter a match ID to call via the match API"); 
//var matchID =  2134410987

var timeline = prompt("Do you want timeline data? (y/n)");

var TL_bool;
switch(timeline) {
  case 'Y':
  case 'y':
    TL_bool = true;
    break;
  case 'N':
  case 'n':
    TL_bool = false;
    break;
  default:
    break;
};

// var api_key = prompt("Enter your api key provided by Riot");
var api_key = '7a70a3f5-72e7-4286-807d-a3aca0e2c863';
var matchAPI = 'https://na.api.pvp.net/api/lol/na/v2.2/match/' + matchID +'?includeTimeline=' + TL_bool +'&api_key=' +api_key;

var match_results;

function call_api() { 
  $.getJSON( matchAPI, results);
};

//function results(APIresults) {
//  match_results = APIresults;
//  alert("Load was performed.");
//  document.body.innerHTML = JSON.stringify(match_results);
//};

function results(APIresults) {
  var match_results = $.parseJSON(APIresults);
  alert("Load was performed.");
  //for (i in match_results) {
    //document.write(match_results[i].name + "<br />");
    //document.body.innerHTML.write = match_reuslts[i];
//  var Participants =  match_results[0];
//  for(i in Participants) {
//    if(Participants[i] === '11'
//     alert("Smite!");
//  }
    
  //}
  
};

