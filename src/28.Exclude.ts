/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-24 20:57:15
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-24 21:23:29
 * @FilePath: \JavaScript\Ts\src\28.Exclude.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


export {}


interface Worker {
    name: string
    age: number
    email: string
    salary: number
}

interface Student{ 
name: string
age: number
email: string
grade: number}


type Exclude<T,U>=T extends U ? never : T


type isResultType= Extract<"age"| "email"| "salary"|"dfdf", "name"|"age"|"email"|"salary">
// 转为
type isResultType2= Extract<"age"| "email"| "salary"|"xx" , keyof Worker>
// Extract 从T开始比较，age有返回T xx 没有返回never

type isResultType3= Exclude<"age"| "email"| "salary"|"xx" , keyof Worker>
// Exclude也是一个一个比较，从T比较，age 有 返回never，"xx" 没有返回T

// 求在Worker中有的，在Student中没有的属性

type isResultType4= Exclude<keyof Worker,keyof Student>