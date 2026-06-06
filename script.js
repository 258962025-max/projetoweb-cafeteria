// Início do Banco de Dados 

let produtos = JSON.parse(localStorage.getItem("produtos")) || [
    { id: 1, nome: "Café Expresso", preco: 5.00 },
    { id: 2, nome: "Cappuccino", preco: 8.00 }
];

function salvarBanco() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

function mostrarProdutos() {
    const container = document.getElementById("lista-produtos");

    if (!container) return;

    container.innerHTML = "";

    produtos.forEach(p => {
        container.innerHTML += `<p>${p.nome} - R$ ${p.preco.toFixed(2)}</p>`;
    });
}

// Fim do Banco de Dados

function adicionarProduto(nome, preco) {
    produtos.push({
        id: Date.now(),
        nome,
        preco
    });

    salvarBanco();
    mostrarProdutos();
}

function add() {
    const nome = document.getElementById("nome").value;
    const preco = parseFloat(document.getElementById("preco").value);

    adicionarProduto(nome, preco);
}

mostrarProdutos();

console.log("Site carregado com sucesso!");