/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-11 17:29:06
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-11 17:51:26
 * @FilePath: \JavaScript\Ts\src\5ArrayList.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//1.对现有的数组进行封装，让数组增删改变得更加好用l2.提供get方法 remove方法显示方法【add方法】
//其中需求中的remove方法有两个，我们用方法重载来实现l

class ArrayList{


  constructor(public element:Array<object>)
  {

  }
  // 如果是数字id则是索引删除，如果是一个对象则删这个对象
  remove(index:number):number
  remove(obj:object):object
  remove(value:number|object):number|object
  {
    if(typeof value==="number")
    {
             this.element.splice(0,value)
             return value

    }
    else{

        this.element.splice(0,this.element.indexOf(value)) 
             return value
    }
    
          
  }

}

let stuone = { stuname: "wnagwu", age: 23 }
let stuTwo = { stuname: "lisi", age: 39 }
let stuThree = { stuname: "liuqi", age: 31 }

let arr=new ArrayList([stuone,stuTwo,stuThree])

console.log(arr.remove(1),arr)
