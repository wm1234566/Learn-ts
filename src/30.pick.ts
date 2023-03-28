/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-27 17:43:43
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-27 18:00:41
 * @FilePath: \JavaScript\Ts\src\30.pick.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export {}

type abc<T,K extends T>={
    [x:string]:K
}
type F= string|number
type s=string

// type newTT=abc<s,F>
// 类型“F”不满足约束“string”。
 // 不能将类型“number”分配给类型“string”。ts(2344)