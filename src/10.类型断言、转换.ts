/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-13 10:27:26
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-15 10:22:51
 * @FilePath: \JavaScript\Ts\src\10.类型断言、转换.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*2-28【类型断言转换】种类繁多的类型断言和多个重要细节+常见转换错误
(1)TS类型断言定义:把两种能有重叠关系的数据类型进行相互转换的一种TS语法，把其中的一种数据类型转换成另外一种数据类型。类型断言和类型转换产生的效果一样，但语法格式不同。
(2)TS类型断言语法格式:A数据类型的变量 as B数据类型。A数据类型和B数据类型必须具有重叠关系(3）重要细节:理解重叠关系:以下几种场景都属于重叠关系
1.如果A，B如果是类并且有继承关系
【 extends关系】无论A，B谁是父类或子类，A的对象变量可以断言成B类型，B的对象变量可以断言成A类型。但注意一般在绝大多数场景下都是把父类的对象变量断言成子类。
2.如果A，B如果是类，但没有继承关系
两个类中的任意一个类的所有的public实例属性【不包括静态属性】加上所有的public实例方法和另一个类的所有public实例属性属性加上所有的public实例方法完全相同或是另外一个类的子集，则这两个类可以相互断言，否则这两个类就不能相互断言。
*/
(function (){
    class People{
        public myusername!:string;
        public myage!:number;
        public address!:string
        public phone:string=""
        constructor(){
    
        }
 
        eat()
        {
    
        }
    }
    
    class Stu extends People{
        public username!:string;
        public age!:number;
        public address!: string; //类型"Stu"
        constructor(){
            super()
            
        }
     
    }
    
    // 1.断言 子类父类重叠，可以相互断言
      let people=new People()
      let res1=people as Stu;// 可以 变量 as 数据类型
      res.study();
      let stud=<People>(new Stu());
        
    

})();


// 非继承类直接的装换

(function (){

    class People{
        public username!:string;
        public age!:number;
        public address!:string
        
        constructor(){
    
        }
       
    }
    
    class Stu{
        public username!:string;
        public age!:number;
        public address!: string; //类型"Stu"
        public phone:string=""
        constructor(){
           
            
        }
        study()
        {
    
        }
        eat()
        {
    
        }
     
    }
    
    // 1.断言  Stu是People的子集 之间可以相互断言
      let people=new People()
      let res1=people as Stu;//
      res.study();
      let stud=<People>(new Stu());
        
    
})();



(function (){

  interface People{
       username:string,
       age:number,
       address:string,
       phone:string

  }
  class Stu implements People{

      constructor(public username:string,public age:number, public address:string,public phone:string)
      {

      }
      kk()
      {



      }

  }
  
  let people:People={ username:"wangwu", age: 23,address: "11", phone:"sdfds"}
  
  let sdfsd= <Stu>people // 接口实现的类断言为另有个接口实现的类

  let  stu= new Stu("名字",11,"这里的地址是","15271820087") 

      let xxx= <People>stu 

    
})()