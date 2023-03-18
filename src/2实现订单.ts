/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-01 21:36:14
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-01 22:48:50
 * @FilePath: \JavaScript\Ts\src\2实现订单.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 订单类
//;订单 Id，订单日期，顾客地址，顾客名，顾客微信，顾客手机号，客服
class Order{
//  public orderId:string="111"
//  public date:Date=new Date()
//  public phone:number=0


 // 
 //public orderDetail:OrderDetail[]=[]
 public orderDetail!:Array<OrderDetail> //使用数组对象

    constructor(public orderId_:string, public date_:Date, public phone_:number, public orderDetail_:Array<OrderDetail>){
        //  this.date=date_
        //  this.orderId=orderId_
        //  this.phone=phone_
        //  this.orderDetail=orderDetail_
    }

}


class OrderDetail{
        
    // 订单详情
    public orderDetailId:number=0;
    public productname:string ="npproduct" //商品名
    public price:number=0;//
    public count:number=0;//

    constructor(orderDetailId:number,productname:string,price:number,count:number)
    {
        
    }


}