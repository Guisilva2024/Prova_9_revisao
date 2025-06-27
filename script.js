// Produto
class Produto {
  constructor(nome, preco, categoria) {
    this.nome = nome;
    this.preco = parseFloat(preco);
    this.categoria = categoria;
  }

  exibirDetalhes() {
    return `Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Categoria: ${this.categoria}`;
  }
}

// Lista de produtos
const produtos = [];

// Adicionar Produto
function adicionarProduto() {
  const nome = document.getElementById("nome").value;
  const preco = document.getElementById("preco").value;
  const categoria = document.getElementById("categoria").value;

  if (nome && preco && categoria) {
    const novoProduto = new Produto(nome, preco, categoria);
    produtos.push(novoProduto);

    console.log("Produto adicionado:", novoProduto);

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("categoria").value = "";

    listarProdutos();
  } else {
    alert("Preencha todos os campos!");
    console.warn("Tentativa de adicionar produto com campos vazios.");
  }
}

// Listar Produtos
function listarProdutos() {
  const lista = document.getElementById("listaProdutos");
  lista.innerHTML = "";

  console.log("Lista completa de produtos:");
  produtos.forEach((produto) => {
    const item = document.createElement("li");
    item.textContent = produto.exibirDetalhes();
    lista.appendChild(item);
    console.log(produto.exibirDetalhes());
  });
}

// Buscar Produto por Nome
function buscarProduto() {
  const nomeBusca = document.getElementById("buscaNome").value.trim().toLowerCase();
  const resultado = produtos.find(p => p.nome.toLowerCase() === nomeBusca);

  const saida = document.getElementById("resultadoBusca");

  if (resultado) {
    saida.textContent = resultado.exibirDetalhes();
    console.log("Produto encontrado:", resultado.exibirDetalhes());
  } else {
    saida.textContent = "Produto não encontrado.";
    console.warn("Produto não encontrado para nome:", nomeBusca);
  }
}

// Filtrar por Categoria
function filtrarPorCategoria() {
  const categoria = document.getElementById("filtroCategoria").value.trim().toLowerCase();
  const listaFiltrada = document.getElementById("listaFiltrada");
  listaFiltrada.innerHTML = "";

  const filtrados = produtos.filter(p => p.categoria.toLowerCase() === categoria);

  console.log(`Produtos filtrados por categoria "${categoria}":`, filtrados);

  if (filtrados.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Nenhum produto encontrado.";
    listaFiltrada.appendChild(item);
    return;
  }

    filtrados.forEach(produto => {
    const item = document.createElement("li");
    item.textContent = produto.exibirDetalhes();
    listaFiltrada.appendChild(item);
  }); 

} 

function resumoEstatistico() {
  const resumo = document.getElementById("resumo");

  if (produtos.length === 0) {
    resumo.textContent = "Nenhum produto cadastrado.";
    return;
  }

  const total = produtos.reduce((acc, produto) => acc + produto.preco, 0);
  const quantidade = produtos.length;
  const media = total / quantidade;

  resumo.textContent = `Total de produtos: ${quantidade} | Soma dos preços: R$${total.toFixed(2)} | Preço médio: R$${media.toFixed(2)}`;

  console.log("Resumo Estatístico:", resumo.textContent);
}

