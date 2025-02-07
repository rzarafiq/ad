const ad1 = document.getElementById("ad1");
const cdv = document.getElementById("cdv");

function ok1() {
  let kod = "";
  let yazi = ad1.value;

  for (let i = 0; i < yazi.length; i++) {
    kod += "<tr><td>";
    for (let j = 0; j < yazi.length; j++) {
      if (i === j) {
        kod += yazi[j].toUpperCase();
      } else {
        kod += yazi[j];
      }
    }
    kod += "</td></tr>";
  }
  cdv.innerHTML = kod;
}

const ad2 = document.getElementById("ad2");
const soz = document.getElementById("soz");
const colors = ["red", "blue", "green", "orange", "purple", "pink", "brown", "cyan", "magenta", "yellow"];

function ok2() {
  let kod = "";
  let yazi = ad2.value;

  for (let i = 0; i < yazi.length; i++) {
    kod += `<span style="color:${colors[i % colors.length]}">${yazi[i]}</span>`;
  }
  soz.innerHTML = kod;
}
