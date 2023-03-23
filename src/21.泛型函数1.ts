/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-20 21:28:33
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-21 16:26:47
 * @FilePath: \JavaScript\Ts\src\21.泛型函数1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//
//没有用泛型
//快速排序方法
//3 1 8 9 20 15 2 7 13 11 19 18 5 6 17 4
//第一轮:中间数:13  左数组保存:3 1 8 9 2 7 11 5 6 4 [cc] 比13小的
// 右数组保存:20 15 19 18 17 比13大的

// return quickSort(left).concat(mid, quicksort(right))
//因为return左数组在前,会先一直先执行完左数组 再连接中间数 然后再一直执行完右数组
// 先一直先执行完左数组，执行过程如下:
//左数组一直执行第一次:拿cc左数组当新数组【递归】继续选中间数:
//cc左数组当新数组递归:
// 中间数: 7  分解出左数组:3 1 2 5 6 4【dd]
//           分解出右数组:8 9 11 [DD]
//规律依旧:因为return左数组在前,cc左数组等待dd左数组执行完成后继续执行后续连接操
//dd左数组当新数组递归;
//中间数:5  左数组 3 1 2 4[ee]   右数组6

//============== dd左数组等待ee左数组执行完成后继续执行后续连接操作===
//   ee左数组当新数组递归;
//   中间数:2 左数组1 [ff]  右数组3 4【hh】

///  继续递归ff左数组，但ff左数组只有1个数，会停止并退出递归，然后链接中间数2
//   1.concact(2)=1 2 [OO] 等待hh右数组递归完成后一并连接
//  再继续递归hh右数组 3 4 分解出中间数4 左数组:3[ii] 右数组【无】
///  ii左数组为1个数,不再递归，最后连接为3，4 【TT]
//  00和TT进行连接最后1，2，3，4






// 1.先从数列中取出一个数作为基准数。
// 2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。
// 3．再对左右区间重复第二步，直到各区间只有一个数。



(function () {

/*
    function quickSort(arr: Array<any>): Array<any> {

        if (arr.length < 2) { return arr }

        let left: Array<any> = [];
        let right: Array<any> = [];
        let mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
        console.log("mid: ", mid)
        for (let i = 0; i < arr.length; i++) {
            
            if (arr[i] < mid) {
                left.push(arr[i]);
            }
            else {
                right.push(arr[i])
            }
        }
        return quickSort(left).concat(mid, quickSort(right))

    }
*/


    function quickSort<T extends number|string>(arr: Array<T>): Array<T> {

        if (arr.length < 2) { return arr }

        let left: Array<T> = [];
        let right: Array<T> = [];
        let mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
        console.log("mid: ", mid)
        for (let i = 0; i < arr.length; i++) {
            
            if (arr[i] < mid) {
                left.push(arr[i]);
            }
            else {
                right.push(arr[i])
            }
        }
        return quickSort(left).concat(mid, quickSort(right))

    }


    let chineseArr = [3,1,8,9,20,15,2,7,13,11,19,18,5,6,17,4];
    let chineseArrSort = quickSort<number>(chineseArr)
    console. log( "chineseArrSort: ", chineseArrSort)
    let strArr: Array<string>= ["cba","kkdf","ndf" ,"bcdf" ,"dfd" , "cdf"]
    let strArrSort = quickSort<string>(strArr)
    console.log( "strArrSort: " , strArrSort)
    
    // 1.如果 排序的数字是double类型，想为他四舍五入，应该给函数加一个泛型
   //  T 为number|string 为啥直接识别为num为number？？？？？
    chineseArr.forEach((num)=>{
        num.toFixed(2)
    })
    
})();

(function (){

//(1).中文排序
 function sortChinese<T>(arr:Array<T>):T[]{ //T[]和Array<T>是一样的
   return arr.sort(function (firstnum,secondnum){
    return (<any>firstnum).localeCompare(secondnum,"zh—CN")
   }) 

 }

 function isChinese(arr:Array<any>):boolean{
    let pattern1 =/[\u4e00-\u9fa5]+/g;
   return arr.some((item)=>{
    return pattern1.test(item)
    })
 }
  // 

})();

(function (){





})()