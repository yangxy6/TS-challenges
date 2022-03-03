import { Equal, Expect, NotAny } from "@type-challenges/utils";
// 期望是一个 string 类型
type HelloWorld = string;

// 你需要使得如下这行不会抛出异常
type test = Expect<Equal<HelloWorld, string>>;

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
