var song = document.getElementById('song')
var buttonContainer = document.getElementById('button_container')
function RickTime(){ /* Play the song when you click the button */
    song.play();
}

$(document).ready(function(){ /* Hide the button and show the Rickroll Gif */
    $("#RickBG").hide();
    $("#button").click(function(){
      $("#button_container").hide();
      $("#RickBG").show();
    });
});