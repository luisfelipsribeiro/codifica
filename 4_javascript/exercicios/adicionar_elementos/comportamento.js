function adicionarH1() {
  var h1 = document.createElement("h1");
  h1.appendChild(document.createTextNode("Elemento H1 adicionado pelo JS"));

  var areaH1 = document.getElementById("area_h1");
  areaH1.appendChild(h1);
}

function adicionarH2() {
  var h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Elemento H2 adicionado pelo JS"));

  var areaH2 = document.getElementById("area_h2");
  areaH2.appendChild(h2);
}

function adicionarP() {
  var p = document.createElement("p");
  p.appendChild(document.createTextNode("Elemento P adicionado pelo JS"));

  var areaP = document.getElementById("area_p");
  areaP.appendChild(p);
}

function adicionarInput() {
  var input = document.createElement("input");
  input.type = "password";

  var areaInput = document.getElementById("area_input");
  areaInput.appendChild(input);
}
