/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-16 10:46:15
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-16 11:25:09
 * @FilePath: \JavaScript\Ts\src\14.自定义守卫.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */
class Animo{
    public age!:number
     eat():void
     {
     }
}

 function isAnimo(animo:any):animo is Animo{
      return animo instanceof Animo;

}
let abc ="ddd"
if(isAnimo(abc))
{
    abc.age
}

function processObjOutpuobj(obj:any){
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

                if(isString(value))
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

//   if(typeof value==="string") 这种写法不常用，因为如何很多修改起来麻烦，一般使用自定义守卫

// 函数内的类型守卫，无法传递到函数内

/*function isString(str:any):boolean {
    if(typeof str ==="string")
    return true
    return false
}*/

function isString(str:any):str is string{ // 含义是：当返回true的时候，str就是string类型

    return typeof str ==="string"
}