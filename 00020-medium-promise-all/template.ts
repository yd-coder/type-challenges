/*
Promise.all
键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)
*/

/**
 * 1.声明函数 declare function
 * 2.定义泛型T为数组类型
 * 3.限制入参value 为只读类型的数组 value: readonly [...T] 因为 使用时传入的入参都是只读类型的
 * 4.定义返回值 按照题解提示 输出值为 Promise类型
 *  因此外面肯定是 Promise<>
 *  然后循环传入数组判断数组当前类型是不是Promise类型 且使用infer A 定义Promise的形参
 *     keyof Array 为数组索引的联合类型 | keyof Object 为对象键的联合类型
 *    是promise类型则返回类型形参A
 *    不是promise类型则返回 当前数组对应的值 T[K]
 *    [K in keyof T] ? T[K] extends Promise<infer A> ? A : T[K];
 */
declare function PromiseAll<T extends readonly unknown[]>(
  value: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer A> ? A : T[K] }>
