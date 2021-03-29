let btnSearch = document.querySelector('.btn-search');
btnSearch.addEventListener('click', () => {

  let nickName = document.querySelector('.input-name').value;

  if(!nickName) { // vazio
    alert('Favor digitar o nickname');
    return;
  }

  getUser(nickName).then((resp) => {
    // console.log(resp) mostra as informacoes que precisamos, qual vamos utilizar
    if(!resp) {
      renderUserNotFound();
    }
    renderUser(resp.name, resp.public_repos, resp.avatar_url, resp.login);
  });

});

// const verifyQtdRepos = (qtd) => {
//   return qtd <= 1 ? 'repositório':'repositórios';
// };

// function renderUser(name, qtd, urlPhoto) {

//   let dataUser = document.querySelector('.datas-user');
//   let content = `
//     <img class="img-user" src="${urlPhoto}" alt="">
//     <a href="/repositories/index.html">
//       <h2 class="name-user">${name}</h2>
//     </a>
//     <a href="/repositories/index.html">
//       <h2 class="qtd-repositorio">${qtd}  ${verifyQtdRepos(qtd)}</h2>
//     </a>
//   `
//   dataUser.innerHTML = content;
//   return;
// }


// function renderUserNotFound() { // quando usuario nao foi encontrado

//   let dataUser = document.querySelector('.datas-user');
//   let content = `
//     <h4>Usuário não encontrado!</h4>
//   `
//   dataUser.innerHTML = content;

// }

// async function getUser(user) { // criando funcao assincrona que chama a requisicao API no momento que ordena
//   try {
//     const response = await fetch(`https://api.github.com/users/${user}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     alert('Ocorreu um erro!');
//   }
// }
