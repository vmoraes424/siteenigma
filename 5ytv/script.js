document.querySelector('#btn').addEventListener('click', funcao);
    function funcao() {
      var resposta = prompt('Resposta:')
      resposta = resposta.toLowerCase()
      if (resposta == 'a cigarra e a formiga') {
        window.location.href = "https://enigmabr.000webhostapp.com/bws4/nona-pagina.html";
      } else {
        alert('Nop')
      }
      if (resposta == 0) {
        alert('Tu não escreveu nada')
      }
    }
    function hint() {
    alert('Se você esqueceu de algum número, recomendo ir às paginas anteriores')
  }