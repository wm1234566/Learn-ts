/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-23 20:44:04
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-23 22:00:41
 * @FilePath: \JavaScript\Ts\src\24.泛型函数重载ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { isValidKey } from "./23.交叉类型"

interface Button {
    btntype: string,
    text: string
}
interface Link { 
    alt: string, 
    href: string }
interface Href { 
    linktype: string, 
    target: openlocation }
enum openlocation { 
    self = 0,
    _blank,
    parent
}

let button: Button= {
    btntype: 'normal',
    text: '跳转到白度',
}

let link: Link = {
    alt: 'goto baidu',
    href: 'http://www. baidu.com'
}

let href:Href = {
    linktype:"外网",
    target: openlocation._blank
}
   
// 合并这些对象
function cross<T extends object, U extends object>(objOne:T,objTwo:U): T & U{
    let obj=<(U & T)>{} // 给值断言为类型
    // obj as (U & T) 
    Object.keys(objOne).forEach((key)=>{
       if(isValidKey(key,objOne))
        {
          obj[key]=objOne[key]
        }
    })
    Object.keys(objTwo).forEach((key)=>{
        if(isValidKey(key,objTwo))
         {
            if(!obj.hasOwnProperty(key))
            {
                obj[key]=objTwo[key]
            }
          
         }
     })

   return obj;
}

    cross(cross(button,link),href)






    // 如果要一次性三个参数呢？泛型函数重载
  function  cross2<T extends object, U extends object>(objOne:T,objTwo:U): T & U
   function cross2<T extends object, U extends object, V extends object>(objOne:T,objTwo:U,objThree:V): T & U & V
   function cross2<T extends object, U extends object,V extends object>(objOne:T,objTwo:U,objThree?:V)   //(T & U)|(T & U & V) 最好使用自动推导
    {
        let obj=<(U & T)>{} // 给值断言为类型
       

        

        // obj as (U & T) 
        Object.keys(objOne).forEach((key)=>{
           if(isValidKey(key,objOne))
            {
              obj[key]=objOne[key]
            }
        })
        Object.keys(objTwo).forEach((key)=>{
            if(isValidKey(key,objTwo))
             {
                if(!obj.hasOwnProperty(key))
                {
                    obj[key]=objTwo[key]
                }
              
             }
         })
        if(objThree) // 可选判断存在即可！！！
        {
            let obj2=<U & T & V>obj  // 重新断言

            Object.keys(objThree).forEach((key)=>{
                if(isValidKey(key,objTwo))
                 {
                    if(!obj.hasOwnProperty(key))
                    {
                        obj2[key]=objThree[key]
                    }
                  
                 }
             })
        
             return obj2
        }
 
    
       return obj; // 返回值如何解决！！！
    }
    // 返回不一定要是 两个的联合类型，可以用多个return来返回

   let aa= cross2(button,link,href)
   let bb=cross(button,link)