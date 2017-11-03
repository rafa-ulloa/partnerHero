$(function(){
 
  var loadRanking = function(yourRanking){
  	var maxRanking = 10;
    var rankingContainer = $("#yourRankingContainer");
    rankingContainer.empty();
    for(i=1; i<=maxRanking; i++){
    	var starIcon = $("<i></i>");
      starIcon.attr("id", "star-" + i);
      starIcon.addClass("fa");
      rankingContainer.append(starIcon);
    	if (i <= yourRanking){
      	starIcon.addClass("fa-star");
      }
      else {
      	starIcon.addClass("fa-star-o");
      }
    }
  }
 
 var movieData = $.getJSON(
  	"https://www.theimdbapi.org/api/movie?movie_id=tt3501632",
    function(data){
  	$("#title").text(data.title);
    $("#scoreNumber").text(data.rating);
    loadRanking(Math.floor(parseInt(data.rating)));
    $("#loading").hide();
    $("#movieContainer").show();
  });
 
  $("#yourRankingContainer").on("click", "i", function(){
  	var starID = $(this).attr("id");
    var rating = starID.substr(5);
    loadRanking(rating);
  });
  
  
});
