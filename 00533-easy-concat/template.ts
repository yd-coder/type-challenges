/*
Concat
在类型系统里实现 JavaScript 内置的 Array.concat 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。
例如：
type Result = Concat<[1], [2]> // expected to be [1, 2]
*/

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

// unknown和any都是TS中的顶级类型，但主要区别在于：使用any相当于彻底放弃了类型检查，而unknown类型相较于any更加严格，在执行大多数操作之前，会进行某种形式的检查。
