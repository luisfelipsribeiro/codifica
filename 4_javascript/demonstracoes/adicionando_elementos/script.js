function addItemNaLista() {
  //criando um elemento do tipo "li"
  var novoItem = document.createElement("li");

  //adiciona o texto no item da lista (li)
  novoItem.appendChild(document.createTextNode("Novo item na lista"));

  //pegando a lista pelo id
  var lista = document.getElementById("lista");

  //adiciona o item da lista (li) na lista (ul)
  lista.appendChild(novoItem);
}
