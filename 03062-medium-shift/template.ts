/*
Shift
实现一个通用Shift<T>，它接受一个数组T并返回一个没有第一个元素的数组。
例如：
type Result = Shift<[3, 2, 1]> // [2, 1]
*/

type Shift<T extends any[]> = T extends [infer F, ...infer R] ? R : T
