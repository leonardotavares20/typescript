//union é um tipo que pode ser mais de um tipo
// para declarar um union usamos o operador |
let userId;
userId = 123;
userId = "123";
// unions sao uteis quando uma variavel pode ter mais de um tipo, como por exemplo quando um valor pode ser retornado de uma API que pode ser um numero ou uma string
// outro exemplo de uso de unions é em funcoes que podem aceitar mais de um tipo de parametro
function safeSquare(val) {
    if (typeof val === "string") {
        val = parseInt(val, 10);
    }
    return val * val;
}
let result = safeSquare(5); // 25
function getErrorMessage(code) {
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
let move;
function movePlayer(direction) {
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
const getShape = (shape) => {
    return `You selected a ${shape} shape`;
};
// getShape("medium yellow"); // Erro
getShape("large blue"); // OK
getShape("small red"); // OK
getShape("medium green"); // OK
const logMessage = (message) => {
    console.log(message);
};
logMessage("[info] server: Server started successfully"); // OK
// logMessage("debug server: Debugging info"); // Erro
