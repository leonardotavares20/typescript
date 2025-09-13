// tipos primitivos: string, number, boolean, null, undefined
// tipos especiais: any, void, never
// tipos compostos: arrays, tuples, enums, objects

// o tipo string representa conjuntos de caracteres
// o tipo number representa valores numericos, inteiros ou decimais
// o tipo boolean representa valores logicos: true ou false
// o tipo null representa a ausencia intencional de valor
// o tipo undefined representa uma variavel que foi declarada mas nao inicializada

// o tipo any representa um valor de qualquer tipo

const namePerson: string = "João";
const age: number = 30;
const isAdmin: boolean = true;
const nothing: null = null;
let notDefined: undefined = undefined;

// o tipo void é usado especificamente com funcoes para indicar que uma funcao nao retorna nenhum valor, esse tipo tambem pode ser inferido pelo typescript
function printTotal(total: number): void {
  console.log(`Total: $${total.toFixed(2)}`);
}

// type alias serve como que para armazenar um tipo em uma variavel, o que pode ser util para tipos complexos ou que sao usados com frequencia
// o type alias pode ser usado para tipos primitivos, tipos de funcoes, tipos de objetos, tipos uniao e tipos intersection
type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "John Doe",
  email: "p4v5W@example.com",
};

// voce tambem pode importar tipos de outros arquivos usando a keyword type
// usar a keyword type tambem reduz o bundle size, porque o typescript so importa o tipo em especifico, e nao todo o arquivo
// import type { Product } from "./types/product";

// o function type é usado para descrever o tipo de funcoes, incluindo os tipos de parametros e o tipo de retorno
type MathOperation = (x: number, y: number) => number;
const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;
const subtract: MathOperation = (x, y) => x - y;

// o type unknown é um supertipo de todos os outros tipos. Diferente do any, ele força o desenvolvedor a fazer uma verificação de tipo antes de realizar operações com o valor.

// o type unknown pode ser usado em respostas de APIs, onde o tipo do dado retornado pode ser incerto ou variar, e voce pode usar type narrowing para garantir que o dado seja do tipo esperado antes de usá-lo.
let value: unknown;
let value2: any;

// o value2 pode ser atribuido a qualquer outro tipo sem erro porque é do tipo any
value.toString(); // ok

// value.toFixed(2); // a propriedade 'toFixed' nao existe no tipo 'unknown'

if (typeof value === "string") {
  value.toUpperCase(); // agora o typescript sabe que value é uma string
}
