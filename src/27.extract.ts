/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-24 16:28:35
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-24 20:51:38
 * @FilePath: \JavaScript\Ts\src\27.extract.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { isValidKey } from "./23.交叉类型";

(function(){



    class People {
        public name!:string;
        public age!: number
        public address!: string
   
        eat() {
        
        }
        }
        class ChinesePeople extends People {
               public national!:string

        
        }
        
        
        // cp.address
        
        type Extract<T,U>=T extends U ? T :never
        
        
        // Extract在父类和子类中应用
        
        // 定律：子类 extends 父类 Extract一直返回true 返回T类型
        type extractType=Extract<ChinesePeople,People> // ChinesePeople
        // 一般子类属性比父类多
        
        //定律:父类extends子类  因为父类继承子类本身不成立，所以一般都为false
        type extractType2=Extract<People,ChinesePeople> //People
        
        //那只有子类实例属性或实例方法【无论是public或private或protected】个数必须和父类一样多
        

        // 联合类型和Extract

        type unionExtractType=Extract<string,string|number> // string
        type unionExtractType2=Extract<string|number,string|number> // string|number

        type unionExtractType3=Extract<string|number,string> // string
         // 这种情况，会分解
         //第一次string extends string ?T: boolean// 结果string
         //第二次 number extends string ?T :boolean// 结果boolean
         //合起来的结果就是string | boolean 而never表示什么都没？


         // 函数和Extract
         
         type func1 =(one: number,two: string) => string
         type func2 =(one: number) => string

          //函数的泛型约束
          //函数类型上的泛型约束参数类型和返回值完全相同的情况下，
           //参数少的函数类型extends 参数多的函数类型返回true
          type beginType1 = func1 extends func2 ? func1 : never// never
           type beginType2 = func2 extends func1 ? func2 : never// (one: number) => string
           type extractType1 = Extract<func1,func2> // never
           type extractType3 = Extract<func2, func1>//=(one: number) => string
          // 参数多的是父类的位置



})();




// Extract真实应用场景
(function (){

// 之前泛型函数重载的
// 为何要写 T extend Object 防止他们传入的类型不是对象，但是这样写很繁琐

/*
 function  cross2<T extends object, U extends object>(objOne:T,objTwo:U): T & U
 function cross2<T extends object, U extends object, V extends object>(objOne:T,objTwo:U,objThree:V): T & U & V
 function cross2<T extends object, U extends object,V extends object>(objOne:T,objTwo:U,objThree?:V)   //(T & U)|(T & U & V) 最好使用自动推导
*/
// 

function  cross2<T , U >(objOne:Extract<T,object>,objTwo:Extract<U,object>): T & U
function cross2<T , U , V >(objOne:Extract<T,object>,objTwo:Extract<U,object>,objThree:Extract<V,object>): T & U & V
function cross2<T , U ,V >(objOne:Extract<T,object>,objTwo:Extract<U,object>,objThree?:Extract<V,object>)   //(T & U)|(T & U & V) 最好使用自动推导


  {
      let obj={} // 给值断言为类型
     

      

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






    
})()

