/*
ObjectEntries
实现 Object.entries的类型
例如：
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model> 
// ['name', string] | ['age', number] | ['locations', string[] | null];
*/

type ObjectEntries<T extends object, K extends keyof T = keyof T> = K extends K
  ? [K, T[K] extends undefined ? undefined : Required<T>[K]]
  : never

// K extends K 表示分发，相当于两个联合类型的每一项遍历
