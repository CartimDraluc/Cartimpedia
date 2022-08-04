function Time(){
    let tables = document.querySelectorAll('td')
  
    tables.forEach(td => {
    let Class = td.textContent
    if( Class == "Sir Arvind"){
      td.style.color = "#fff";
      td.style.backgroundColor = "#333";
      td.style.fontWeight = "bold";
    }
    else if(Class == "Chemistry Class" || Class == "Chemistry Class *4:15"){
      td.style.color = "#fff";
      td.style.backgroundColor = "#333";
      td.style.fontWeight = "bold";
    }
    else if(Class == ""){
        td.style.backgroundColor = "#fff";
    }
  })
}
  
Time()