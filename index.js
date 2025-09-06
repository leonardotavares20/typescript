// typescript adiciona tipagem estatica ao javascript
// no final do processo, o codigo é convertido para javascript puro
// para rodar o codigo typescript, é necessario compilar o arquivo .ts para .js
// usando o comando: tsc index.ts
// depois, o arquivo .js pode ser executado com node: node index.js
// typescript torna a refatoração mais segura e facilita a manutenção do codigo
function main() {
    const projectName = "MyProject";
    const message = welcome(projectName);
    console.log(message);
}
function welcome(projectName) {
    return `Welcome to ${projectName}!`;
}
main();
