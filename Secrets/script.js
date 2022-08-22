document.addEventListener("keypress", e => {
    if(e.key === "Enter") {
        login();
    }
})


$(document).ready(function(){
    $('#Dashboard').hide();
})

function login() {
let un = document.getElementById("username").value;
let pw = document.getElementById("password").value;
if(un =="Cartim" && pw == "Draluc"){
    document.getElementById('success').play();
    setTimeout(() => {
        $('#login').hide();
        $('#Dashboard').show();
    }, 3000);
    newPageTitle = 'Hello Founder!';
    document.querySelector('title').textContent = newPageTitle;
}
else{
    document.getElementById('wrong').play();
    alert("Invalid Username/ password!!");
}
};

/* ---- DISABLE RIGHT CLICK & INSPECT ELEMENT ---- */
$(document).ready(function(){
  $(function() {
        $(this).bind("contextmenu", function(event) {
            event.preventDefault();
        });
    });
});
document.onkeydown = function(e){
  if(event.keyCode == 123){//Disable F12
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;//Disable ctrl+shift+I
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;//Disable ctrl+shift+J
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;//Disable ctrl+U (View Page Source)
  }
}