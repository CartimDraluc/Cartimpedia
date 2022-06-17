var song = document.getElementById('song')
var buttonContainer = document.getElementById('button_container')
function RickTime(){
    song.play();
}

$(document).ready(function(){
    $("#RickBG").hide();
    $("#button").click(function(){
      $("#button_container").hide();
      $("#RickBG").show();
    });
});