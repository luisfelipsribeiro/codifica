function adicionarTarefa() {
  var modeloItem = document.getElementById("modeloItem");

  var novoItem = modeloItem.content.cloneNode(true);

  var lista = document.getElementById("lista");
  lista.appendChild(novoItem);
}
