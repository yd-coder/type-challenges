/*
Merge
将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。
例如
type foo = {
  name: string;
  age: string;
}
type coo = {
  age: number;
  sex: string
}
type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
*/

type Merge<F extends Record<string, any>, S extends Record<string, any>> = {
  [K in keyof F as K extends keyof S ? never : K]: F[K]
} & S extends infer T
  ? {
      [P in keyof T]: T[P]
    }
  : never

// Record<string, any> 将类似于 { [key: string]: any},表示具有任何字符串属性的所有对象的类型。
