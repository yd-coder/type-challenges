/*
Length of String
计算字符串的长度，类似于 String#length 。
*/

type LengthOfString<
  S extends string,
  Arr extends any[] = []
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...Arr, First]>
  : Arr['length']
