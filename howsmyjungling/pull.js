
var matchID = prompt("Enter a match ID to call via the match API"); 
/* var matchID =  2134410987 */
var timeline = prompt("Do you want timeline data?");
/* var api_key = prompt("Enter your api key provided by Riot"); */
var api_key = '7a70a3f5-72e7-4286-807d-a3aca0e2c863';
var matchAPI = 'https://na.api.pvp.net/api/lol/na/v2.2/match/' + matchID +'?includeTimeline=' + timeline +'&api_key=' +api_key;

var match_results;

function call_api() { 
  $.getJSON( matchAPI, results);
  
}

function results(APIresults) {
  match_results = APIresults;
  alert( "Load was performed." );
  document.body.innerHTML = JSON.stringify(match_results);
};

