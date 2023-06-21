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

function outputTo(out_ratio, raw_answer) {
// get output container
  var container = document.getElementById(out_ratio);

  // rounds to 4 decimal places/remove trailing zeros
  var answer = (Number(raw_answer) === parseInt(raw_answer)) ? parseInt(raw_answer) : Number(raw_answer.toFixed(4));
  console.log(answer);
  if (isNaN(answer)) {
    alert("Invalid Input");
  } else {
    container.textContent = "= " + answer;
  }
}

function divide(numerator, denominator, out_ratio) {
  // get numerator and denominator
  var nume = parseFloat(document.getElementById(numerator).value);
  var deno = parseFloat(document.getElementById(denominator).value);

  outputTo(out_ratio, nume/deno);
}

function subThenDiv(left, right, bottom, out_ratio) {
  var l = parseFloat(document.getElementById(left).value);
  var r = parseFloat(document.getElementById(right).value);
  var b = parseFloat(document.getElementById(bottom).value);

  var ans1 = l - r;
  var ans2 = ans1/b;
  outputTo(out_ratio, ans2);
}

function divThenMult(top, bottom, right) { //not used yet
  var nume = parseFloat(document.getElementById(top).value);
  var deno = parseFloat(document.getElementById(bottom).value);
  var r = parseFloat(document.getElementById(right).value);

  var ans1 = nume/deno;
  var ans2 = ans1*r;
  outputTo(out_ratio, ans2);
}

document.addEventListener("DOMContentLoaded", function() { //checks if DOM content is loaded then clicks default tab
  document.getElementById("defaultTab").click();
});

function clearInputs() {
  var inputElements = document.getElementsByTagName("input");
  
  for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].type == "number") {
      inputElements[i].value = "";
    }
  }

  var outputElements = document.getElementsByClassName("output");

  for (let j = 0; j < outputElements.length; j++) {
    if (outputElements[j].textContent != "=") {
      outputElements[j].textContent = "=";
    }
  }
};

