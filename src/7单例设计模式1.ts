/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-12 14:34:41
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-12 14:46:42
 * @FilePath: \JavaScript\Ts\src\7单例设计模式1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

localStorage.setItem("userinfo","用户名")

// 问题1.代码零散
//问题1:代码零散
//问题2:可读性差,不能一下子就能顾名思
//问题3:对后期的维护产生影响
//问题4:JSON.stringify，JSON.parse可以直接放到类中，如果这样写的多，就影响了开发

let  value =localStorage.getItem("userinfo")

// 获取值
let  res=JSON.parse(value?value:"");


