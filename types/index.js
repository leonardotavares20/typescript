// tipos primitivos: string, number, boolean, null, undefined
// tipos especiais: any, void, never
// tipos compostos: arrays, tuples, enums, objects
// o tipo string representa conjuntos de caracteres
// o tipo number representa valores numericos, inteiros ou decimais
// o tipo boolean representa valores logicos: true ou false
// o tipo null representa a ausencia intencional de valor
// o tipo undefined representa uma variavel que foi declarada mas nao inicializada
// o tipo any representa um valor de qualquer tipo
const namePerson = "João";
const age = 30;
const isAdmin = true;
const nothing = null;
let notDefined = undefined;
// o tipo void é usado especificamente com funcoes para indicar que uma funcao nao retorna nenhum valor, esse tipo tambem pode ser inferido pelo typescript
function printTotal(total) {
    console.log(`Total: $${total.toFixed(2)}`);
}
const user = {
    id: 1,
    name: "John Doe",
    email: "p4v5W@example.com",
};
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const subtract = (x, y) => x - y;
// o type unknown é um supertipo de todos os outros tipos. Diferente do any, ele força o desenvolvedor a fazer uma verificação de tipo antes de realizar operações com o valor.
// o type unknown pode ser usado em respostas de APIs, onde o tipo do dado retornado pode ser incerto ou variar, e voce pode usar type narrowing para garantir que o dado seja do tipo esperado antes de usá-lo.
let value;
let value2;
// o value2 pode ser atribuido a qualquer outro tipo sem erro porque é do tipo any
value.toString(); // ok
// value.toFixed(2); // a propriedade 'toFixed' nao existe no tipo 'unknown'
if (typeof value === "string") {
    value.toUpperCase(); // agora o typescript sabe que value é uma string
}
