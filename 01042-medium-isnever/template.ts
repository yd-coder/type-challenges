/*
IsNever
实现一个类型 IsNever，它接受输入类型 T。如果类型解析为 never，则返回 true，否则返回 false。
例如：
type A = IsNever<never>  // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false
*/

type IsNever<T> = [T] extends [never] ? true : false
/*
为什么写[T] extends [never]呢？
首先要理解 分布式条件类型。
在分布式条件类型中，T extends ... 已经是在描述对联合类型中的某一个具体项的处理了，而在下面这个错误的例子中
type IsNever<T> = T extends never ? true : false
type Result = IsNever<never>
IsNever<never> 中的 never 实际上是一个空的联合类型，一项都没有，所以 T extends ... 过程实际上被整体跳过了，所以最后的结果就是 never。
因此，为了能判断 T 是不是 never，我们需要关闭 distributive 效果，就是在 extends 语句中，将两边的类型用方括号包起来。
*/
