/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-24 21:30:47
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-24 21:35:56
 * @FilePath: \JavaScript\Ts\src\29.Record.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export {}
type Worker={
    custname:string
}

type Customer={
    custname:string,
    age:number
}

type oneType<T,K>=K extends keyof T?K:never