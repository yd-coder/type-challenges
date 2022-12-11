/*
元组转换为对象
传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
例如：
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
*/

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}

// as const断言为readonly类型，像用const声明数组如果不用as const，仅不能重新赋值常量，但可以更改其元素的值
// 比如 const array = ["aaa","bbb","ccc"]的类型为string[],子元素不是定死定长的
// typeof获取类型，用let,const声明的变量常量要想参与ts的运算，就需要用typeof进行类型转换
// keyof array -> 索引的联合类型  keyof object -> 联合类型
// in T[number] 遍历数组   in keyof T遍历对象
