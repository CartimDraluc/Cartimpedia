/*DISABLE RIGHT CLICK & INSPECT ELEMENTS*/
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