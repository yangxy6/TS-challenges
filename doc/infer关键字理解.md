# infer

表示在 extends 条件语句中待推断的类型变量，推断函数返回值类型

```ts
// infer推断是函数返回的类型 T继承函数=>函数返回类型R 否则any
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type fn = () => number; //infer推断是函数返回的类型
type fnReturnType = ReturnType<fn>; // number，T是函数类型

type t1 = ReturnType<number>; // any，T不是函数类型
```
