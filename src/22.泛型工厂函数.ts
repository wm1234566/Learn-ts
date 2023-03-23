/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-21 16:49:29
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-21 21:25:23
 * @FilePath: \JavaScript\Ts\src\22.泛型工厂函数.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 函数类型复习

(function () {


    // 定义函数类型
    type promiseFuncType = (resolve: string, reject: string) => any
    // 少函数参数可以赋值给多参数的函数类型
    let promsiseFunc: promiseFuncType = function (resolve): void {

        console.log(resolve);


    }

    // 一、通用函数类型
    type commonFunc = (...args: any) => any
    // 等价

    // 接口定义函数
    interface commonFuncInter {
        (...args: any): any
    }



    // 包含函数的对象接口
    interface commonFuncInter2 {
        age: string,
        eat: (...args: any) => string// 一个函数声明
        abc(...ages: string[]): number
        name: "sss"
    }


    // 获取对象接口属性的类型
    let func: commonFuncInter2["eat"] = function (count: string): string {
        return ""
    }
    //注意!： (...args:any)=>string和(...args:any):string是一个意思


    // 2.构造函数类型

    // 工厂函数类型定义:代表任意一个类的构造函数【等价JS的构造函数】的函数类型。


    //(1) ts中不能new一个函数
    function test() {

    }

    //let t=new test()//不能 new一个函数

    // (2)一个类有双重性质

    class Preosn {
        constructor(public name: string, public age: number) {

        }
    }
    // (1) 类构造函数对象变量
    Preosn.length //是一个变量
    // (2) 创建类对象的一个类型
    let cb = new Preosn("sdf", 33);

    // 类构造函数的类型是？

    //type PresonType=new (name:string,age:number)=>void // (...arg:any)=>any 普通函数类型


    //console.log("打印对象",new (name:string,age:number)=>Preosn )

    // Preosn as PresonType

    // PresonType as Preosn

    type ConstructorType = new (...arg: any) => any // 类构造函数的类型

})();

// 泛型工厂函数
(function () {

    //1.需求，创建每一个对象的时候，都打印出类和的参数，
    // 传统方法，在每一个类的构造函数中，添加一个打印函数，但是如果有几百个类呢？


    class CommercialBank {
        public address: string = "beijing"
        public name: string = "wangwu"
        static count: number
        constructor(name: string, address: string) {
            this.name = name
            this.address = address
        }
        loan(): void {
            console.log(this.name + "银行贷款");

        }
    }


    // 1.工程函数类型的使用

    type ConstructorType = new (...arg: any) => any
    let Constructor: ConstructorType = CommercialBank // new (...arg:any)=>CommercialBank
    // 左边是变量，右边也是变量，
    let con = new Constructor("天地银行", "万绿园")
    // 等价于
    let con2 = new CommercialBank("天地银行", "万绿园")

    // 

    //工厂函数[一些不方便或者没有办法直接new类名(）格式来创建对象]
    // 参数为 接口表示的构造函数类型
    function createInstanceFactory<T>(Constructor: { new(...arg: any): any }) {
        console.log(Constructor.name + "创建的对象");

        return new Constructor("广大银行", "万绿园")
    }
    createInstanceFactory(CommercialBank)

    // 3.泛型工厂函数

    function createInstanceFactory1<T>(Constructor: { new(...arg: any): T }):T {
        console.log(Constructor.name + "创建的对象");

        return new Constructor("广大银行", "万绿园")
    }
    createInstanceFactory1<CommercialBank>(CommercialBank)


})();

// 泛型工厂函数的应用
(function (){

    function Controller1(rootPath:string)
    {
        return function <T>(targetClass:{new (...args:any):T})
        {

        }
    }
    //希望变成
    function Controller2(rootPath:string):ClassDecorator
    {
        return function (targetClass)
        {

        }
    }
   // 实现ClassDecorator 的效果

   type MyClassDecorator=<T>(targetClass:{new (...args:any):T})=>any 
   // 下面的函数不一定返回，也可能返回数据，所以用any
   // 一个函数 fun(value:对象类型)的类型

   function Controller3(rootPath:string):MyClassDecorator
    {
        return function (targetClass) 
        {

        }
    }
   // 为何加了MyClassDecorator 下面的function可以什么都不写
   
   //MyClassDecorator 一个函数 fun(value:对象类型)的类型,而targetClass 被推断为一个类

})()