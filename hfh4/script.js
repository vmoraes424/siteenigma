document.querySelector('#btn').addEventListener('click', funcao);
    function funcao() {
      var resposta = prompt('Resposta:')
      resposta = resposta.toLowerCase()
      if (resposta == 'elefante') {
        window.location.href = "https://enigmabr.000webhostapp.com/uak4/terceira-pagina.html";
      } else {
        alert('Nop')
      }
      if (resposta == 0) {
        alert('Tu não escreveu nada')
      }
    }
    function hint() {
    alert('Se tu precisar de dica nessa vc é um completo tapado.')
  }