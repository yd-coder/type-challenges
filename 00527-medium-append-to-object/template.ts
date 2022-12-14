/*
Append to object
实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。
例如:
type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
*/

type AppendToObject<T extends Record<string, any>, U extends string, V> = T &
  Record<U, V> extends infer F
  ? { [P in keyof F]: F[P] }
  : never

/*
T & Record<U, V> 只会推断出两个对象用 & 合并起来 但不是一个整体，所以需要解构
Record<string, any> 将类似于 { [key: string]: any},表示具有任何字符串属性的所有对象的类型。
*/
