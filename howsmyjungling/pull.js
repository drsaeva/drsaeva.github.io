
//var matchID = prompt("Enter a match ID to call via the match API"); 
var matchID = 2195248296

//var timeline = prompt("Do you want timeline data? (y/n)");
var timeline = true;

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
  $.getJSON( matchAPI, results(APIresults ) {
    console.log("Load was performed.");
    var match_results = [];
    $.each( APIresults, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
    $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
   // document.body.innerHTML = JSON.stringify(match_results);
  });
}



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


