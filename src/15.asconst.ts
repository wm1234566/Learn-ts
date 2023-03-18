/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-16 11:37:05
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-16 11:47:33
 * @FilePath: \JavaScript\Ts\src\15.asconst.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const定义数组，不希望里面的元素被改变？？？

/*
const arr1=[10,30,40,"abc"]
   
//arr1=[] // 整体改变，无法改变
arr1[0]="123" //局部改变，可以改变
*/

const arr1=[10,30,40,"abc"] as const //只读限制


// 应用,不希望函数改变参数传入的数组
function showArr(arr: readonly any[]) {
    // arr[0]=100; 不允许修改
    
}
showArr(arr1) //无法传入
