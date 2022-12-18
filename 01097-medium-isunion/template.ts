/*
isUnion
实现一个类型 IsUnion，该类型接受输入类型 T 并返回 T 是否解析为联合类型。
例如：
type case1 = IsUnion<string>  // false
type case2 = IsUnion<string|number>  // true
type case3 = IsUnion<[string|number]>  // false
*/

/**
 * 思路：
 *
 * 联合类型的特征有两个：
 *   1. 在 TS 处理泛型为联合类型时进行分发处理，即将联合类型拆解为独立项一一进行判定，最后再用 | 连接。
 *   2. 用 [] 包裹联合类型可以规避分发的特性。
 *
 *   所以，如果泛型进行了分发，就可以反推出它是联合类型。
 */
type IsUnion<A, B = A> = [A] extends [never]
  ? false
  : A extends A
  ? [B] extends [A]
    ? false
    : true
  : false
