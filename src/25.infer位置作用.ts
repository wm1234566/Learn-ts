/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-24 09:58:44
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-24 11:23:01
 * @FilePath: \JavaScript\Ts\src\25.infer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export { }
// 例子1 泛型约束

// type inferType<T> = string extends People ? P : T

// 如果string 是People的子类或相同，则返回P否则返回T

type inferType1<T> = T extends (param: infer P) => any ? P : T

// infer是守卫P类型的关键字，修饰数据类型





/*************** */

// 要求如下：如何获取函数类型的参数类型，和他返回值的类型呢？

interface customer {
    custname: string
    buymoney: number
}



// 获取cust 和void的类型
type custFuncType = (cust: customer) => void

// infer只能出现在extends语句中
type inferType3<T> = T extends (param: infer P) => any ? P : T

// extends 前面的T 如何和后面的相匹配，子类或自己，返回p，T是参数由inferType传入,例如

type inferResulet = inferType3<custFuncType>

// 其实就
//type inferResulet1=custFuncType extends (param:infer p)=>any ? P :T 
// (cust: customer) => void 是(param:infer p)=>any的子类
// 注意：extends后面的函数，参数只能少，不能多，类型也要一样，不然就返回T


/*************** */
class Subject {
    constructor(public subid: number, public subname: string) {
       // subid 科目编号
       // subname 科目名字

    }
}


let chineseSubject = new Subject(100, "语文")
let mathSubject = new Subject(101,"数学")
let englishSubject = new Subject(101, "英语")
let setZhangSanSubject = new Set<Subject>([chineseSubject,mathSubject]); 


// 获取set的泛型
type Elementofo<T> = T extends Set<infer E> ? E : never

type ss = typeof setZhangSanSubject
type Sub=Elementofo<ss>


// 获取数组类的泛型

let a:Array<string>=["ss"]
type ArrayType<T>= T extends Array<infer P>?P:any
type arrayRes=ArrayType<typeof a>