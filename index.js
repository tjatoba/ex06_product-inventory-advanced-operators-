const criarPeca = () => {
  const peca = {
    nome: prompt("Digite o nome da peça de roupa:").toLowerCase(),
    cor: prompt("Digite a cor da peça de roupa:").toLowerCase(),
    referencia: parseInt(prompt("Digite a referência da peça de roupa:")),
  };
  return peca;
};

const adicionarPeca = (estoque) => {
  const novaPeca = criarPeca();
  estoque.push(novaPeca);
  console.log("Peca adicionada ao estoque:", novaPeca);
};

const removerPeca = (estoque) => {
  const referencia = parseInt(
    prompt("Digite a referência da peça que deseja remover:")
  );

  /*Agora, ao invés de um loop, o código utiliza a função findIndex para buscar a referência da peça 
  de forma mais eficiente e utiliza o spread operator para exibir a peça removida do estoque. 
  Além disso, a desestruturação foi aplicada na hora de criar e exibir as peças.*/

  const index = estoque.findIndex((peca) => peca.referencia === referencia);

  index !== -1
    ? console.log("Peca removida do estoque:", ...estoque.splice(index, 1))
    : console.log("Peca não encontrada no estoque.");
};

const exibirEstoque = (estoque) => {
  console.log("Estoque atual:", estoque);
};

const gerenciarEstoque = () => {
  const estoque = [];

  while (true) {
    const opcao = prompt(
      "Escolha uma opção:\n1. Adicionar peça\n2. Remover peça\n3. Exibir estoque\n4. Sair"
    );

    switch (opcao) {
      case "1":
        adicionarPeca(estoque);
        break;
      case "2":
        removerPeca(estoque);
        break;
      case "3":
        exibirEstoque(estoque);
        break;
      case "4":
        return; // Sair do loop
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
};

gerenciarEstoque();
