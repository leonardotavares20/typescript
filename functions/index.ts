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

// optional parameters

function greet(name: string, greeting?: string) {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

greet("John"); // "Hello, John!"
greet("John", "Good morning"); // "Good morning, John!"

// default parameters

function greetPerson(name: string, greeting: string = "Hello") {
  return `${greeting}, ${name}!`;
}

greetPerson("Jane"); // "Hello, Jane!"
greetPerson("Jane", "Hi"); // "Hi, Jane!"
