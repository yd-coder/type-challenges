/*
实现 Pick
实现 TS 内置的 Pick<T, K>，但不可以使用它。
从类型 T 中选择出属性 K，构造成一个新的类型。
例如：
interface Todo {
  title: string
  description: string
  completed: boolean
}
type TodoPreview = MyPick<Todo, 'title' | 'completed'>
const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
*/

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// keyof把对象类型T的所有属性名转成一个联合类型
// [P in K] in右边是遍历对象，左边是被遍历的每一项
// [P in K]: T[P]表示把T的属性P的类型赋值给新的属性P
