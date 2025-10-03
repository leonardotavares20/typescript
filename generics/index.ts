// generics
// um generic significa que voce pode qualquer tipo, ou seja um tipo generico, ou seja um tipo que pode ser qualquer coisa
// generics permitem que vc use qualquer tipo que vc queira, e conter o tipo dessa informacao
// os nomes do generic geralmente comecam com T, U, K, V, E, N, M, P, Q, R, S, T, Z, mas vc pode colocar qualquer nome

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstValue = getFirstElement([1, 2, 3]);
const firstString = getFirstElement(["a", "b", "c"]);

// vc pode ter quantos parametros quiser em um generic
function pair<A, B>(a: A[], b: B[]): [A, B][] {
  const array: [A, B][] = [];
  for (let i = 0; i < a.length && i < b.length; i++) {
    array.push([a[i], b[i]]);
  }

  return array;
}

pair([1, 2, 3], ["a", "b", "c"]);

// generics constraints
// o generic constraints permitem que voce defina uma restrição de tipo para o generic, entao em vez aceitar qualquer tipo pro generic, vc pode definir uma restrição de tipo para o generic, que ele ao menos satisfaça os tipos que vc deseja, como por exemplo um objt de uma interface
// o extends significa que T deve ter um subtipo Person

interface Person {
  name: string;
  age: number;
}

function getPersonGeneric<T extends Person>(person: T): T {
  return person;
}

function getPersonDirect(person: Person): Person {
  return person;
}

// diferença entre tipos como params e generics aplicados a funcao

// voce perde city no retorno pq Person so retorna name e age
// getPersonDirect({ name: "John", age: 30, city: "New York" });

// voce perde o tipagem de city pq  a funcao getPersonGeneric retorna um generic, ela assegura q ao menos name e age estao presentes, tanto no parametro como no retorno, e ainda mais o generic com constraint inclui a prop city
getPersonGeneric({ name: "John", age: 30, city: "New York" });

// generics em type parameters for types

// extends garante que qualquer tipo usado como T tenha a propriedade id do tipo string
interface Store<T extends { id: string }> {
  items: T[];
  addItem(item: T): void;
  removeItem(item: T): void;
}

function getAndAddItems<T extends { id: string }>(
  store: Store<T>,
  id: string,
  newItem: T
): T[] {
  store.addItem(newItem);
  // newItem.id = id;
  return store.items.filter((item) => item.id === id);
}

// generic Classes

class Box<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(): T | undefined {
    return this.items.pop();
  }

  getItems(): T[] {
    return this.items;
  }
}
