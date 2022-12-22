/*
PartialByKeys
实现一个通用的PartialByKeys<T, K>，它接收两个类型参数T和K。
K指定应设置为可选的T的属性集。当没有提供K时，它就和普通的Partial<T>一样使所有属性都是可选的。
例如:
interface User {
  name: string
  age: number
  address: string
}
type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
*/

type PartialByKeys<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? P : never]?: T[P]
} & Omit<T, K> extends infer F
  ? {
      [P in keyof F]: F[P]
    }
  : never
