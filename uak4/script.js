document.querySelector('#btn').addEventListener('click', funcao);
    function funcao() {
      var resposta = prompt('Resposta:')
      resposta = resposta.toLowerCase()
      if (resposta == '548') {
        window.location.href = "https://enigmabr.000webhostapp.com/1hhb/quarta-pagina.html";
      } else {
        alert('Nop')
      }
      if (resposta == 0) {
        alert('Tu não escreveu nada')
      }
      else if(resposta == 839){
        alert('Tá certo, mais ou menos, lembra da dica da primeira página...')
      }
    }
    function hint() {
    alert('E se a gente falasse na língua dos computadores?')
  }