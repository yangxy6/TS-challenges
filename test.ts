// promise 响应类型
type PromiseResType<T> = T extends Promise<infer R> ? R : T;

// 验证
async function strPromise() {
  return "string promise";
}

interface Person {
  name: string;
  age: number;
}
async function personPromise() {
  return {
    name: "p",
    age: 12,
  } as Person;
}

type StrPromise = ReturnType<typeof strPromise>; // Promise<string>
// 反解
type StrPromiseRes = PromiseResType<StrPromise>; // str

type PersonPromise = ReturnType<typeof personPromise>; // Promise<Person>
// 反解
type PersonPromiseRes = PromiseResType<PersonPromise>; // Person

type t1 = typeof strPromise;

//////////////////////////////////

type Fn<A extends any[]> = (...args: A) => any;
type FnArgs<T> = T extends Fn<infer A> ? A : any;

function strFn(name: string) {}

type StrFn = FnArgs<typeof strFn>; // [string]

type t2 = typeof strFn;

///////////////////
type ParamType<T> = T extends (...args: infer P) => any ? P : T;
interface User {
  name: string;
  age: number;
}

type Func = (user: User) => void;

type Param = ParamType<Func>; // Param = User
type AA = ParamType<string>; // string

type TTuple = [string, number];
type TArray = Array<string | number>;

type Res = TTuple extends TArray ? true : false; // true
type ResO = TArray extends TTuple ? true : false; // false

type Res2 = TTuple[number]; // string | number


interface RootObject {
  jdDeptList: JdDeptList[];
  maintainDeptList: JdDeptList[];
  modules: Module[];
  user: User;
}

interface User {
  userId: string;
  erpDeptId: string;
  erpDeptName: string;
  buId?: any;
  deptId: string;
  nickname: string;
  admin: boolean;
  supervisor: boolean;
  email: string;
  host: string;
}

interface Module {
  code: string;
  name: string;
  uri: string;
}

interface JdDeptList {
  buId: number;
  buName: string;
  children: Child[];
}

interface Child {
  deptId: number;
  deptName: string;
}