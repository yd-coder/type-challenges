/*
Capitalize
实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样。
例如
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
*/

type MyCapitalize<S extends string> = S extends `${infer First}${infer R}`
  ? `${Uppercase<First>}${R}`
  : `${Uppercase<S>}`
