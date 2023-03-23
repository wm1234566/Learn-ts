/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-20 19:49:10
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-20 20:32:07
 * @FilePath: \JavaScript\Ts\src\20.泛型接口.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
(function (){


interface List<T>{
    add(ele:T):void;
    get(index:number):T;
    size():number;
    remove(value:T):T;
}

// class类实现接口
class LinkedList<T> implements List<T>{
    add(ele: T): void {
        throw new Error("Method not implemented.");
    }
    get(index: number): T {
        throw new Error("Method not implemented.");
    }
    size(): number {
        throw new Error("Method not implemented.");
    }
    remove(value: T): T {
        throw new Error("Method not implemented.");
    }
    
}
// 接口的多态
let arrlist:List<string>= new LinkedList<string>()
    
})