const arrString = ["a", "b", "c"];
const arrNumber = [1, 2, 3];
const arrBoolean = [true, false, true];
function getArrStringElements(elements) {
    elements.forEach((element) => console.log(element));
}
getArrStringElements(arrNumber);
getArrStringElements(arrString); // Correct usage
// getArrStringElements(arrBoolean); // Incorrect usage, would cause a type error
function sumArrayElements(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
sumArrayElements(arrNumber);
function getBooleanArrayElements(...elements) {
    elements.forEach((element) => console.log(element));
}
getBooleanArrayElements(...arrBoolean);
