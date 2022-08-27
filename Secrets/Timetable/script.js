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
      td.style.backgroundColor = "#0d6efd";
      td.style.fontWeight = "bold";
    }
    else if(Class == "Gym Time" || Class == "Starts at 6* Gym Time"){
      td.style.color = "#fff";
      td.style.backgroundColor = "#188050";
      td.style.fontWeight = "bold";
    }
    else if(Class == "IELTS"){
      td.style.color = "#fff";
      td.style.backgroundColor = "#4267B2"
      td.style.fontWeight = "bold";
    }
    else if(Class == ""){
        td.style.backgroundColor = "#fff";
    }
  })
}
  
Time()