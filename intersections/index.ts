// um intersection type é a junção de dois ou mais tipos em um único tipo. Ele combina as propriedades de todos os tipos envolvidos, exigindo que um valor atenda a todas as condições dos tipos combinados. Ele é representado pelo operador "&".

type IndividualContributor = {
  name: string;
  email: string;
};

type CompanyContributor = {
  name: string;
  company: string;
};

type Contributor = IndividualContributor & CompanyContributor;

const contributor: Contributor = {
  name: "Alice",
  email: "p4v5W@example.com",
  company: "Google",
};

type Point2D = {
  x: number;
  y: number;
};

type Point3D = Point2D & {
  z: number;
};

const point: Point3D = {
  x: 10,
  y: 20,
  z: 30,
};

type slahCommands = "greet" | "info" | "help";

const greetMessage = "Hello! How can I assist you today?";
const infoMessage = "I am a bot designed to help you with various tasks.";
const helpMessage = "Here are some commands you can use: /greet, /info, /help.";

function handleSlashCommand(command: slahCommands) {
  if (command === "greet") {
    return greetMessage;
  }
  if (command === "info") {
    return infoMessage;
  }
  if (command === "help") {
    return helpMessage;
  }

  throw new Error(`Unexpected command ${command satisfies never}`); // assegura que todos os casos foram tratados
}

type SentimentTag = {
  type: "positive" | "negative" | "neutral";
  confidence: number;
  flagged: boolean;
};

type ChannelTag = {
  type: "chat" | "email" | "social_media";
  receivedAt: string;
  verified: boolean;
};

type MessageTag = {
  sentiment: SentimentTag;
  channel: ChannelTag;
};

const messageTag: MessageTag = {
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
