/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-12 14:47:37
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-12 15:51:47
 * @FilePath: \JavaScript\Ts\src\8单例设计模式2.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */



export default class MyLocalStorage {

    // 1.设为私用。外部不能new
    private constructor() {

    }

    ////
    ///1．带static关键字的方法就是一个静态方法
    //2．静态方法和对象无关，外部的对象变量不能调用静态方法和静态属性,
    //3．外部可以通过类名来调用
    // 4.静态方法不能访问实例上的属性

    // 
    // 
    private static localStorage: MyLocalStorage

    public static getInstance() {
        if (this.localStorage) { return this.localStorage }
        else {
            this.localStorage = new MyLocalStorage()
            return this.localStorage
        }


    }

    public setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    public getItem(key: string) {
        let value = localStorage.getItem(key)
        return value != null ? JSON.parse(value) : null
    }

}