
//var matchID = prompt("Enter a match ID to call via the match API"); 
var matchID = 2195248296

//var timeline = prompt("Do you want timeline data? (y/n)");
var TL_bool = true;

//var TL_bool;
//switch(timeline) {
//  case 'Y':
//  case 'y':
//    TL_bool = true;
//    break;
//  case 'N':
//  case 'n':
//    TL_bool = false;
//    break;
//  default:
//    break;
//}

var api_key = prompt("Enter your api key provided by Riot");

var matchAPI = 'https://na.api.pvp.net/api/lol/na/v2.2/match/' + matchID +'?includeTimeline=' + TL_bool +'&api_key=' +api_key;

var match_results;

function call_api() { 
  $.getJSON( matchAPI, results);
};

function results(APIresults) {
    //console.log("Load was performed.");
    //$.each( APIresults, function( index, value ) {
      //console.log( index + ": " + value );
      //if (index === 'participants') {
      //$.each(APIresults.participants, function (index, value) {
      //console.log( index + ": " + value );
      //});
      //}
    //});
    $.each( APIresults.participants, function() {
      if (APIresults.participants.spell1Id === 11 || APIresults.participants.spell2Id === 11) {
        console.log(APIresults.participants.participantId);
        console.log("Smite!");
      }
    });
};

//function results(APIresults) {
  //var match_results = APIresults;

// iterate through match_results object
  //for (i in match_results) {
    //document.write(match_results[i].name + "<br />");
    //document.body.innerHTML.write = match_results[i];
 // }
  //var Participants =  match_results[0];
 // for(i in Participants) {
  //  if(Participants[i] === '11') {
  // console.log("Smite!");
   // }
 // }
//}


