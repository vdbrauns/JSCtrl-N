// часы
window.onload = function() {
  setInterval(function() {

    // Minutes
    var minutes = new Date().getMinutes();
    document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;

    // Hours
    var hours = new Date().getHours();
    document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
  }, 1000);
}

var count = 0;
function changecolor(){
if (count == 0) { document.getElementById("desktop").style.backgroundColor = "#499DDA";
count++;
} else if (count == 1) {
  document.getElementById("desktop").style.backgroundColor = "#4C649DA";
count++;
} else if (count == 2) { document.getElementById("desktop").style.backgroundColor = "#DA49CB";
count++;
} else if (count == 3) { document.getElementById("desktop").style.backgroundColor = "#DA4974";
count++;
} else if (count > 3 ) {
count = 0; document.getElementById("desktop").style.backgroundColor = "#323392";
}}
