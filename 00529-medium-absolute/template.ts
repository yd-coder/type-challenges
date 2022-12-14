/*
Absolute
实现一个接收string,number或bigInt类型参数的Absolute类型,返回一个正数字符串。
例如
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
*/

type Absolute<T extends number | string | bigint> =
  `${T}` extends `-${infer Rest}` ? `${Rest}` : `${T}`
