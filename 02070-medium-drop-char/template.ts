/*
Drop Char
从字符串中剔除指定字符。
例如：
type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
*/

type DropChar<
  S extends string,
  C extends string
> = S extends `${infer A}${C}${infer B}` ? `${A}${DropChar<B, C>}` : S
