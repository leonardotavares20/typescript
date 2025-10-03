// generics
// um generic significa que voce pode qualquer tipo, ou seja um tipo generico, ou seja um tipo que pode ser qualquer coisa
// generics permitem que vc use qualquer tipo que vc queira, e conter o tipo dessa informacao
// os nomes do generic geralmente comecam com T, U, K, V, E, N, M, P, Q, R, S, T, Z, mas vc pode colocar qualquer nome
function getFirstElement(arr) {
    return arr[0];
}
const firstValue = getFirstElement([1, 2, 3]);
const firstString = getFirstElement(["a", "b", "c"]);
// vc pode ter quantos parametros quiser em um generic
function pair(a, b) {
    const array = [];
    for (let i = 0; i < a.length && i < b.length; i++) {
        array.push([a[i], b[i]]);
    }
    return array;
}
pair([1, 2, 3], ["a", "b", "c"]);
function getPersonGeneric(person) {
    return person;
}
function getPersonDirect(person) {
    return person;
}
// diferença entre tipos como params e generics aplicados a funcao
// voce perde city no retorno pq Person so retorna name e age
// getPersonDirect({ name: "John", age: 30, city: "New York" });
// voce perde o tipagem de city pq  a funcao getPersonGeneric retorna um generic, ela assegura q ao menos name e age estao presentes, tanto no parametro como no retorno, e ainda mais o generic com constraint inclui a prop city
getPersonGeneric({ name: "John", age: 30, city: "New York" });
function getAndAddItems(store, id, newItem) {
    store.addItem(newItem);
    // newItem.id = id;
    return store.items.filter((item) => item.id === id);
}
// generic Classes
class Box {
    items = [];
    add(item) {
        this.items.push(item);
    }
    remove() {
        return this.items.pop();
    }
    getItems() {
        return this.items;
    }
}
