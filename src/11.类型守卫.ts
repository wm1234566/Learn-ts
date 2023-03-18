/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-15 10:37:56
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-16 11:36:59
 * @FilePath: \JavaScript\Ts\src\11.new底层.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// function Person(phone,age)
// {
//     this.age=age;
//     this.phone=phone;
//     this.showone=function () {} //实例方法
// }
// Person.prototype.doEat=function (){
//     console.log("电话",this.phone)
// }

// let person=new Person("234",344)

/*请编写一个操作对象方法和属性的函数实现以下功能// 
1．当对象字符串属性有空格时就去掉空格后输出．
2．当遇到对象函数时就执行,其他数据类型的属性一律直接输出// 
3.只有对象中包含allowoutput属性时,才允许输出。
4．函数接收到外部传入的null, undefined, {}时，直接输出不是一个合法的对象。
//考核点:
1．考核对类型守卫的熟练运用程度
2.静态方obj
*/



function processObjOutpuobj1(obj:any){
    let isOutput=false;
    if(obj===null && typeof(obj)==="undefined"&& JSON.stringify(obj)==="{}")
    {
        return new Error("不是一个合法的对象")
    }
    if( "allowoutput" in obj)
    {
        isOutput=true
    }


    if(isOutput=true)
    {
        for (const key in obj) {
            let value=obj[key]
          
            if(typeof value ==="function")
            {
            //   value()
             obj[key]()
            }
           else
            {
                // 把范围缩小

                if(typeof value==="string")
                {
                    console.log((value.split(' ')).join())
                }else
                {
                     console.log(value)
                }
            }
          }
    }
    
}