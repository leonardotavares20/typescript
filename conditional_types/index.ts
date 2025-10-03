// conditional types sao tipos que dependem de outros tipos, eles podem ser usados para criar tipos condicionais, ou seja, tipos que dependem de outros tipos
// na maioria dos casos eles sao utilizados junto com generics
// aqui a key extends tem um significado mais como um if, de que o generic satisfaz um valor determinado, se sim ou nao voce define o tipo com um ternario

type IsString<T> = T extends string ? true : false;

type Result = IsString<"hello">; // true
type Result2 = IsString<123>; // false
type Resul3 = IsString<string>; // true

// exemplo

type ClickEvent = { type: "click"; x: number; y: number };
type FocusMouseEvent = { type: "focus"; target: string };
type KeyEvent = { type: "key"; key: string };
type MouseMoveEvent = { type: "mousemove"; x: number; y: number };

type EventUser = ClickEvent | FocusMouseEvent | KeyEvent | MouseMoveEvent;

// type Extract<T, U> = T extends U ? T : never;

type MouseRelatedEvents = Extract<EventUser, { x: number; y: number }>;

// a infer keyword quando usada dentro de um conditional type, nos permite usar o tipo do valor da parte verdadeira do ternario

type TextInfer<T> = T extends `${infer Key}:${infer Value}`
  ? [Key, Value]
  : false;

type ResultInfer = TextInfer<"hello:world">;
// type ResultInfer = ["hello", "world"]

type InputTypeOf<T> = T extends (arg1: infer P, args: any[]) => any
  ? P
  : unknown;

type ResultInputTypeOf = InputTypeOf<(arg1: "hey", args: any[]) => any>;
// type ResultInputTypeOf = hey
