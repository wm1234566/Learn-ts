/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-16 10:24:41
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-16 10:37:57
 * @FilePath: \JavaScript\Ts\src\13.抽象类.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface MouseListenerProcess {
    mouseReleased(e: any): void // 鼠标按钮在组件上释放时调用
    mousePressed(e: any): void//鼠标按键在组件上按下时调用。
    mouseEntered(e: any): void//鼠标进入到组件上时调用。
   
    mouseclicked(e: any): void//鼠标按键在组件上单击（按下并释放）时调用。
    mouseExited(e: any): void//鼠标离开组件时调用。
}
// 只想实现接口下面两个方法，不行实现其他方法？？？
 // 将类变成抽象类，将需要实现的方法变成抽象方法


// class MyMouseListenerProcess implements MouseListenerProcess {
//     mouseReleased(e: any): void {
//         throw new Error("Method not implemented.")
//     }
//     mousePressed(e: any): void {
//         throw new Error("Method not implemented.")
//     }
//     mouseEntered(e: any): void {
//         throw new Error("Method not implemented.")
//     }
//     mouseclicked(e: any): void {
//         throw new Error("Method not implemented.")
//     }
//     mouseExited(e: any): void {
//         throw new Error("Method not implemented.")
//     }
// }
abstract class MouseListenerProcessAdapter implements MouseListenerProcess  {
    mouseReleased(e: any): void {
        throw new Error("Method not implemented.")
    }
    mousePressed(e: any): void {
        throw new Error("Method not implemented.")
    }
    mouseEntered(e: any): void {
        throw new Error("Method not implemented.")
    }
   abstract mouseclicked(e: any): void 

// {
//         throw new Error("Method not implemented.")
//     }
   abstract mouseExited(e: any): void 
//    {
//         throw new Error("Method not implemented.")
//     }

}
 
class MyMouseListenerProcess extends MouseListenerProcessAdapter {
    // mouseReleased(e: any): void {
    //     throw new Error("Method not implemented.")
    // }
    // mousePressed(e: any): void {
    //     throw new Error("Method not implemented.")
    // }
    // mouseEntered(e: any): void {
    //     throw new Error("Method not implemented.")
    // }
    mouseclicked(e: any): void {
        throw new Error("Method not implemented.")
    }
    mouseExited(e: any): void {
        throw new Error("Method not implemented.")
    }
}


