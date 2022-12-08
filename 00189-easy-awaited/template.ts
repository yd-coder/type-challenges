/*
Awaited
假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
例如：Promise<ExampleType>，请你返回 ExampleType 类型。
type ExampleType = Promise<string>
type Result = MyAwaited<ExampleType> // string
*/

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never

type MyAwaited2<T> = T extends Promise<infer Val>
  ? MyAwaited2<Val>
  : T extends { then: (onfulfilled: (arg: infer Args) => any) => any }
  ? Args
  : T
