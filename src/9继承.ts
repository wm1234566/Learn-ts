/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-12 17:10:26
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-13 10:10:10
 * @FilePath: \JavaScript\Ts\src\9继承.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
需求1:汽车租赁功能实现:有小轿车,大巴,卡车三种类型的车,顾客可以租任意一种或多种不同类型的车,按照租用的天计算租金，同时为了响应国家对各类车安全的管理,对在租赁期内有过各种超载，超乘客数，酒后驾车等违规的车需额外支付一定的费用。
需求2:计算退回费用:最终退回顾客的费用为押金扣除使用天数，如押金不足需额外支付不足部分。
思考:品牌( brand ) VechileNo（车牌号）days(租赁天数) total(支付的租赁总费用) deposit (押金)
思考小轿车,大巴,卡车共同方法:计算租赁车的价格( calculateRent) 支付押金的方法( payDesposit)

安全规则方法(safeShow) Vechile交通工具




*/

class  Vechile{

     public brand:string;//品牌
     public vechileNo:string;// 车牌号
     public days:number;// 租赁天数
     public total:number;// 支付的租赁总费用
     public deposit:number;// 押金 
     constructor(brand_:string,vechileNo_:string,days_:number,total_:number,deposit_:number)
     {
        this.brand=brand_;
        this.vechileNo=vechileNo_;
        this.days=days_;
        this.deposit=deposit_;
        this.total=total_;

     }
     // 计算租车的价格(calculateRent)
     public calculateRent(){
      return 0
     } 
     // 支付押金的方法
     public payDesposit(){
      console.log(this.brand+"车牌号为:"+this.vechileNo+"支付了:"+this.deposit)
     }
     // 安全检查方法
     public safeShow(){
      console.log(this.brand+"车牌号为:"+this.vechileNo+"支付了:"+this.deposit)
     }
}

class Car extends Vechile{
   constructor(brand_:string,vechileNo_:string,days_:number,total_:number,deposit_:number,type_:string){
      super(brand_,vechileNo_,days_,total_,deposit_)
   }
}