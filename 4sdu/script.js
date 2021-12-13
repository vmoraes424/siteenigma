document.querySelector('#btn').addEventListener('click', funcao);
    function funcao() {
      var resposta = prompt('Resposta:')
      resposta = resposta.toLowerCase()
      if (resposta == 'sabonete') {
        window.location.href = "https://enigmabr.000webhostapp.com/5ytv/oitava-pagina.html";
      } else {
        alert('Nop')
      }
      if (resposta == 0) {
        alert('Tu não escreveu nada')
      }
    }
    function hint() {
      alert('Pensa em contas, matemáticas?')
      alert('Grupos, talvez?')
    }