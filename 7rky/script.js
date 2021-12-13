document.querySelector('#btn').addEventListener('click', funcao);
    function funcao() {
      var resposta = prompt('Resposta:')
      resposta = resposta.toLowerCase()
      if (resposta == 'ubere') {
        window.location.href = "https://enigmabr.000webhostapp.com/bws4/decima-pagina.html";
      } else {
        alert('Nop')
      }
      if (resposta == 0) {
        alert('Tu não escreveu nada')
      }
    }
    function hint() {
    alert('Pareço coordenadas, mas não sou.\nPareço mais uma tabela aleatória, mas não se engane.\nMeu pai foi Giovan Batista, mas me confundem com Blaise.')
  }
  function bola() {
    alert('Uma palavra chave 😉')
  }