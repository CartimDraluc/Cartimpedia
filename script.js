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

function NA(){
  alert('You are currently not allowed to enter! Sorry mate.')
}