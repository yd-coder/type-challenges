/*
Remove Index Signature
实现 RemoveIndexSignature<T> ，从对象类型中排除索引签名。
例如：
type Foo = {
  [key: string]: any;
  foo(): void;
}

type A = RemoveIndexSignature<Foo>  // expected { foo(): void }

*/

type RemoveIndexSignature<T> = {
  [K in keyof T as PropertyKey extends keyof T[K] ? never : K]: T[K]
}
