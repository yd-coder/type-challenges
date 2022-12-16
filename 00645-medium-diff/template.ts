/*
Diff
获取两个接口类型中的差值属性。
type Foo = {
  a: string;
  b: number;
}
type Bar = {
  a: string;
  c: boolean
}

type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }
*/

type Diff<A, B> = Omit<A & B, keyof (A | B)>
/*
A & B 交叉类型两个对象结合，会把A和B中相同的属性合并成一个属性
keyof (A | B) 获取A和B的共有属性的联合类型
*/
