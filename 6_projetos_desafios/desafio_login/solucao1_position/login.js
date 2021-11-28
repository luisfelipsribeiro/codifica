function login() {
  email = document.getElementById("email").value;
  senha = document.getElementById("senha").value;

  if (email == "caio@basesocial.org" && senha == "base123") {
    alert("Usuário logado com sucesso!");
  } else {
    alert("Algo deu errado, verifique o e-mail e a senha!");
  }
}
