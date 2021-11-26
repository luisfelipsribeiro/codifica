function mostrarMensagem() {
  //obtém elemento com id="mensagem"
  var elementoMensagem = document.getElementById("mensagem");

  //obtém o valor da propriedade value do elemento
  var mensagem = elementoMensagem.value;

  //verifica se a mensagem está em branco
  if (mensagem != "") {
    alert(mensagem);
  }
}


