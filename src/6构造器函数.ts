/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-11 20:04:10
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-11 20:47:30
 * @FilePath: \JavaScript\Ts\src\6构造器函数.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ts构造器函数是没有返回值的

// 一个计算面积的对象，可以直接传递长宽，也可以传递长度和形状

// 各种图形的参数

type Type_chartParam = {
    width?: number;
    height?: number;
    radius?: number

}

class Square {

    // constructor(public params: Type_chartParam, public type: string) {

    // }
    public widht:number=0;
    public height:number=0;
    // public type_chart:Type_chartParam;
    constructor(type_chart:Type_chartParam)
    constructor(widht:number,height:number)
    // constructor(value:number|Type_chartParam,height:number=0)
    constructor(value:any,height:number=0)
    {
        
        if(typeof value==="number")
        {
            this.widht=value
            this.height=height
        }
        else{
            if(value.height&&value.width)
            {
                this.widht=value.width
                this.height=value.height
            }
        }

       
      
    }
    public getArea(): number {
        if (this.widht && this.height) {
            return this.widht* this.height
        }
      return -1

    }

}
// 两种构造器方法
let square =new Square(40,50);
let chart:Type_chartParam={width:50,height:90}
let square2=new Square(chart)

console.log("发出",square,square2)