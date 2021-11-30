function login() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (email == "caio@basesocial.org" && senha == "base123") {
    alert("Usuário logado com sucesso!");
  } else {
    alert("Algo deu errado, verifique o e-mail e a senha!");
  }
}
