/*
RequiredByKeys
实现一个通用的RequiredByKeys<T, K>，它接收两个类型参数T和K。
K指定应设为必选的T的属性集。当没有提供K时，它就和普通的Required<T>一样使所有的属性成为必选的。
例如:
interface User {
  name?: string
  age?: number
  address?: string
}
type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
*/

type RequiredByKeys<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? P : never]-?: T[P]
} & Omit<T, K> extends infer F
  ? {
      [P in keyof F]: F[P]
    }
  : never
// '-'表示状态取反
