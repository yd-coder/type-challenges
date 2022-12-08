/*
Exclude
实现内置的Exclude <T, U>类型，但不能直接使用它本身。
从联合类型T中排除U的类型成员，来构造一个新的类型。
例如：
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
*/

type MyExclude<T, U> = T extends U ? never : T

// T extends U，extends两边都是联合类型的时候，会左边与右边的类型一一遍历
