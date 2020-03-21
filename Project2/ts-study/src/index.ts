// 基础类型
// number, boolean, string, undefined, null, symbol, bigint， 一定要跟Number，Boolean，String区分开来
let a: number  = 10000;
let b:string;
b = 'hello world';

// 其他类型
// any，unknown, never, 数组，元组，object
let c:any = 1000;
c = 'wangzhan';

let d:unknown = 1000;
d = 'wangzhan';

// console.log(c.name, c(), new c(), d.name, d(), new d());

let e: number [];
let f: Array<number>;

// f = [1,2,3,4,'hello'];


// let g: [number, string, object];
// g = [100, 'hello', 'world'];

// 接口
var h = {
    code: 200,
    data: {},
    msg: '请求成功'
}
interface AjaxType{
    code?: number,
    data: {},
    readonly msg: string,
    handClick: Function
}
// var i = {} as AjaxType;
// setTimeout(()=>{
//     i = h;
//     i.code = 300;
//     i.msg = '';
// })

class C{
    private a:number = 100;
    public b:number = 100;
    protected c:number = 100;

    func = ()=>{
        console.log('a...', this.a)
    }
}

new C().func();

class D extends C{
    func2 = ()=>{
        console.log('c....', this.c);
    }
}

new D().func2();


const add: (a:number, b:number)=>boolean = (a:number, b:number)=>Boolean(a+b)
const add2 = function(a:number, b:number):boolean{
    return false;
}


function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

var s = swap([function(){console.log('美股连续熔断三次')}, {name: '特朗普'}]);
console.log('s...', s);

var x: Array<number|string|boolean|null> = [];

var 