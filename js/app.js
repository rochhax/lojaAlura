//@rochhax

let valorFinal = 0;

function adicionar(){
    let nomeProdutoValor = document.getElementById('produto').value;
    let qnt = document.getElementById('quantidade').value;

    //Dividir 
    let partes = nomeProdutoValor.split('-');
    let nomeProduto = partes[0];
    let valor = parseInt(partes[1].replace('R$', ''));
    let subTotal = valor * qnt;

    let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
            <section class="carrinho__produtos__produto">
            <span class="texto-azul">${qnt}x</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span>
            </section>`;
    
    valorFinal = valorFinal + subTotal
    let alterarValorTotal = document.getElementById('valor-total');
    alterarValorTotal.innerHTML = `R$ ${valorFinal}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
    let alterarValorTotal = document.getElementById('valor-total');
    alterarValorTotal.innerHTML = 'R$ ----';
}