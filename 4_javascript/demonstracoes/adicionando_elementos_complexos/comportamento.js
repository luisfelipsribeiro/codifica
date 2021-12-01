function adicionarItemDoJeitoSafado() {
  var li = document.createElement('li');
  li.innerHTML = `
                  <img src="logo.jpeg" alt="">
                  <p>Um texto qualquer</p>
                  <p>Um segundo texto</p>
                  `;

  var lista = document.getElementById("lista");
  lista.appendChild(li);
}

function adicionarItem() {

  //(modo mais moderno e indicado para HTML5)
  var modeloLi = document.getElementById("modeloLi");

  //clona o modelo para um novo objeto
  var novoLi = modeloLi.content.cloneNode(true);

  var lista = document.getElementById("lista");
  lista.appendChild(novoLi);
}
