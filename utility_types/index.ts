// extends

// vc pode usar extends para criar uma interface que herda de outra
interface Animal {
  name: string;
  age: number;
}

interface Cow extends Animal {
  breed: string;
  bark(): void;
}

// partial type
// partial type diz que os required types são agora optional types em uma interface, bem utilizavel pra um formulario

interface Animal {
  name: string;
  age: number;
  bark(): void;
  breed: string;
}

function getAnimal(animal: Partial<Animal>) {
  return `${animal.name} is ${animal.age} years old`;
}

getAnimal({ name: "Mork", age: 30 });

// required type
// required type diz que os optional types agora sao required types em uma interface

interface Person {
  name: string;
  age: number;
  job?: string;
}

function getPerson(person: Required<Person>) {
  return `${person.name} is ${person.age} years old and works as a ${person.job}`;
}

getPerson({ name: "John", age: 30, job: "Developer" });

// readyonly type
// readonly type diz que os required types agora sao readonly types em uma interface

interface PersonJob {
  name: string;
  age: number;
  job?: string;
}

function getPersonJob(person: Readonly<PersonJob>) {
  return `${person.name} is ${person.age} years old and works as a ${person.job}`;
}

getPersonJob({ name: "John", age: 30, job: "Developer" });

// record types
// record types sao uteis pra quando voce tem um objeto com muitas chaves, ou tipos exaustivos

type PlayerRule = "tank" | "healer" | "dps";
type Player = Record<PlayerRule, number>;

const player: Player = {
  tank: 1,
  healer: 2,
  dps: 3,
};

// error pq faltou o dps
// const player2: Player = {
//   tank: 1,
//   healer: 2,
// //   dps: 3,
// };

type HttpStatus = 200 | 404 | 500;

const httpMessages: Record<HttpStatus, string> = {
  200: "OK",
  404: "Not Found",
  500: "Internal Server Error",
};

// pick utility type
// pick utility type permite que voce escolha quais propriedades de um objeto voce quer incluir em uma interface

interface Notebook {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
}

type DellG15 = Pick<Notebook, "id" | "name" | "price">;

let dellG15: DellG15 = {
  id: 1,
  name: "Dell G15",
  price: 5000,
};

// omit utility type
// omit utility type permite que voce escolha quais propriedades de um objeto voce quer omitir em uma interface

type DellG15WithoutDescription = Omit<DellG15, "description">;

let dellG15WithoutDescription: DellG15WithoutDescription = {
  id: 1,
  name: "Dell G15",
  price: 5000,
};
