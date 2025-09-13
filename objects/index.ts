type Mail = {
  to: string[];
  from: string;
  subject: string;
  body?: string;
};

type SuperHero = {
  name: string;
  age: number;
  powers: string[];
  cape?: boolean;
};

const email = {
  to: ["p4v5W@example.com"],
  from: "p4v5W@example.com",
  subject: "Hello",
  body: "Hello world",
};

function sendEmail(mail: Mail) {
  if (mail.to.length === 0) {
    throw new Error("No recipients specified");
  }

  mail.to.forEach((recipient) => {
    console.log(`Sending email to ${recipient} from ${mail.from}`);
  });
}

sendEmail(email);

const hero = {
  name: "Superman",
  age: 30,
  powers: ["flight", "super strength"],
};

function createHero(hero: SuperHero) {
  console.log(
    `Creating hero: ${hero.name}, Age: ${hero.age} ${
      hero.cape ? "with cape" : "without cape"
    }`
  );
}

createHero(hero);

// discrimating unions
// é uma técnica usada para criar tipos que podem ser um de vários tipos diferentes, mas com uma propriedade comum que pode ser usada para distinguir entre os tipos

// nesse exemplo, a propriedade "type" é usada para discriminar entre os tipos Dog e Cat

type Dog = {
  type: "dog";
  barkVolume: number;
};
type Cat = {
  type: "cat";
  livesLeft: number;
};

type Pet = Dog | Cat;

function handlePet(pet: Pet) {
  if (pet.type === "dog") {
    console.log(`Dog with bark volume: ${pet.barkVolume}`);
  } else {
    console.log(`Cat with lives left: ${pet.livesLeft}`);
  }
}

const pet = {
  type: "dog" as const,
  barkVolume: 10,
};

handlePet(pet);

type Loading = { loading: "loading"; message?: string };
type Success = { loading: "success"; data: string[] };
type Failure = { loading: "failure"; error: Error };

type ResponseAPI = Loading | Success | Failure;

function handleResponse(response: ResponseAPI) {
  switch (response.loading) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log("Success");
      break;
    case "failure":
      console.log("Failure");
      break;
  }
}

let numbers = [1, 2, 3, 3, 4, 4, 5];

// sets é um objeto que não aceita valores duplicados
const mySet = new Set<number>(numbers);

function findNumber(numbers: Set<number>, num: number) {
  return numbers.has(num);
}

// map é um objeto que armazena pares chave-valor
const myMap = new Map<string, number>([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

function getValue(map: Map<string, number>, key: string) {
  return map.get(key);
}

console.log(findNumber(mySet, 3)); // true
console.log(getValue(myMap, "b")); // 2

// dynamic keys permitem que você defina as chaves de um objeto em tempo de execução de forma dinâmica

// Record<Keys, Type> é uma forma de definir um objeto com chaves dinâmicas
type MailPreferences = Record<string, boolean>;

// Ou você pode usar um index signature
type UserKey = {
  [key: string]: number;
};

const userMailPreferences: MailPreferences = {
  newsletter: true,
  promotions: false,
  updates: true,
};

const userKey: UserKey = {
  id: 123,
  tickets: 5,
};

// dynamic properties

type FormDataAPI = {
  [key: string]: string | number | boolean;
  name: string;
  age: number;
  isMember: boolean;
};

// PropertyKey é um utilitario built-in que retorna que uma chave pode ser string, number ou symbol
type MailConfig = {
  [key in PropertyKey]: string;
};

type MailTest = {
  [key: PropertyKey]: Record<string, boolean>;
};

// readonly modifier permite que você defina propriedades que não podem ser alteradas após a criação do objeto, é ideal quando voce quer garantir que certas propriedades permaneçam intactas
type ReadonlyUser = {
  readonly id: number;
  readonly name: string;
  age: number;
};

const userPass: ReadonlyUser = {
  id: 1,
  name: "John",
  age: 30,
};

userPass.age = 31; // ok
// userPass.id = 2; // erro

// "as const" assertion transforma todas as propriedades de um objeto em readonly e seus valores em tipos literais

// isso pode ser feito com const porque o valor não pode ser reatribuído, mas as propriedades do objeto ainda podem ser alteradas, então usamos "as const" para garantir que as propriedades também sejam readonly
const settings = {
  theme: "dark",
  notifications: true,
} as const;

let team = "blue" as const;

team = "blue"; // ok
// team = "red"; // erro

// settings.theme = "light"; // erro
// console.log(settings.theme); // "dark"

// satisfies operator é usado para garantir que um valor satisfaça uma determinada condição de tipo sem alterar o tipo original do valor
// é útil quando você quer garantir que um objeto atenda a uma interface específica, mas não quer perder a inferência de tipo original do objeto

type NamePerson = { name: string; age?: number; city: string };
const personName = {
  name: "Alice",
  city: "São Paulo",
} as const satisfies NamePerson;

type PreferencesUser = {
  [key: PropertyKey]: string | boolean;
  doNotDisturb: string;
  theme: "light" | "dark";
};

const emailPreferences = {
  doNotDisturb: "22:00-07:00",
  theme: "light",
  outOfOffice: false,
  signature: "Best regards",
} satisfies PreferencesUser;

// functions overloads permite que você defina múltiplas assinaturas para uma função, permitindo que ela seja chamada com diferentes conjuntos de argumentos e tipos de retorno

function format(input: string): string;
function format(input: number): string;

function format(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toFixed(2);
}

console.log(format("hello")); // "HELLO"
console.log(format(3.14159)); // "3.14"
