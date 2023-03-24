/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-24 11:26:45
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-24 16:00:45
 * @FilePath: \JavaScript\Ts\src\26.带参工程方法.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export {}
//5-3constructorparam.ts准备

class ChinesePeople {
    
    // 准备类
    public name: string
   public sex : string
   public phone: string
   public national:string

constructor(name: string, sex: string,phone: string, national: string)
{this.name = name;
this.sex = sex
this.phone = phone
this.national = national}
}

// 通用构造函数类型
 //type Constructor<T> = new ( ...args: any[]) =>T 

 // ChinesePeople 的构造函数类型 注意构造函数就在普通函数声明前面加new，就是构造函数类型
let myChinesePeople:new (name: string, sex: string, phone: string, national: string)=>ChinesePeople=ChinesePeople

//new 一个变量
let chinesePeople=new myChinesePeople("wangwu","男","1111","汉族")

// infer获取构造器参数类型
type constructorParamType<T extends new (...args: any[]) =>any> =T extends new (...args: infer R) =>any ? R : any;


// infer 获取构造器返回值类型
// <T extends new (...args:any[])=>any> 限制T传入的类型，必须是一个构造函数
// 这样就不会出现

type gzfunction<T extends new (...args:any[])=>any>= T extends new (...args:infer P)=>infer E?E|P:T

type newGz=gzfunction<typeof myChinesePeople>
type newGz2=gzfunction<typeof ChinesePeople>

let Abc:newGz // P会被变为元组
let Abc2:newGz2


/// 通用构造函数

type Constructor<T>= new (...args:any[])=>T

/// 获取构造函数的参数类型
type funParaType<T extends new (...args:any[])=>any>= T extends new (...args:infer P)=>any?P:any

// 带参数的工厂函数 限制参数类型
// function createInstance<T)=>any>(coust:Constructor<T>,...args:funParaType<typeof ChinesePeople >) // typeof ChinesePeople 是一个值
function createInstance<T,CP extends new (...args:any[])=>any>(coust:Constructor<T>,...args:funParaType<CP>) //最终版本，CP 必须和funParaType 一样给一个类型限制
{
    return new coust(...args) // 直接传入数组
}
//ChinesePeople <>中的是类型，（）里面的是变量

createInstance<ChinesePeople,typeof ChinesePeople>(ChinesePeople,"wangwu","sdf","dfd","")
//createInstance(ChinesePeople,"wangwu",105);// 自动推导
//console.log(createInstance(ChinesePeople,"wangwu",105))

