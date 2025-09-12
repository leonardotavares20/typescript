// interfaces são contratos que definem a estrutura de um objeto, função ou classe, eles cumprem a mesma função que os types, mas com algumas diferenças
// interfaces podem ser estendidas e implementadas, enquanto os types não podem
// interfaces são mais indicadas para definir a estrutura de objetos e classes, enquanto os types são mais flexíveis e podem ser usados para definir tipos primitivos, uniões e interseções

interface IAnimal {
  name: string;
  age: number;
  makeSound(): void;
}

interface IDog extends IAnimal {
  breed: string;
  bark(name: string): string;
}

const dog: IDog = {
  name: "Rex",
  age: 5,
  breed: "Golden Retriever",
  makeSound() {
    console.log("Woof!");
  },
  bark(name: string) {
    return `${name} says Woof!`;
  },
};

// extendendo múltiplas interfaces
interface IPet {
  owner: string;
}

interface IHousePet extends IAnimal, IPet {
  isIndoor: boolean;
}

const cat: IHousePet = {
  name: "Whiskers",
  age: 3,
  makeSound() {
    console.log("Meow!");
  },
  owner: "Alice",
  isIndoor: true,
};
