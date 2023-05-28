function openTab(evt, ratioCat) {

  // Get all elements with class="tabcontent" and hide them
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Get all elements with class="tablinks" and remove the class "active"
  var tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(ratioCat).style.display = "block";
  evt.currentTarget.className += " active";
}

function divide(numerator, denominator, out_ratio) {
  // get numerator and denominator
  var nume = parseFloat(document.getElementById(numerator).value);
  var deno = parseFloat(document.getElementById(denominator).value);

  // get output container
  var container = document.getElementById(out_ratio);
  console.log(nume + " " + deno);
  var raw_answer = nume/deno;
  
  // rounds to 4 decimal places/remove trailing zeros
  var answer = (Number(raw_answer) === parseInt(raw_answer)) ? parseInt(raw_answer) : Number(raw_answer.toFixed(4));
  container.textContent = "= " + answer;
}

document.addEventListener("DOMContentLoaded", function() { //checks if DOM content is loaded then clicks default tab
  document.getElementById("defaultTab").click();
});