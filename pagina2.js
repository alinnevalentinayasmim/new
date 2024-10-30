function criaCartao(Categoria,Pergunta,Resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML =  `
      <div class="conteudo-cartao">
      <h3>${Categoria}</h3>
    <div class="pergunta-cartao">
      <p>${Pergunta}</p>
    </div>
    <div class="resposta-cartao">
      <p>${Resposta}</p>
      </div>
  </div>
     `
     container.appendChild(cartao);
  }
  