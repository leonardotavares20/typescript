// tuple é um array com tamanho e tipos fixos
const dadosCliente1 = [1, "Luiz"];
const dadosCliente2 = [1, "Luiz", "Miranda"];
// const dadosCliente3: [number, string] = ['Luiz', 1]; // Erro de tipos
// const dadosCliente4: [number, string] = [1, 'Luiz', 30]; // Erro de tamanho
// tuples são bem uteis para retornar multiplos valores em funções, onde cada valor retornado tem um tipo específico
function getDataAPIUser(id, name) {
    return [id, name];
}
const [id, nome] = getDataAPIUser(2, "João");
console.log(id, nome);
const nameAndAge = ["Luiz", 30];
const ticket1 = [1, "Luiz", "A"];
function resolveTicket(ticket) {
    // ticket[0] = 5;
    return [ticket[0], ticket[1], ticket[2]];
}
// tuples vs objects
// eles cumprem a msm funcao,a diferença é que em tuples a ordem importa, já em objetos não
const pessoa1 = ["Luiz", "30", "London"];
function criarPessoa(args) {
    return {
        namePerson: args[0],
        idade: args[1],
        nacionalidade: args[2],
    };
}
const { namePerson: pessoaName, idade: pessoaIdade, nacionalidade: pessoaNacionalidade, } = criarPessoa(pessoa1);
const pessoaOpcional1 = ["Luiz"];
const pessoaOpcional2 = ["Luiz", 30];
const pessoaOpcional3 = ["Luiz", 30, "London"];
const numberTuple1 = [1];
const numberTuple2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numberTuple3: NumberTuple = []; // Erro, o primeiro elemento é obrigatório
// const numberTuple4: NumberTuple = ['1', 2, 3]; // Erro, o primeiro elemento deve ser number
