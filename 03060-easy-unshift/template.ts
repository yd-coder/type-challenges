/*
Unshift
实现类型版本的 Array.unshift。
例如：
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
*/

type Unshift<T extends unknown[], U> = [U, ...T]
