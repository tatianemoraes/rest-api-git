function renderRepos(nickName, repos) {
  let createCards = document.querySelector('.contents');

  let render = repos.map((repo, index) => {
    return `
      <div class="cards">
        <h3>${nickName}</h3>
        <a href="${repo.svn_url}" target="_blank">
          <h2>${repo.name}</h2>
        </a>
      </div>`
  });
  createCards.innerHTML = render.join('');
}
