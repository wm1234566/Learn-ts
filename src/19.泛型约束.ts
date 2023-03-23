/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-19 20:33:59
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-20 19:40:53
 * @FilePath: \JavaScript\Ts\src\19.泛型约束.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 1. extends
class Container<T extends object>{
    t!:T;
    show():T{
        return this.t
    }
}

let obj2:object={username:"lisi",age:23}
let c =new Container<object>() // //object可以具体化T extends objectl
c.show()

type objtype={username:string,age:23}
let obj:objtype={username:"wangwu",age:23}

let obj3=<object>obj // objtype类型是 object的子类型

let d =new Container<objtype>()
d.show();


// 2 . keyof

(function (){



    type objType={username:string,age:number}

  let obj={address:"xx",phone:111,descri:"顺利"}
  type keyofobj= keyof typeof obj
   
  let a:keyofobj="phone"//

  // 获取类的静态属性的联合类型

  class Preson{

    static abc:string
    constructor(public name:string,public age:number){

    }

  }

// 类型获取属性类型
type newType =Preson["name"]
type newType2=keyof Preson
// let abcd:newType2= "nme"

})();

// 3. extends keyof

(function (){

class ObjectImpl<T extends object,K extends keyof T>
{
    constructor(public object_:T,public key_:K)
    {
             
    }
    get value()
    {
        return this.object_[this.key_] 
    }
    set value(newValue:T[K]) // K表示 T对象属性的联合类型，T表示对象类型
    
    {
          this.object_[this.key_]=newValue
    }
}
let  Obj={username:"sss",age:11}
 
let obj1=new ObjectImpl(Obj,"username");//不用出入<Obj,"username"> 自动推理



})()