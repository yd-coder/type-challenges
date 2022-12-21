/*
PickByType
从 T 中选择一组属性，它们的类型可以赋值给 U。即从对象中取出需要类型的键值对，组成新的对象返回。
例如：
type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }
*/

type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K]
}
