/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-18 14:53:23
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-18 16:37:19
 * @FilePath: \JavaScript\Ts\src\17.泛型类.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


function isNumber(num: any): num is number {
    return typeof num === "number"
}

export {} // 本模块当我唯一

(function (){

    class ArrayList1 {
        public element: Array<object>
        public index: number = 0;
        constructor(element: Array<object> = []) {
    
            this.element = element
    
        }
        public add(ele: object) {
            this.checkIndex()
            this.element[this.index++] = ele;
        }
        //检查索引
        public checkIndex() {
            if (this.index < 0)
                throw new Error("下标不能为负数")
    
        }
    
        get(index: number): object {
            return this.element[index]
        }
    
        // 如果是数字id则是索引删除，如果是一个对象则删这个对象
        remove(index: number): number
        remove(obj: object): object
        remove(value: number | object): number | object {
            if (isNumber(value)) {
                this.element.splice(0, value)
                return value
    
            }
            else {
    
                this.element.splice(0, this.element.indexOf(value))
                return value
            }
    
    
        }
    
    }
    
    let stuone1 = { stuname: "wnagwu", age: 23 }
    let stuTwo1 = { stuname: "lisi", age: 39 }
    let stuThree1 = { stuname: "liuqi", age: 31 }
    
    //   let arr17=new ArrayList([stuone,stuTwo,stuThree])
    
    //   console.log(arr.remove(1),arr17)
    
    let arr17 = new ArrayList1()
    arr17.add(stuone1)
    arr17.add(stuTwo1)
    arr17.add(stuThree1)
    console.log(arr17);
    // 上面如果数组的类型不是object呢？我们希望，他是一个可变的类型
    

})();

(function (){

// 参数化的数据类型
// class ArrayList1<T={}> {
    class ArrayList1<T=number> {
    // class ArrayList1<T=any> {
        public element: Array<T>
        public index: number = 0;
        constructor(element: Array<T> = []) {
    
            this.element = element
    
        }
        public add(ele: T) {
            this.checkIndex()
            this.element[this.index++] = ele;
        }
        //检查索引
        public checkIndex() {
            if (this.index < 0)
                throw new Error("下标不能为负数")
    
        }
    
        get(index: number): T {
            return this.element[index]
        }
    
        // 如果是数字id则是索引删除，如果是一个对象则删这个对象
        remove(index: number): number
        remove(obj: T): T
        remove(value: number | T): number | T {
            if (isNumber(value)) {
                this.element.splice(0, value)
                return value
    
            }
            else {
    
                this.element.splice(0, this.element.indexOf(value))
                return value
            }
    
    
        }
    
    }
    
    let stuone1 = { stuname: "wnagwu", age: 23 }
    let stuTwo1 = { stuname: "lisi", age: 39 }
    let stuThree1 = { stuname: "liuqi", age: 31 }
    
    //   let arr17=new ArrayList([stuone,stuTwo,stuThree])
    
    //   console.log(arr.remove(1),arr17)
    
    // 使用的时候给定类型

    let arr17 = new ArrayList1<{stuname: string;age: number;}>()
    let arr18 = new ArrayList1<typeof stuone1>()
    arr17.add(stuone1)
    arr17.add(stuTwo1)
    arr17.add(stuThree1)
    console.log(arr17);
    // 上面如果数组的类型不是object呢？我们希望，他是一个可变的类型

})();

(function (){
  class customer{
    constructor(public custname:string,public age:number){
        
    }
  }
  // 顾客类的两个对象
  let wangwucust = new customer("wangwu",23);//new object object
  let lisicust = new customer( "lisi",23);
  function isCustomer(value:any):value is customer
  {
    return  value instanceof customer
  }

  console.log("打印",isCustomer(wangwucust),isCustomer(null),isCustomer(undefined));
  
})()