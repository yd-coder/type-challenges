/* 
元组转合集(联合类型)
实现泛型TupleToUnion<T>，它返回元组所有值的合集。
例如
type Arr = ['1', '2', '3']
type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
*/

type TupleToUnion<T extends unknown[]> = T[number]

type TupleToUnion2<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? First | TupleToUnion2<Rest>
  : never
