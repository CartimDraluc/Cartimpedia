//Navigation Bar
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

// Not Allowed
function NA(){
  alert('You are currently not allowed! Sorry mate. :(')
}


// FAQ
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