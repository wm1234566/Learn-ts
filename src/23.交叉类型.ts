/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-21 21:29:55
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-23 20:39:15
 * @FilePath: \JavaScript\Ts\src\23.交叉类型.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE/定义:将多个类型合并【多个类型属性和方法的并集】成的类型就是交叉类型。

 */
export { }

//定义:将多个类型合并【多个类型属性和方法的并集】成的类型就是交叉类型。

type objtype1 = { username: string, age: number }
type objtype2 = { custname: string, phone: number, age: number }

// 两个类有一个共同的属性

// let first: objtype1 = { username: "wangwu", age: 23 }
// let second: objtype2 = { custname: "lisi", phone: 111, age: 23 }



// 交叉类型和联合类型的区别

// 1.交叉类型是，多个类型属性合并的类型
let jiaochatype: objtype1 & objtype2 = {
    username: "wangwu", age: 23, custname: "lisi", phone: 111,
}
//基本类型不能交叉


//2.交叉类型
//（1）交叉类型中的一种
let uniontype: objtype1 | objtype2 = { username: "wangwu", age: 23 }

// (2)交叉类型中的一种,加上另一种
let uniontype2: objtype1 | objtype2 = { username: "wangwu", age: 23, custname: "lisi", } // 其中的一种加上，另一种的部分变量

// (3)两种类型合并
let uniontype3: objtype1 | objtype2 = {
    username: "wangwu", age: 23, custname: "lisi", phone: 111,
}
// (4)注意如果联合类，联合的是基本类型，那么只能是其中一种
type A1 = string | number
let a1: A1 = "123"
a1.split(" ")

// 区别，获取属性,交叉只能获取，两个类型全部方法和属性，而联合类，只能获取并集

// 联合类型赋值前只能. 对象的公共属性，


/********************* */

// let myassert = {
//     custname: "caipiao", phone: 111, address: "shenzhen"
// }



type objtype3 = { username: string, age: number }
type objtype4 ={ custname: string, phone: number,age:number}


let obj={}

obj as objtype3 & objtype4


let first:objtype3 = { username:"wangwu", age: 23 }
let second:objtype4 = { custname: "lisi", phone: 111,age:23 }



// 判断[]中的类型
export function isValidKey(
    key: string | number | symbol,
    object: object
): key is keyof typeof object {
    return key in object;
}



Object.keys(first).forEach((key)=>{
    if(isValidKey(key,first))
    { 
        
        obj[key]=first[key]
    }

})

Object.keys(second).forEach((key)=>{
    if(isValidKey(key,first))
    { 
        if(!obj.hasOwnProperty(key))
        {
            obj[key]=second[key]
        }
        
        
    }

})



