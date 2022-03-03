# ts 内置类型

## Exclude

用于剔除联合类型中指定类型，返回新的联合类型（局限于联合类型）

实现：

```ts
type MyExclude<T, U> = T extends U ? never : T;
```

1. extends 表示条件判断
2. never 表示不存在的类型，与其他类型联合后相当于删除属性

## & 交叉类型

将多个类型合并成一个类型
