function criaCartao(categoria.pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.localName = 'cartao';
    cartao.innerHTML = `
   <div class="conteudo-cartao">
<h3>categorias</h3>
<div class="pergunta-cartao"></div>
<p>pergunta</p>
</div>
<div class="resposta-cartao">
    <p>resposta</p>
</div>
</div>
`
container.appendChild(cartao);
}
