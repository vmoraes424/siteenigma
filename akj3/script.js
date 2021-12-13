document.querySelector('#btn').addEventListener('click', funcao);
    function funcao() {
      var resposta = prompt('Resposta:')
      resposta = resposta.toLowerCase()
      if (resposta != '16') {
        alert('Errado.')
      } else {
        alert('Foi difícil pra caramba! Parabéns!')
        window.location.href = "https://enigmabr.000webhostapp.com/4sdu/setima-pagina.html";
      }  
      if (resposta == 0){
        alert('Tu não escreveu nada')
      }
      switch(resposta){
        case 'round 6':
        case 'squid game':
        alert('que tal pesquisar no google????')
        break;
        case 'eu agora':
        alert('KKKKKKKK não, não, bobinho...')
        break;
      }
    }
    function hint() {
    alert('Aqui vai a dica')
  }