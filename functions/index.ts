// tanto os parametros como o retorno das funcoes em typescript podem ser tipados
// se voce nao tipar os parametros ou no tipo retornando pela funcao o typescript ira inferir o tipo

// tipo explicito como number
function calculateTotal(
  price: number,
  quantity: number,
  discount: number
): number {
  return price * quantity * (1 - discount);
}

// tipo inferido como string
function combinePrompts(systemPrompt: string, userPrompt: string) {
  return `${systemPrompt}\n\n${userPrompt}`;
}

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
