/*
Readonly 2
实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。
K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。
例如
interface Todo {
  title: string
  description: string
  completed: boolean
}
const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}
todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
*/

type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
} & {
  readonly [P in keyof Pick<T, K>]: T[P]
}

type MyReadonly3<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
}

// <T, K extends keyof T = keyof T>不传K给个默认值keyof T
