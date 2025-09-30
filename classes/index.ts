// classes em typescript

class Hero {
  name: string;
  age: number;
  powers: string[];
  constructor(name: string, age: number, powers: string[]) {
    this.name = name;
    this.age = age;
    this.powers = powers;
  }

  bio(): string {
    return `${this.name} (${this.age}) - ${this.powers.join(", ")}`;
  }

  // getters e setters
  get fullName(): string {
    return `${this.name} - ${this.age}`;
  }
}

// private members
// voce torna um membro privado usando o # na frente do nome do membro
// diferença entre private e protected: private significa que o membro nao pode ser acessado fora da classe especifica, protected significa que o membro nao pode ser acessado fora da classe e das subclasses, mas nas subclasses dele ele pode ser acessado

class Agent {
  #id: string;

  constructor(id: string) {
    this.#id = id;
  }

  getNameById(): string {
    if (this.#id === "123") {
      return "John Doe";
    }
    if (this.#id === "007") {
      return "James Bond";
    }
    return "Unknown";
  }
}

const agent = new Agent("007");
console.log(agent.getNameById());

// classes abstratas
// uma classe abstrata nao pode ser instanciada, mas pode ser herdada
// uma classe abstrata pode ter metodos abstratos, que nao possuem implementação

// abstract class

abstract class GeometricShape {
  size: "small" | "medium" | "large";
  constructor(size: "small" | "medium" | "large") {
    this.size = size;
  }

  abstract getShapeInfo(): number;
  getInfo() {
    return `A ${this.size} shape`;
  }
}

// concrete class

class Circle extends GeometricShape {
  radius: number;
  constructor(size: "small" | "medium" | "large", radius: number) {
    super(size);
    this.radius = radius;
  }

  getShapeInfo(): number {
    return Math.PI * this.radius ** 2;
  }
}

const area = new Circle("medium", 10);
console.log(area.getShapeInfo());
console.log(area.getInfo());

// implements

interface HeroInterface {
  name: string;
  age: number;
  powers: string[];
  bio(): string;
}

class Batman implements HeroInterface {
  name: string;
  age: number;
  powers: string[];
  constructor(name: string, age: number, powers: string[]) {
    this.name = name;
    this.age = age;
    this.powers = powers;
  }
  bio(): string {
    return `${this.name} (${this.age}) - ${this.powers.join(", ")}`;
  }
}
