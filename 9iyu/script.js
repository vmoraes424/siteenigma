document.querySelector('#btn').addEventListener('click', funcao);
    function funcao() {
      var resposta = prompt('Resposta:')
      resposta = resposta.toLowerCase()
      if (resposta == 'our love story') {
        window.location.href = "https://enigmabr.000webhostapp.com/4sdu/setima-pagina.html";
      } else {
        alert('Wrong')
      }
      if (resposta == 0) {
        alert('Tu não escreveu nada')
      }
      switch(resposta) {
        case 'nossa historia de amor':
        case 'nossa história de amor':
          alert('Não tem um padrão nessa fase que não tinha nas anteriores?')
      }
      if(resposta == 'our love history'){
        alert('history????????')
      }
    }
    function hint() {
    alert('O google é seu amigo')
  }