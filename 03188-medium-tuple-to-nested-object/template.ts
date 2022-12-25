/*
Tuple to Nested Object
给定一个只包含字符串类型的元组类型 T 和一个类型 U，递归地构建一个对象。
例如：
type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. 如果元组为空，则返回 U 类型
*/

type TupleToNestedObject<T, U> = T extends [infer F extends string, ...infer R]
  ? Record<F, TupleToNestedObject<R, U>>
  : U

type TupleToNestedObject2<T, U> = T extends [infer F extends string, ...infer R]
  ? {
      [P in F]: TupleToNestedObject<R, U>
    }
  : U
