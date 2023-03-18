/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-15 11:57:43
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-16 10:18:50
 * @FilePath: \JavaScript\Ts\src\12.多态.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


abstract class People{

   public name!:string
   constructor()
   {
    
   }
   public abstract eat():void;// 抽象方法没有方法体，只有声明
  //  {
  //    console.log("People父类的eat")
  //  }

}
// 抽象类不能实例化
//let people2:People=new People()

class AmericanPeople extends People{ // 美国人
  public phone!:string
  public eat(){
    console.log("用叉子吃饭...")
  }
}
class ChinesePeople extends People{ // 中国人
    public eat(): void {
      console.log("用筷子吃饭...")
    }
}
class TuZhuPeople extends People{ // 土著人
  public eat(): void {
    console.log("用手抓吃饭...")
  }
}


// 父类的对象变量people可以接收任何一个子类的对象，
// 例如可以接收AmericanPeople，等资料对象
let people:People=new AmericanPeople();
people.eat()
 people=new ChinesePeople();
 people.eat()