/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-24 21:30:47
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-27 17:39:02
 * @FilePath: \JavaScript\Ts\src\29.Record.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export { }
type Worker1 = {
    custname: string
}

type Customer = {
    custname: string,
    age: number,
    phone: string
}

// 1.
// 获取T对象类型属性，联合类型
type oneType<T, K> = K extends keyof T ? K : never
type oneTypeRes = oneType<Worker, "custname">


// 获取T类型对象的属性的类型
type twoType<T, K> = K extends keyof T ? T[K] : never

type twoTypeRes = twoType<Customer, "age"> //number

// 2.
type oneType1<K> = K extends keyof any ? K : never

type oneType1Res = oneType1<Worker1> //never
let strName: string = "abc";
type threeRes = oneType1<typeof strName>//string
let stuSymid: symbol = Symbol["search"]
type fiveRes = oneType1<typeof strName>

//3.

type Record<K extends keyof any, T> = {
    // [P in K]:T   
    [P in string]: T
    // [P in "username"|"age"]:T
}
//前一个K是键类型，后一个T是值类型
// K如果是any 那么整个是在是一个数组 [x:string]:T
// K如果是联合类型，则每个类型，都是对象的属性
//{
//    age: Customer;
//    username: Customer;
//  }
// K 如果是字符串，那么，[x:string] 对象有多个字符串属性 
// K 如果是number，那么 [x:number] 为一个数组



type resultRecord = Record<string, Customer>

let obj: resultRecord =
{
    "username": { custname: "wangwu", age: 23, phone: "111" },
    "age": { custname: "wangwu", age: 23, phone: "111" }
}



// 4.数据扁平化，把数组变成对象，
// 对象数组中根据产品id号，获取产品对象

//定义Goods接口
const goodsymid = Symbol("goodid")

interface Goods {
    [goodsymid]: number
    name: string
    price: number
}

//实现数据扁平化[准备]// Record类型
type Record1<K extends keyof any, T> = {
    [P in K]: T
}
// 与上面相比，属性无限制，可以是任意类型,只有一个泛型

type Record2<K extends keyof any, T> = {
    [P in keyof any]: T
}
//type resultGoodsType = Record1<number, Goods> //数组

let goodRecord: Record1<number, Goods> = {}
let good: Goods = { [goodsymid]: 101, "name": "苹果", "price": 9 }

//good变成=>{101:{[goodsymid]:101,"name":"苹果","price":9}}

type newGood = Record1<typeof goodsymid, Goods>

goodRecord[good[goodsymid]] = good
// {101:{[goodsymid]:101,"name":"苹果","price":9H}
for (let goodid in goodRecord) {
    console.log(goodid, ": ", goodRecord[goodid])
}


// 5. Map与Record相比较
let goodMap=new Map<string,Goods>()

goodMap.set("101",good)
