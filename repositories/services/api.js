async function getRepositories(nickName){
  try {
    const response = await fetch(`https://api.github.com/users/${nickName}/repos`);
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Ocorreu um erro');
  }
}
