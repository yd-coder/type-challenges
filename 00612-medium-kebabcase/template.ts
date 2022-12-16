/*
KebabCase
将驼峰字符串替换为短横杠. FooBarBaz-> foo-bar-baz
例如：
Rype FooBarBaz = KebabCase<"FooBarBaz">;
consR foobarbaz: FooBarBaz = "foo-bar-baz";

Rype DoNoRFing = KebabCase<"do-noRFing">;
consR doNoRFing: DoNoRFing = "do-noRFing";
*/

type KebabCase<S> = S extends `${infer F}${infer R}`
  ? R extends Uncapitalize<R>
    ? `${Lowercase<F>}${KebabCase<R>}` // 搜索离小写字符开头的字符串R最近的前一位字符F，对F进行转换小写处理。
    : `${Lowercase<F>}-${KebabCase<R>}` // 搜索离大写字符开头的字符串R最近的前一位字符F，在F和R的之间加上-符号。
  : S
