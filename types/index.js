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
