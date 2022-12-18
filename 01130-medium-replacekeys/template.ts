/*
ReplaceKeys
实现一个ReplaceKeys类型, 这个类型可以替换联合类型中指定属性的类型, 如果联合类型中的某个类型没有这个属性, 那就跳过;
ReplaceKeys接受 3 个泛型参数.
例如：
type NodeA = {
  type: 'A'
  name: string
  flag: number
}
type NodeB = {
  type: 'B'
  id: number
  flag: number
}
type NodeC = {
  type: 'C'
  name: string
  flag: number
}
type Nodes = NodeA | NodeB | NodeC
type ReplacedNodes = ReplaceKeys<Nodes, 'name' | 'flag', {name: number, flag: string}> 
// {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string}
// 将name从字符串替换为数字，将flag从数字替换为字符串。
type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', {aa: number}> // // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // 将name替换为never
*/

type ReplaceKeys<
  U extends object,
  T extends string,
  Y extends object
> = U extends U
  ? {
      [P in keyof U]: P extends T ? (P extends keyof Y ? Y[P] : never) : U[P]
    }
  : never
/*
U extends U是联合类型的分发，相当于遍历
{}里面的U是前面联合类型U的每一项
*/
