/*
Parameters
实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。
例如：
const foo = (arg1: string, arg2: number): void => {}
type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
*/

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer X
) => any
  ? X
  : never
