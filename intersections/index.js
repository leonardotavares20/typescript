// um intersection type é a junção de dois ou mais tipos em um único tipo. Ele combina as propriedades de todos os tipos envolvidos, exigindo que um valor atenda a todas as condições dos tipos combinados. Ele é representado pelo operador "&".
const contributor = {
    name: "Alice",
    email: "p4v5W@example.com",
    company: "Google",
};
const point = {
    x: 10,
    y: 20,
    z: 30,
};
const greetMessage = "Hello! How can I assist you today?";
const infoMessage = "I am a bot designed to help you with various tasks.";
const helpMessage = "Here are some commands you can use: /greet, /info, /help.";
function handleSlashCommand(command) {
    if (command === "greet") {
        return greetMessage;
    }
    if (command === "info") {
        return infoMessage;
    }
    if (command === "help") {
        return helpMessage;
    }
    throw new Error(`Unexpected command ${command}`); // assegura que todos os casos foram tratados
}
const messageTag = {
    sentiment: {
        type: "positive",
        confidence: 0.8,
        flagged: false,
    },
    channel: {
        type: "chat",
        receivedAt: new Date().toISOString(),
        verified: true,
    },
};
