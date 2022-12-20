/*
MinusOne
给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。
例如:
type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54
*/

type NumberLiteral = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

// 数字减 1 之后对应的数字
type MinusOneMap = {
  '0': '9'
  '1': '0'
  '2': '1'
  '3': '2'
  '4': '3'
  '5': '4'
  '6': '5'
  '7': '6'
  '8': '7'
  '9': '8'
}

// 字符串相关的工具函数

// 将字符串反转，例如，'abcd' => 'dcba'
type ReverseString<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${ReverseString<Rest>}${First}`
  : ''

// 移除字符串开头的 0，例如 '00999' => '999'
type RemoveLeadingZeros<S extends string> = S extends '0'
  ? S
  : S extends `${'0'}${infer R}`
  ? RemoveLeadingZeros<R>
  : S

// 获取字符串排除最后一个字符的部分，例如 'abcd' => 'abc'
type Initial<T extends string> =
  ReverseString<T> extends `${infer First}${infer Rest}`
    ? ReverseString<Rest>
    : T

// 将字符串解析为数字，例如 '123' => 123
type ParseInt<T extends string> =
  RemoveLeadingZeros<T> extends `${infer Digit extends number}` ? Digit : never

// 基于一个数字的字符串格式，进行减 1 操作
// 本题的核心算法体现在这里
type MinusOneForString<S extends string> =
  S extends `${Initial<S>}${infer Last extends NumberLiteral}` // 取出最右侧的一位数字
    ? Last extends '0'
      ? `${MinusOneForString<Initial<S>>}${MinusOneMap[Last]}` // 如果是 0，则对当前位减 1 后，还要递归地对左侧的数字进行减 1
      : `${Initial<S>}${MinusOneMap[Last]}` // 如果不是 0，则对当前位减 1 后，直接返回最终结果
    : never

type MinusOne<T extends number> = T extends 0 // 处理 T 为 0 这种边界情况，毕竟我们的计算器不支持负数
  ? -1
  : ParseInt<MinusOneForString<`${T}`>>
