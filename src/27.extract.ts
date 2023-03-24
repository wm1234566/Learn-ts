/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-24 16:28:35
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-24 16:37:01
 * @FilePath: \JavaScript\Ts\src\27.extract.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export {}

class People {
public name!:string;
public age!: number
public address!: string
eat() {

}
}
class ChinesePeople extends People {


}

let cp = new ChinesePeople();

// cp.address

type Extract<T,U>=T extends U? T :never

// 定律：子类 extends 父类 Extract一直返回true 成立 为true
type extractType=Extract<ChinesePeople,People>