// classes em typescript
class Hero {
    name;
    age;
    powers;
    constructor(name, age, powers) {
        this.name = name;
        this.age = age;
        this.powers = powers;
    }
    bio() {
        return `${this.name} (${this.age}) - ${this.powers.join(", ")}`;
    }
    // getters e setters
    get fullName() {
        return `${this.name} - ${this.age}`;
    }
}
// private members
// voce torna um membro privado usando o # na frente do nome do membro
// diferença entre private e protected: private significa que o membro nao pode ser acessado fora da classe especifica, protected significa que o membro nao pode ser acessado fora da classe e das subclasses, mas nas subclasses dele ele pode ser acessado
class Agent {
    #id;
    constructor(id) {
        this.#id = id;
    }
    getNameById() {
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
class GeometricShape {
    size;
    constructor(size) {
        this.size = size;
    }
    getInfo() {
        return `A ${this.size} shape`;
    }
}
// concrete class
class Circle extends GeometricShape {
    radius;
    constructor(size, radius) {
        super(size);
        this.radius = radius;
    }
    getShapeInfo() {
        return Math.PI * this.radius ** 2;
    }
}
const area = new Circle("medium", 10);
console.log(area.getShapeInfo());
console.log(area.getInfo());
class Batman {
    name;
    age;
    powers;
    constructor(name, age, powers) {
        this.name = name;
        this.age = age;
        this.powers = powers;
    }
    bio() {
        return `${this.name} (${this.age}) - ${this.powers.join(", ")}`;
    }
}
