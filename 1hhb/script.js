document.querySelector('#btn').addEventListener('click', funcao);
    function funcao() {
      var resposta = prompt('Resposta:')
      resposta = resposta.toLowerCase()
      if (resposta == 'ferrari') {
        window.location.href = "https://enigmabr.000webhostapp.com/9iyu/quinta-pagina.html";
      } else {
        alert('Nop')
      }
      if (resposta == 0) {
        alert('Tu não escreveu nada')
      }
    }
    function hint() {
    alert('Pense como o LINK, pra salvar a Zelda (tava sem criatividade)')
  }