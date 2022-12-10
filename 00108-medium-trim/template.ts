/*
Trim
实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。
例如
type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
*/

type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer Rest}`
  ? Trim<Rest>
  : S extends `${infer Rest}${' ' | '\n' | '\t'}`
  ? Trim<Rest>
  : S
// 先判断左边递归去掉左边的空格，再判断右边去掉右边的空格

type Trim2<S extends string> = S extends
  | `${' ' | '\t' | '\n'}${infer R}`
  | `${infer R}${' ' | '\t' | '\n'}`
  ? Trim<R>
  : S
