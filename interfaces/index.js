// interfaces são contratos que definem a estrutura de um objeto, função ou classe, eles cumprem a mesma função que os types, mas com algumas diferenças
// interfaces podem ser estendidas e implementadas, enquanto os types não podem
// interfaces são mais indicadas para definir a estrutura de objetos e classes, enquanto os types são mais flexíveis e podem ser usados para definir tipos primitivos, uniões e interseções
const dog = {
    name: "Rex",
    age: 5,
    breed: "Golden Retriever",
    makeSound() {
        console.log("Woof!");
    },
    bark(name) {
        return `${name} says Woof!`;
    },
};
const cat = {
    name: "Whiskers",
    age: 3,
    makeSound() {
        console.log("Meow!");
    },
    owner: "Alice",
    isIndoor: true,
};
