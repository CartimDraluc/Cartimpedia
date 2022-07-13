//Top Navigation Bar
function iconClick(){
    location.href="index.html";
}
function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
     }
}

// FAQ Section
$(document).ready(function(){
  $('#FAQs_container').hide();
  $('#GoToFAQ').click(function(){
    $('#main_container').hide();
    $('#FAQs_container').show();
  });
  $('#BackToMain').click(function(){
    $('#main_container').show();
    $('#FAQs_container').hide();
  });
  $(".flip").click(function(){
    $(this).next().find(".panel").slideToggle("slow");
  });
});

/*Dark Mode
function DarkMode() {
  var element = document.body;
  var element2 = document.section;
  element.classList.toggle("darkmode");
  element2.classList.toggle("darkmode");
}*/




// ---- ABOUT US PAGE ----
// Anchor Tags Not Allowed
function NA(){
  alert('You are currently not allowed. Sorry mate.')
}

// Image Tooltip
$('text').mousemove(function(e){
  var y = e.pageY - this.offsetTop;
  var x = e.pageX - this.offsetLeft;
  $('.US_flag').css({
    'left': x + 'px',
    'top': y + 'px',
  })
})