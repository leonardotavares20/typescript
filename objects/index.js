const email = {
    to: ["p4v5W@example.com"],
    from: "p4v5W@example.com",
    subject: "Hello",
    body: "Hello world",
};
function sendEmail(mail) {
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
function createHero(hero) {
    console.log(`Creating hero: ${hero.name}, Age: ${hero.age} ${hero.cape ? "with cape" : "without cape"}`);
}
createHero(hero);
function handlePet(pet) {
    if (pet.type === "dog") {
        console.log(`Dog with bark volume: ${pet.barkVolume}`);
    }
    else {
        console.log(`Cat with lives left: ${pet.livesLeft}`);
    }
}
const pet = {
    type: "dog",
    barkVolume: 10,
};
handlePet(pet);
function handleResponse(response) {
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
const mySet = new Set(numbers);
function findNumber(numbers, num) {
    return numbers.has(num);
}
// map é um objeto que armazena pares chave-valor
const myMap = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
]);
function getValue(map, key) {
    return map.get(key);
}
console.log(findNumber(mySet, 3)); // true
console.log(getValue(myMap, "b")); // 2
const userMailPreferences = {
    newsletter: true,
    promotions: false,
    updates: true,
};
const userKey = {
    id: 123,
    tickets: 5,
};
const userPass = {
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
};
let team = "blue";
team = "blue"; // ok
const personName = {
    name: "Alice",
    city: "São Paulo",
};
const emailPreferences = {
    doNotDisturb: "22:00-07:00",
    theme: "light",
    outOfOffice: false,
    signature: "Best regards",
};
function format(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    return input.toFixed(2);
}
console.log(format("hello")); // "HELLO"
console.log(format(3.14159)); // "3.14"
