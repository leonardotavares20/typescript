//union é um tipo que pode ser mais de um tipo
// para declarar um union usamos o operador |

let userId: number | string;

userId = 123;
userId = "123";

// unions sao uteis quando uma variavel pode ter mais de um tipo, como por exemplo quando um valor pode ser retornado de uma API que pode ser um numero ou uma string

// outro exemplo de uso de unions é em funcoes que podem aceitar mais de um tipo de parametro

function safeSquare(val: string | number) {
  if (typeof val === "string") {
    val = parseInt(val, 10);
  }
  return val * val;
}

let result = safeSquare(5); // 25

// super set unions types é um tipo que pode ser qualquer valor, mas tambem pode ser um conjunto especifico de valores

type ErrorCodes = 400 | 401 | 403 | 404 | 500 | number;

function getErrorMessage(code: ErrorCodes): string {
  switch (code) {
    case 400:
      return "Bad request";
    case 401:
      return "Unauthorized";
    case 403:
      return "Forbidden";
    case 404:
      return "Not found";
    case 500:
      return "Internal server error";
    default:
      return "Unknown error";
  }
}
getErrorMessage(404); // "Not found"
getErrorMessage(123); // "Unknown error"

//lyteral types sao tipos que representam um valor especifico, como uma string ou numero especifico, como contrario dos tipos primitivos que representam um conjunto de valores
// para declarar um literal type usamos o operador =
type Direction = "up" | "down" | "left" | "right";
let move: Direction;

function movePlayer(direction: Direction) {
  switch (direction) {
    case "up":
      return 1;
    case "down":
      return -1;
    case "left":
      return 2;
    case "right":
      return -2;
    default:
      return 0;
  }
}

move = "left"; // OK
// move = "top"; // Erro: Type '"top"' is not assignable to type 'Direction'.

// movePlayer("bottom"); // Erro: Argument of type '"bottom"' is not assignable to parameter of type 'Direction'.
let resultMove = movePlayer("up"); // OK

// template literal types sao tipos que sao formados por uma combinacao de strings literais e outros tipos, como por exemplo um union de strings literais

type Size = "small" | "medium" | "large";
type Color = "red" | "green" | "blue";

type Shape = `${Size} ${Color}`;

const getShape = (shape: Shape) => {
  return `You selected a ${shape} shape`;
};

// getShape("medium yellow"); // Erro
getShape("large blue"); // OK
getShape("small red"); // OK
getShape("medium green"); // OK

type LogLevel = "info" | "warning" | "error";
type LogResouceType = "server" | "database" | "application";

type LogMessage = `[${LogLevel}] ${LogResouceType}: ${string}`;

const logMessage = (message: LogMessage) => {
  console.log(message);
};

logMessage("[info] server: Server started successfully"); // OK
// logMessage("debug server: Debugging info"); // Erro
