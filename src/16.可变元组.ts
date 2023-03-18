/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-16 11:52:36
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-18 11:42:07
 * @FilePath: \JavaScript\Ts\src\16.可变元组.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 可变元组
// let [username,no]:[string,number]=["wangwu",23,"sdfsd","abcd","dddsfs"]
// 前面两个是固定需要的，后面的可能要可能不要，如何实现？？
// let [username,no]:[string,number,...any[]]=["wangwu",23,"sdfsd","abcd","dddsfs"]

//let [username,age,...rest]:[string,number,...any[]]=["wangwu",23,"sdfsd","abcd","dddsfs"]

// console.log("username",username) //username wangwu
// console.log("age",age)  //age 23
// console.log("rest",rest) //rest [ 'sdfsd', 'abcd', 'dddsfs' ]

// 给元组添加标签
let [username,age,...rest]:[naem_:string,age_:number,...rest:any[]]=["wangwu",23,"sdfsd","abcd","dddsfs"]


console.log("username",username) //username wangwu
console.log("age",age)  //age 23
console.log("rest",rest) //rest [ 'sdfsd', 'abcd', 'dddsfs' ]

// 如果可变部分为中间部分呢？
let [info,ccc,...result]:[info_:string,_ccc:number,...result:any[],_descri:string]=["abc",11,"cd","ee"]
// 前面不可以加，后面可以加变量


const arr3:(string|number)[]=[10,30,40,"abc",30] 
const arr4=[10,30,40,"abc",30] as const // 不可变数组没有类型 


// 元组变成数组

/*
let constnum2=[10,30,40,60,"abc"]
// 不能将类型“(string | number)[]”分配给类型“[number, ...any[]]”。源不提供目标中位置 0 处所需元素的匹配项。
let [x2,...y2]:[number,...any[]] = constnum2 // 错误
let [x2,...y2]:[any,...any[]] = constnum2 // 错误 
*/

// 1.元组退化为数组
let constnum2=[10,30,40,60,"abc"]
// 不能将类型“(string | number)[]”分配给类型“[number, ...any[]]”。源不提供目标中位置 0 处所需元素的匹配项。
let [x2,...y2]:[...any[]] = constnum2 // 正确
// 2.将数组固定，将元组类型固定
let constnum3=[10,30,40,60,"abc"] as const
let [x3,...y3]:readonly[number,...any]=constnum3

// function tail(constnum5:readonly [any,...any[]]){
//     let arr=constnum5
// }
// tail(constnum3)



function tail(constnum5:readonly (string|number)[]){
    let [fiset,...rest]=constnum5
    return rest
}
tail(constnum3)