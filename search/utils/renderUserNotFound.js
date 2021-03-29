function renderUserNotFound() { // quando usuario nao foi encontrado

  let dataUser = document.querySelector('.datas-user');
  let content = `
    <h4>Usuário não encontrado!</h4>
  `
  dataUser.innerHTML = content;

}
