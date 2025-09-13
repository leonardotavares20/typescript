// type narrowing é o processo de reduzir o tipo de uma variável para um tipo mais específico com base em verificações de tempo de execução.
// Exemplo 1: Usando typeof para verificar tipos primitivos
// o type unknown é um supertipo de todos os outros tipos. Diferente do any, ele força o desenvolvedor a fazer uma verificação de tipo antes de realizar operações com o valor.
function logValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value);
    }
}
logValue("hello"); // Output: "HELLO"
// exemplo 2: Usando instanceof para verificar tipos de objetos
class DogAnimal {
    bark() {
        console.log("Woof!");
    }
}
class CatAnimal {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof DogAnimal) {
        animal.bark();
    }
    else if (animal instanceof CatAnimal) {
        animal.meow();
    }
}
const myDog = new DogAnimal();
const myCat = new CatAnimal();
function moveAnimal(animal) {
    if ("swim" in animal) {
        animal.swim();
    }
    else if ("fly" in animal) {
        animal.fly();
    }
}
const myFish = { swim: () => { } };
const myBird = { fly: () => { } };
// type predicates são funções que retornam um booleano e têm uma assinatura especial que informa ao TypeScript sobre o tipo de uma variável.
// quando a funcao retorna true, o TypeScript sabe que a variável é do tipo especificado.
// Exemplo 4: Usando type predicates
function isString(value) {
    return typeof value === "string";
}
// type assertion é uma maneira de informar ao compilador TypeScript sobre o tipo de uma variável quando o desenvolvedor tem mais conhecimento sobre o tipo do que o compilador.
// é como se você estivesse dizendo ao TypeScript: "confie em mim, eu sei o que estou fazendo".
// o problema é que se você estiver errado, pode levar a erros em tempo de execução.
// talvez seja melhor usar type narrowing com verificações de tipo em vez de type assertion para garantir a segurança do tipo.
// Exemplo 5: Usando type assertion
const someValue = "this is a string";
const strLength = someValue.toLocaleLowerCase();
