/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-18 16:40:26
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-19 20:24:16
 * @FilePath: \JavaScript\Ts\src\18.分页类.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */



    
export class Food{ // 食物类
//和数据表对应的一个实体.export class Food {//食物类
constructor(public foodid: string, public shop: string,
    public foodName: string){
    
    }

}

export class Flower { // 花类

}

export class Customer{} // 顾客类



// 美食DAO类
export class FoodDao{
    arrayListFood!:ArrayList

    //初始化
    init(){

    }
    // Dao中查询所有美食的方法
    findAllFoods()
    {
        return this.init();
    }
    //
}