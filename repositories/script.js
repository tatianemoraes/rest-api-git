let nickName =
  window.location.search !== ``
  ? window.location.search.split(`=`)[1]
  : window.location.href = `/search/index.html`

  getRepositories(nickName).then((repos) => {
    if(!repos) {
      alert('Nao foi encontrado nenhum repositorio!');
    }
    renderRepos(nickName, repos);
  });

  // renderRepos(nickName, repos)
// url para uso
// https://api.github.com/users/kelvinmusselli/repos
