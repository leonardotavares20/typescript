// tuple é um array com tamanho e tipos fixos
const dadosCliente1: [number, string] = [1, "Luiz"];
const dadosCliente2: [number, string, string] = [1, "Luiz", "Miranda"];
// const dadosCliente3: [number, string] = ['Luiz', 1]; // Erro de tipos
// const dadosCliente4: [number, string] = [1, 'Luiz', 30]; // Erro de tamanho

// tuples são bem uteis para retornar multiplos valores em funções, onde cada valor retornado tem um tipo específico
function getDataAPIUser(id, name): [number, string] {
  return [id, name];
}

const [id, nome] = getDataAPIUser(2, "João");
console.log(id, nome);

const nameAndAge: readonly [string, number] = ["Luiz", 30];

// nameAndAge.push("Miranda");

// readonly

type Ticket = readonly [number, string, string];

const ticket1: Ticket = [1, "Luiz", "A"];

function resolveTicket(ticket: Ticket) {
  // ticket[0] = 5;
  return [ticket[0], ticket[1], ticket[2]] as const;
}

// tuples vs objects
// eles cumprem a msm funcao,a diferença é que em tuples a ordem importa, já em objetos não
const pessoa1: [string, string, string] = ["Luiz", "30", "London"];
// const pessoa2: { namePerson: string; idade: number } = {
//   namePerson: "Luiz",
//   idade: 30,
// };

// named tuples
type Pessoa = [namePerson: string, idade: string, nacionalidade: string];
type PessoaObj = { namePerson: string; idade: string; nacionalidade: string };

function criarPessoa(args: Pessoa): PessoaObj {
  return {
    namePerson: args[0],
    idade: args[1],
    nacionalidade: args[2],
  };
}

const {
  namePerson: pessoaName,
  idade: pessoaIdade,
  nacionalidade: pessoaNacionalidade,
} = criarPessoa(pessoa1);

// optional elements in tuples
type PessoaOpcional = [
  namePerson: string,
  idade?: number,
  nacionalidade?: string
];

const pessoaOpcional1: PessoaOpcional = ["Luiz"];
const pessoaOpcional2: PessoaOpcional = ["Luiz", 30];
const pessoaOpcional3: PessoaOpcional = ["Luiz", 30, "London"];
// const pessoaOpcional4: PessoaOpcional = []; // Erro, o primeiro elemento é obrigatório
// const pessoaOpcional5: PessoaOpcional = [30, "Luiz"]; // Erro, o primeiro elemento deve ser string

// rest operator em tuples
type NumberTuple = [number, ...number[]];

const numberTuple1: NumberTuple = [1];
const numberTuple2: NumberTuple = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numberTuple3: NumberTuple = []; // Erro, o primeiro elemento é obrigatório
// const numberTuple4: NumberTuple = ['1', 2, 3]; // Erro, o primeiro elemento deve ser number