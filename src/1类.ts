/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-02-22 17:36:08
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-01 21:30:48
 * @FilePath: \JavaScript\Ts\src\1类.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Proson{

    // 对象的属性
    public name:string | undefined // 4.0之前解决方式,不好
    public age:number=11
    public phone:string ="1111"


    // 引用属性
    //public img:string[]=["sss"] //数组
    //public img:Array<string>=["ddff"]

    public resolve:()=>void = ()=>{}


    // 对象的方法
    // 类中定义方法
   public run():number{
        return 11

    }
    // 方法的默认返回值为void
    doEat(who:string,addrss:string):void
    {
        console.log(`全局属性${this.age}---${who}`)
    }
    // 构造函数 参数加_表示为构造器参数
    constructor(name_:string,age_:number,phone_:string){
          this.name=name_
          this.age=age_
          this.phone=phone_
    }
}


/*
// 1.通过实例来赋值，注意每个对象属性都共享的，每个都有独立的实例，而方法是原形上的是共享的
let zhangsan:Proson=new Proson();
zhangsan.name="张三" // 用对象属性直接赋值
zhangsan.doEat("小张","你家")
console.log("对象的实例",zhangsan)
*/

//2.使用构造函数
let lisi=new Proson("lisi",30,"10086")


