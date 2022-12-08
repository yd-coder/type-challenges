/*
第一个元素
实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。
例如：
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
*/

type First<T extends any[]> = T extends [] ? never : T[0]
// extends不仅可以作为泛型约束，还可以结合三元运算符作为判断条件

type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]
// 获取数组T的length属性结合extends判断

type First3<T extends any[]> = T[0] extends T[number] ? T[0] : never
// T[number] 是将数组元素转为联合类型

type First4<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never
// infer推断，类似声明一个占位符
