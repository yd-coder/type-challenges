/*
Permutation
实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。
type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C',
*/

type Permutation<T, R = T> = [T] extends [never]
  ? []
  : R extends R
  ? [R, ...Permutation<Exclude<T, R>>]
  : []
/*
为什么写[T] extends [never]呢？
首先要理解 分布式条件类型。
在分布式条件类型中，T extends ... 已经是在描述对联合类型中的某一个具体项的处理了，而在下面这个错误的例子中
type IsNever<T> = T extends never ? true : false
type Result = IsNever<never>
IsNever<never> 中的 never 实际上是一个空的联合类型，一项都没有，所以 T extends ... 过程实际上被整体跳过了，所以最后的结果就是 never。
因此，为了能判断 T 是不是 never，我们需要关闭 distributive 效果，就是在 extends 语句中，将两边的类型用方括号包起来。

T extends T 是什么？
简单说，这是个用于遍历联合类型的固定模式，在 T extends T ? [T] : never 中，
T 是联合类型中的每一个具体项，而最终结果是每一个 [T] 的联合。
例如，此时若调用 Permutation<1 | 2>，其返回的结果会是 [1] | [2]。

为什么写R=T，声明一个新泛型默认值为T呢？
T 实际上代表的是联合类型中的每一个具体项了，但我们实际上希望表达的是 Exclude<T, Ti>，
也就是从总的联合类型中排除掉当前迭代中的 Ti 这一项而已。
继续改造，增加一个泛型变量 R，用它来代表 Ti，这样原本的 T 就可以保留下来了。
*/
