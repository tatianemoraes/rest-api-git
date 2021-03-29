async function getUser(user) { // criando funcao assincrona que chama a requisicao API no momento que ordena
  try {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Ocorreu um erro!');
  }
}

// let user = {
//   name:'kelvin'
// }

// fetch('https://api.github.com/users', {
//   method:'POST',
// //  body:user,
//   body:{
//     name:'kelvin'
//   },
//   headers: {
//     'Content-Type':'application/json'
//   }
// })


// fetch('https://api.github.com/users/1', {
//   method:'DELETE',
//   headers: {
//     'Content-Type':'application/json'
//   }
// })

// fetch('https://api.github.com/users/1', {
//   method:'PUT',
//   body:{
//     name:'Tati'
//   },
//   headers: {
//     'Content-Type':'application/json'
//   }
// })


// fetch('https://api.github.com/users/1', {
//   method:'PATCH',
//   body:{
//     fullname:'Tatiane'
//   },
//   headers: {
//     'Content-Type':'application/json'
//   }
// })

// fetch('https://api.github.com/users', {
//   method:'GET',
//   headers: {
//     'Content-Type':'application/json'
//   }
// })

// fetch('https://api.github.com/users/1', {
//   method:'GET',
//   headers: {
//     'Content-Type':'application/json'
//   }
// })
