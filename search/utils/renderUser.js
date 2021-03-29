function renderUser(name, qtd, urlPhoto, login) {

  let dataUser = document.querySelector('.datas-user');
  let content = `
    <img class="img-user" src="${urlPhoto}" alt="user-photo">
    <a href="/repositories/index.html?nickname=${login}">
      <h2 class="name-user">${name}</h2>
    </a>
    <a href="/repositories/index.html?nickname=${login}">
      <h2 class="qtd-repositorio">${qtd}  ${verifyQtdRepos(qtd)}</h2>
    </a>
  `
  dataUser.innerHTML = content;
  return;
}
