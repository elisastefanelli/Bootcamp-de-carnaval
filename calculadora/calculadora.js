const prompt = require('prompt-sync')();

// exibe a mensagem de boas vindas
console.log('Boas vindas!');

// declara variaveis
var rodando = true;
var listaIngredientes = [];
var listaValores = [];
var ingrediente = {
  nome: '',
  preçoPacote: 0,
  quantidadePacote: 0,
  quantidadeUsada: 0,
  preçoG: 0,
  custo: 0
};

// loop principal para inserir ingredientes
while (rodando == true) {
  ingrediente.nome = prompt('digite o ingrediente: ');
  ingrediente.preçoPacote = prompt('digite o preço do produto: ');
  ingrediente.quantidadePacote = prompt('digite quantas gramas tem o pacote: ');
  ingrediente.quantidadeUsada = prompt(
    'digite a quantidade utilizada em gramas: '
  );
  ingrediente.preçoG = ingrediente.preçoPacote / ingrediente.quantidadePacote;
  ingrediente.custo = ingrediente.quantidadeUsada * ingrediente.preçoG;

  // insere nas listas
  listaIngredientes.push(ingrediente['nome']);
  listaValores.push(ingrediente['custo']);

  console.log('');
  console.log('Item adicionado com sucesso!');

  // verificacao de saida
  let sn = prompt('Gostaria de adicionar outro ingrediente? S/N: ');
  console.log('');
  if (sn[0] == 'n' || sn[0] == 'N') {
    rodando = false;
  }
}

// mostra a lista de ingredientes com seus respectivos custos
console.log('');
console.log('-=-=-=-=-=-=-=-=-=-=-');
for (let i = 0; i < listaIngredientes.length; i++) {
  console.log(listaIngredientes[i] + ': R$ ' + listaValores[i].toFixed(2));
}

var soma = 0;
for (let valor of listaValores) {
  soma += valor;
}

// mostra o custo total
console.log('Custo Total: R$ ' + soma.toFixed(2));
