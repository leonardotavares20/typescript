const arrString: string[] = ["a", "b", "c"];
const arrNumber: number[] = [1, 2, 3];
const arrBoolean: boolean[] = [true, false, true];

function getArrStringElements(elements: string[] | number[]): void {
  elements.forEach((element) => console.log(element));
}

getArrStringElements(arrNumber);
getArrStringElements(arrString); // Correct usage
// getArrStringElements(arrBoolean); // Incorrect usage, would cause a type error

function sumArrayElements(numbers: Array<number>): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
sumArrayElements(arrNumber);

function getBooleanArrayElements(...elements: boolean[]): void {
  elements.forEach((element) => console.log(element));
}
getBooleanArrayElements(...arrBoolean);
