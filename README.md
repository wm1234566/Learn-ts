学习路径：ts--react--flutter--go--算法--webgl--ts类型体操--游戏
TS自动重启+TS自动运行+Parcel自动打包
步骤如下：
（1）初始化 npm init --yes 出现 package.json
（2） 安装 typescript
全局安装 cnpm i typescript -g 或
本地安装： cnpm i typescript -D 或
yarn安装 yarn global add typescript 
【cnpm i typescript -D 是 cnpm install typescript --save-dev的缩写】
(3）生成tsconfig.json文件 
tsc --init 
（4）修改 tsconfig.json 中的配置 “outDir: "./dist" --outDir是ts编译后生成js文件保存的目录 "rootDir": "./src", --rootDir是自己编写的ts源文件所在的目录 注意: dist src package.json 必须是在一个目录下
（5）编译src目录以及子目录下的ts文件
tsc 【在src当前目录下：输入tsc 注意直接写tsc命令即可】 【会把src目录以及子目录下的ts文件全部编译成js文件，并全部输出到dist目录中】
（6）安装 ts-node
ts-node让node能直接运行ts代码，无需使用tsc将ts代码编译成js代码。【ts-node则包装了node，它可以直接的运行ts代码】
全局安装 cnpm i ts-node -g 或
本地安装： cnpm i ts-node -D 或
yarn安装：yarn global add ts-node 
（6）安装nodemon工具 【自动检测工具】 nodemon作用：【nodemon可以自动检测到目录中的文件更改时通过重新启动应用程序来调试基于node.js的应用程序】
全局安装 cnpm install -g nodemon 或
本地安装： cnpm i nodemon -D 或
yarn安装 yarn add nodemon -D 
（7） 在package.json中配置自动检测，自动重启应用程序
   "scripts": {
     "dev": "nodemon --watch src/ -e ts --exec ts-node ./src/app.ts"
    }
nodemon --watch src/ 表示检测目录是package.json同级目录src
-e ts 表示nodemon 命令准备将要监听的是ts后缀的文件
--exec ts-node ./src/project/app.ts 表示检测到src目录下有任何变化 都要重新执行app.ts文件
2.Parcel打包支持浏览器运行TS文件
（1）安装Parcel打包工具：npm install parcel-bundler --save-dev
（2）在package.json中给npm添加启动项，支持启动parcel工具包
     "scripts": {
        "start": "parcel ./index.html"
      },
(3) 启动parcel工具包
cnpm run start 【cnpm start】或 npm run start 【npm start】或 yarn run start 【yarn start】

其中：nodemon 和ts-node是监听文件改变并用node环境执行，parcel是根据引入的ts编译为js，在浏览器中运行

第一章 类

一、下列代码报错的解决方法？
类中可以使用function定义方法吗？
方法的默认返回值是？
类的属性和方法的参数含义的不同？
class Proson{
    public name:string
}
（一）4.0之前使用public name:string|undefined 解决
（二）类中不可以使用function定义方法，直接写xxx()来定义方法
（三）方法的默认返回值是void
（四）类的属性是描述这个类的特征，类的方法是描述这个类的行为，方法的参数是行为的参数，这些属性与类属性无关，不是类的属性不应该放在类的属性中
class Proson{
    // 对象的属性
    public name:string | undefined // 4.0之前解决方式,不好
    public age:number=11
    public phone:string ="1111"
    // 对象的方法
    // 类中定义方法
   public run():number{
        return 11
    }
    // 方法的默认返回值为void
    doEat(who:string,addrss:string):void
    {
        console.log(`全局属性${this.age}`)
    }
}

二、给对象赋值的方法？对象的属性和方法是实例共享的吗？对象方法的this的含义？
（一）1.通过类的属性和方法来赋值 2.通过构造函数来赋值
（二）对象的属性是单独的，每个实例都有，而对象的方法在原型上，所有属性的都是共享的
// 1.通过实例来赋值，注意每个对象属性都共享的，每个都有独立的实例，而方法是原形上的是共享的
let zhangsan:Proson=new Proson();
zhangsan.name="张三" // 用对象属性直接赋值
zhangsan.doEat("小张","你家")
console.log("对象的实例",zhangsan)
（三）表示当前实例对象

三、引用数据类型有哪一些？如何定义数组，方法？
（一）数组 ，函数，类，对象类型[{.... }格式]，对象数组类型，集合类【Set，Map,自定义 集合类】
（二）(1)基本类型:[]/Array<基本类型> （2）变量名:():返回类型
    public img:"abc"[]=["abc"]
  public resolve:()=>void = ()=>{}
()=>{}是给他赋初值，方法的类型是没有{},而定义方法是有{}

四、实现一个订单类有多个属性，一个商品详情，一个订单可能有多个商品，多个订单详情，如何在订单类中表示订单详情呢？
用商品类数组
//;订单 Id，订单日期，顾客地址，顾客名，顾客微信，顾客手机号，客服
class Order{
 public orderId:string="111"
 public date:Date=new Date()
 public phone:number=0
 // 
 //public orderDetail:OrderDetail[]=[]
 public orderDetail:Array<OrderDetail>=[] //使用数组对象
    constructor(orderId_:string, date_:Date,phone_:number,orderDetail_:Array<OrderDetail>){
         this.date=date_
         this.orderId=orderId_
         this.phone=phone_
         this.orderDetail=orderDetail_
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

五、为啥对象的属性不能不赋初值？
如果就是不赋初值呢？
如何省略书写对象中的属性和构造函数赋值？
如果没有在构造函数中赋值，而有在对象中定义了变量，并且不想用联合类型undefined呢？
（1）因为编译器认为没有初值就没有意义，
（2）解决方法就是在构造函数中赋值，就可以不用赋初值
（3）使用public来修饰构造函数的参数，可以省略
// 订单类
//;订单 Id，订单日期，顾客地址，顾客名，顾客微信，顾客手机号，客服
class Order{
//  public orderId:string="111"
//  public date:Date=new Date()
//  public phone:number=0

 // 
 //public orderDetail:OrderDetail[]=[]
//  public orderDetail:Array<OrderDetail>=[] //使用数组对象
    constructor(public orderId_:string, public date_:Date, public phone_:number, public orderDetail_:Array<OrderDetail>){
        //  this.date=date_
        //  this.orderId=orderId_
        //  this.phone=phone_
        //  this.orderDetail=orderDetail_
    }
}

//给构造器的参数如果加上public,这个参数就变成了一个属性,//
这种简洁写法是两步综合体:第一步:定义了一个属性,
/ /第二步:等于默认构造函数会给这个属性赋值[隐式操作]
（4）Ts4中，可以在属性后面加一个！ 编译器忽略这一个属性，表示是一个可有可无的属性
 public orderDetail!:Array<OrderDetail> //使用数组对象


2-11函数重载,方法重载的重要性、优势

六、type关键字的作用？
下列错误的原因以及解决方法？
.d.ts文件的作用？
下列报错是为啥？
下面写法实现参数为数字返回一条消息，类型返回一组消息有何问题？如何解决？
（一）type  新类型名=旧类型名; 表示给类型取一个新名字，注意：基本数据类型的值也都是类型，并且它的值是他自己
（二）属性` find `在类型` Message[] `上不存在。你需要更改目标库吗?尝试将` lib `编译器选项更改为` es2015 `或更高版本。
 "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6','ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
//      注意：target将ts转为最终target js版本是不全的，有些无法转换，无法做到完全兼容
      // 例如 代理反射等功能，所以考虑兼容性必须还要使用 babel进行兼容性转换

      "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd','es2015'
  "lib": ["ES2020",”DOM”],  
,                             // 指定要包含在编译中的库文件, ----->>>一般在后端使用，要引入库的时候使用，默认引入浏览器运行的库
找不到es6的find方法，将lib改为Es2020,DOM是可以调用浏览器api
lib是编译前所用的库，他找不到es6，可以说是从lib编译到target
注意必须使用：tsc  .\3函数重载.ts   -t  es6
上面所说的配置似乎没有用
或者使用 ts-node .\3函数重载.ts

（三）.d.ts是一个ts的说明文件，其实现不在这里面，其内容是由接口描述组成
（四）
function getMessage(value:number|MessageType):Message|Array<Message>{

    if(typeof value==="number")
    {
      return messages.find((meg)=>value=== meg.id)  // 不能将类型“Message | undefined”分配给类型“Message | Message[]”。
      //不能将类型“undefined”分配给类型“Message | Message[]”。ts(2322)
    }
    else
    {
        return messages.map((msg)=>msg.type===value)
    }
    
}

上面代码的原因是getMessage与find返回的类型不同，find会返回一个undefined，而getMessage没有，所以解决方法就是给getMessage一个undefined
（五）
type MessageType = "image" | "audio" | string;//联合类型

type Message = {
    id: number;
    type: MessageType;
    sendmessage: string;
};

let messages: Message[] = [
    
{ id: 1, type: 'image', sendmessage: "你好啊，今晚咱们一起去三里屯吧" },
{
    id: 2, type: 'audio', sendmessage: "朝辞白帝彩云间，千里江陵一日还"
},
{
    id: 3, type: "audio", sendmessage: "你好!张无忌"
},
{
    id: 4, type: 'image ', sendmessage: "刘老根苦练舞台绝技!"
}]

// 参数可能是数字，或者特定字符串，返回值，为数字的时候返回一条消息，为数组类型所对应消息的的时候为一个数组

function getMessage(value:number|MessageType):Message|Array<Message>|undefined{

    if(typeof value==="number")
    {
      return messages.find((meg)=>value=== meg.id)  // 不能将类型“Message | undefined”分配给类型“Message | Message[]”。
      //不能将类型“undefined”分配给类型“Message | Message[]”。ts(2322)
    }
    else
    {
        return messages.filter((msg)=>msg.type===value)
    }
    
}
console.log(getMessage("audio"))

// 1.上面的代码有两个问题
// （1）函数可读性差，一个函数多个功能
//  (2)当参数为数字返回一个值的时候，不会提示，自动推导出返回值类型应该为Message
// getMessage(1).sendmessage() 他依然认为返回类型为Message|Array<Message>|undefined


注意：string|number 联合类型推导，取得是两种类型的交集，即都有的方法才会被推导

解决的方法：有三种
// 2.强行转换
 let msg=(<Message>getMessage(1)).sendmessage;
 //（1）注意只能是联合内型中有的才可以
 // (2)使用断言
3.函数重载

七、函数签名是什么？
函数重载的定义？
如果上面代码加上如果是返回一组数据，返回前面多少个的参数呢？
下面代码为何报错？如何解决？
any和unknown的区别是？
（一）、函数名+函数参数+函数参数类型+返回值类型
（二）、完整的函数重载定义:包含了以下规则的一组函数就是TS函数重载【规则内容多，大家要多记，多实践方可】
规则1:由一个实现签名（最下面的）+一个或多个重载签名合成。
规则2:但外部调用函数重载定义的函数时，只能调用重载签名，不能调用实现签名，这看似矛盾的规则，其实是TS的规定:实现签名下的函数体是给重载签名编写的，实现签名只是在定义时起到了统领所有重载签名的作用，在执行调用时就看不到实现签名了。
规则3:调用重载函数时，会根据传递的参数来判断你调用的是哪一个函数
规则4:只有一个函数体，只有实现签名配备了函数体，所有的重载签名都只有签名，没有配备函数体
规则5:关于参数类型规则完整总结如下:
无论重载签名有几个参数，参数类型是何种类型，实现签名都可以是一个无参函数签名;实现签名参数个数可以少于重载签名的参数个数，但实现签名如果准备包含重载签名的某个位置的参数，那实现签名就必须兼容所

规则6:
关于重载签名和实现签名的返回值类型规则完整总结如下:必须给重载签名提供返回值类型，TS无法默认推导。
提供给重载签名的返回值类型不一定为其执行时的真实返回值类型，可以为重载签名提供真实返回值类型，也可以提供 void或unknown或 any类型，如果重载签名的返回值类型是void或, unknown或any 类型，那么将由实现签名来决定重载签名执行时的真实返回值类型。当然为了调用时能有自动提示+可读性更好+避免可能出现了类型强制转换，强烈建议为重载签名提供真实返回值类型o
不管重载签名返回值类型是何种类型【包括后面讲的泛型类型】，实现签名都可以返回any类型或unknown类型，当然一般我们两者都不选择，让TS默认为实现签名自动推导返回值类型。
（三）、

由于第一个重载签名与实现签名融合，代码中会多出.splice(0,readRecordCount)这个变量，现在的问题变成了，两个重载签名有多个参数，而实现签名中又都用到了这些参数。

第一个函数使用默认参数也不行！因为重载签名的参数是定义的外部需求

具体解决方法是：将默认值写在实现签名

如果实现签名中没有使用重载签名中的变量，不检查这个变量

(四)、any可以作为任何一个类的子类和父类，unknown只能做为父类，不能作为子类
即unknown不能赋值给别人，别人可以赋值给unknown
子类=父类

2-14 【TS方法重载】方法重载在Java简易版ArrayList中的经典应用实现【ArrayList可弥补Set取值不方便短板，比 Set删除功能更方便】
1．方法和函数区别，理解方法签名
方法:方法是一种特定场景下的函数，由对象变量【实例变量】直接调用的函数都是方法。比如:
1.函数内部用this定义的函数是方法;
氏全网T识
2.TS类中定义的函数是方法【TS类中定义的方法就是编译后」S底层 prototype的一个函数】;
3.接口内部定义的函数是方法【注意:不是接口函数】;
4.type内部定义的函数是方法【注意:不是type函数】。
方法签名:和函数签名一样，方法签名=方法名称＋方法参数＋方法参数类型＋返回值类型四者合成。

2. Java简易版ArrayList类和其中的方法重载代码实现

八、构造器重载是什么？静态方法中的this是指向谁？
（一）、构造器没有返回值，实现签名第一个参数要为前两个重载签名的联合类型或者any
（二）、静态方法的this指向的是类对象本身，而不是实例对象，非静态方法的this指向的是实例对象




技能大纲
2-28-1―【TS类型断言、转换】种类繁多的类型断言和多个重要细节+常见转换错误【真实应用场景】2-28-2【TS类型断言、转换】种类繁多的类型断言和多个重要细
节+常见转换错误【真实应用场景】
2-28-3—【TS类型断言、转换】种类繁多的类型断言和多个重要细节+常见转换错误【真实应用场景】2-29-1【TS类型守卫】类型守卫准备:new底层发生了什么?
2-29-2【TS类型守卫】熟练掌握typeof + in
*2-29-3【TS类型守卫】typeof 有何局限性?如何解决?【高频面试题】大水2-29-4【TS类型守卫】从原理上深层掌握instanceof
2-29-5【TS类型守卫结合应用深层掌握instanceof【真实应用场景】
2-30【TS多态+类型守卫】众多语言都有的多态给TS类带来了什么好处?前端同面试，说透者加更多分

类型断言

(3)重要细节:理解重叠关系:以下几种场景都属于重叠关系

1.如果A，B如果是类并且有继承关系
【 extends关系】无论A，B谁是父类或子类，A的对象变量可以断言成B类型，B的对象变量可以断言成A类型。但注意一般在绝大多数场景下都是把父类的对象变量断言成子类。
2.如果A，B如果是类，但没有继承关系
两个类中的任意一个类的所有的public实例属性【不包括静态属性】加上所有的public实例方法和另一个类的所有public实例属性属性加上所有的public实例方法完全相同或是另外一个类的子集，则这两个类可以相互断言，否则这两个类就不能相互断言。
3.如果A是类，B是接口，并且A类实现了B接口【implements】，则A的对象变量可以断言成B接口类型，同样B接口类型的对象变量也可以断言成A类型。
4.如果A是类，B是接口，并且A类没有实现了B接口，则断言关系和第2项的规则完全相同。
5.如果A是类，B是type定义的对象数据类型【就是引用数据类型，例如Array,对象，不能是基本数据类型，例如string，number,boolean】，并且有A类实现了Btype定义的数据类型【implements】，则A的对象变量可以断言成B type定义的对象数据类型，同样B type定义的对象数据类型的对象变量也可以断言成A类型。
6.如果A是类，B是type定义的对象数据类型，并且A类没有实现Btype定义的数据类型，则断言关系和第2项的规则完全相同。
7.如果A是一个函数上参数变量的联合类型，例如string | number，那么在函数内部可以断言成string或number类型。
8.多个类组成的联合类型如何断言?
例如: let vechile: Car | Bus | Trunck。vechile可以断言成其中任意一种数据类型。例如vechile as Car，vechile as Bus, vechile as Trunck 。
9.任何数据类型都可以转换成any 或unknown类型，any或unknown类型也可以转换成任何其他数据类型。

九、断言和类型装换的关系？
继承关系的如何类型断言？
没有继承关系的如何断言？
接口之间如何断言呢？
断言的本质规则是？
联合类型的断言？

（一）、断言就是类型转换，
（二）、继承关系，不管有没有重叠，都可以相互断言（转换）
（三）、没有继承关系的类，如果有重叠，重叠是指对象的属性和方法是另有一个对象public属性方法的子集（private不行），或相同，则可以相互断言
（四）、接口实现的实例，可以断言成接口，类型也可以断言为别的实现接口的类（和继承一样的）
（五）、本质规则就是要一个类型和另有个类型的public属性的相同或是子集，就可以相互转换
（六）、联合类型可以断言为一个其中一个类型


【TS类型守卫】类型守卫准备:new底层发生了什？

类型守卫定义:在语句的块级作用域【if语句内或条目运算符表达式内】缩小变量的一种类型推断的行为。
类型守卫产生时机:TS条件语句中遇到下列条件关键字时，会在语句的块级作用域内缩小变量的类型，这种类型推断的行为称作类型守卫( Type Guard )。类型守卫可以帮助我们在块级作用域中获得更为需要的精确变量类型，从而减少不必要的类型断言。
●类型判断: typeof
●属性或者方法或者函数判断:in
●实例判断: instanceof
●字面量相等判断:==,===，!=,!==


//请编写一个操作对象方法和属性的函数实现以下功能// 1．当对象字符串属性有空格时就去掉空格后输出．
/2．当遇到对象函数时就执行,其他数据类型的属性一律直接输出// 3.只有对象中包含allowoutput属性时,才允许输出。
//4．函数接收到外部传入的null, undefined, {}时，直接输出不是一个合法的对象。//考核点:1．考核对类型守卫的熟练运用程度2.静态方法


2-29-3 【TS类型守卫】typeof 有何局限性?如何解决?【高频面试题】**typeof作用
typeof用来检测一个变量或一个对象的数据类型。
typeof检测的范围
typeof检测变量的类型范围包括:“string" | "number" / "bigint" / "boolean" | "symbol" | "undefined" |"object" | "function"等数据类型。
typeof的局限性
typeof检测变量并不完全准确，例如 typeof null结果为object，这其实设计者的一个bug，但后来一直没有
被改过来，于是就此传下来了，但把 null当成 object 的理由说成是木米可能云拥有一个刈家工问一这二很牵强【我们检测的是对象变量此刻的类型】，null 本来即是数据类型，也是值。所以typeof null直接显示null最合适了。
再例如:使用typeof 来检测一个数组变量，typeof[]结果显示的是object，从 Array创建的本质上来说确实是object，正如我们在2-29-1中所讲，但开发者期待看到的是Array，这更符合预期。Array和我们定义的普通函数一样，具有双重性，当成函数类型时用来创建数组对象，但也是一个构造函数对象，拥有静态成员和prototype原型对象属性。【这一点我们在TS继承课题已经讲过】
再比如:使用typeof来检测一个Set变量，Map变量，结果显示的是依然是object。

typeof的替代方案
Object.prototype.toString.call
Object.prototype.toString.call([ ])展示[ object Array ]
Object.prototype.toString.call(null)展示[ object null ]
Object.prototype.tostiing.call(Set类型的变量)展示[ object Set ]Object.prototype.toString.call(Map类型的变量)展示[ object Map
]
typeof的替代方案依然无法解决的问题
就是无法获取一个自定义的类的实例变量或构造函数的对象变量的真正创建类型，答案是使用instanceof来解决。



2-29-4 【TS类型守卫】从原理上深层掌握instanceof
instanceof格式:对象变量instanceof 类名或函数名
instanceof 的主要作用: instanceof帮助我们准确的判断一种自定义函数或类创建的对象变量的数据类型。instanceof 执行后返回true的几种条件【符合一个即可】:
(1)对象变量.proto=类名或函数名.prototype。
解释1:如果instanceof 关键字左边对象变量的proto属性指向的原型对象空间=右边类名或函数名的prototype对象属性指向的原型对象空间，那么返回true。
(2)对象变量.proto.proto..._proto__=类名或函数名.prototype.
解释2: instanceof左边对象变量proto的1到多个上一级proto指向的原型对象空间，等于右边类名或函数名的prototype对象属性指向的原型对象空间，那么也返回true，按照这个查找规律，会一直找到
Object.prototype对象属性指向的原型对象空间为止。
慕课网TS高级课程


2-30【TS多态+类型守卫】【众多语言都有的多态给TS类带来了什么好处?】
1.多态的定义:
父类的对象变量可以接受任何一个子类的对象
从而用这个父类的对象变量来调用子类中重写的方法而输出不同的结果.
⒉产生多态的条件:
1.必须存在继承关系⒉必须有方法重写
3.多态的好处:
利于项目的扩展【从局部满足了开闭原则--对修改关闭,对扩展开放】
4.多态的局限性
无法直接调用子类独有方法，必须结合instanceof类型守卫来解决



2-31 【TS抽象类】理解抽象类【abstract class 】
一个在任何位置都不能被实例化的类就是一个抽象类【abstract class 】
什么样的类可以被定义为抽象类

从宏观上来说，任何一个实例化后毫无意义的类都可以被定义为抽象类。比如:我们实例化一个玫瑰花类的对象变量，可以得到一个具体的玫瑰花实例对象，但如果我们实例化一个Flower类的对象变量，那世界上有一个叫花的对象吗?很明显没有，所以Flower类可以定义为一个抽象类，但玫瑰花可以定义为具体的类。
一个类定义为抽象类的样子
abstract class类名{可以有0到多个抽象方法【只有方法体，没有方法实现的方法】，可以有0到多个具体方法，可以有构造器，可以有0到多个实例属性，0到多个静态属性，0到多个静态方法}
单纯从类的定义上来看和普通类没有区别，只是多了可以有0到多个抽象方法这一条。
抽象类的特点
可以包含只有方法体的方法【和方法签名类似，就是多了abstract关键字】，也可以包含实现了具体功能的方
十、typeof的作用？
typeof的问题？如何解决？
多态是什么？和断言的规则有什么区别？
抽象类和普通类的区别？
抽象类与接口的区别？
（一）、typeof的作用是缩小类型的范围，例如编译器会直接将变量变为typeof的类型
let value=obj[key]
          
            if(typeof value ==="function")
            {
            //   value()
             obj[key]()
            }

（二）检测null为Object,检测对象都为object，
检测null可以用Object.is() 检测对象为Object.prototype.toString().call()
（三）、多态是指子类的实例，赋值给父类的实例，用子类的实例调用自己重写的方法，区别都是要有重叠属性，多态必须有继承关系，而断言不用，只要有重叠即可
（四）、抽象类不能实例，可以有抽象方法（没有方法体{}，只有声明），继承抽象类的必须实现抽象方法
（五）、抽象类，让后接口没那么抽象，因为接口的所有方法都要实现，而抽象类的只有抽象方法要实现，其他方法可以覆盖
// 只想实现接口下面两个方法，不行实现其他方法？？？
 // 将类变成抽象类，将需要实现的方法变成抽象方法





理解:返回布尔值的条件表达式赋予类型守卫的能力，只有当图数返回 true 时，形参被确定为A类型
自定义守卫的重要意义:编码展示其具体意义
//   if(typeof value==="string") 这种写法不常用，因为如何很多修改起来麻烦，一般使用自定义守卫



// 函数内的类型守卫，无法传递到函数内

/*function isString(str:any):boolean {
    if(typeof str ==="string")
    return true
    return false
}*/
function isString(str:any):str is string{ // 含义是：当返回true的时候，str就是string类型
    return typeof str ==="string"
}



具体编码展示:
*2-33-1 【TypeScript4新特性】小技巧:const 为何也能被修改?如何解决
具体编码展示:
2-33-2 【 TypeScript4新特性】为什么要用可变元组+具体使用

具体编码展示:
2-34-2【 TypeScript4新特性】深入可变元组
具体编码展示:


十一、自定义守卫的作用？
函数内部的类型守卫可以传递出来吗？
自定义守卫能确定某个具体的类型吗？
const定义数组，不希望里面的元素被改变？？？这种类型如何当参数？？
如何设置可变的元组？元组添加标签？
可变元组如何在中间添加可变，两端设置固定变量？
常量数组需要类型吗？
数组和元组之间可以互通吗？
元组和数字中readonly，as const？


（一）和类型守卫一样，用于缩小类型范围，比类型守卫更好的是可以统一管理
（二）不可以，应该使用自定义守卫
unknown 是所有类型的父类，不能用.语法，不能执行函数(),比any更加严格，但可以是有类型或自定义守卫缩小范围，让unknown能.和执行函数(),
（三）可以，如下
class Animo{
    public age!:number
     eat():void {
  }
}

 function isAnimo(animo:any):animo is Animo{
      return animo instanceof Animo;
}

let abc ="ddd"
if(isAnimo(abc))
{
    abc.age
}

（四）可以在数组后面加as const，变成只读数组，传入的时候要在数组类型前加readonly
这种形参是不能修改的
const arr1=[10,30,40,"abc"] as const //只读限制

// 应用,不希望函数改变参数传入的数组
function showArr(arr: readonly any[]) {
    // arr[0]=100; 不允许修改
    
}
showArr(arr1) //无法传入

（五）在类型中添加...any[]即可
// 可变元组
// let [username,no]:[string,number]=["wangwu",23,"sdfsd","abcd","dddsfs"]
// 前面两个是固定需要的，后面的可能要可能不要，如何实现？？
let [username,no]:[string,number,...any[]]=["wangwu",23,"sdfsd","abcd","dddsfs"]


// 给元组添加标签
let [username,age,...rest]:[naem_:string,age_:number,...rest:any[]]=["wangwu",23,"sdfsd","abcd","dddsfs"]

console.log("username",username) //username wangwu
console.log("age",age)  //age 23
console.log("rest",rest) //rest [ 'sdfsd', 'abcd', 'dddsfs' ]
（六）可以但是变量名中不能加尾部的变量名
// 如果可变部分为中间部分呢？
let [info,ccc,...result]:[info_:string,_ccc:number,...result:any[],_descri:string]=["abc",11,"cd","ee"]
// 前面不可以加，后面可以加变量

（七）常量数组，不能设置类型，类型是只有变量有的
const arr3:(string|number)[]=[10,30,40,"abc",30] 
const arr4=[10,30,40,"abc",30] as const // 不可变数组没有类型 
（八）可以互通
// 1.元组退化为数组
let constnum2=[10,30,40,60,"abc"]
// 不能将类型“(string | number)[]”分配给类型“[number, ...any[]]”。源不提供目标中位置 0 处所需元素的匹配项。
let [x2,...y2]:[...any[]] = constnum2 // 正确
// 2.将数组固定，将元组类型固定
let constnum3=[10,30,40,60,"abc"] as const
let [x3,...y3]:readonly[number,...any]=constnum3

function tail(constnum5:readonly [any,...any[]]){
    let arr=constnum5
}

function tail(constnum5:readonly (string|number)[]){
    let arr=constnum5
}
tail(constnum3)


（九）readonly，放在类型前面和 as const 都是表示固定不变的，包括数组和元组中每一个元素都不能改变，他们是等效的



第三章:融合Vue3源码掌握泛型类+泛型接口+相关复杂应用
3-1 TS泛型到底有多重要?【重要程度超乎想象】
3-2【TS泛型类】TypeScript泛型重构简易版的Java的ArrayList【弥补了Set取值的不方便,
删除的不
灵活]
3-3【TS泛型类】TypeScript泛型重构简易版的Java的ArrayList【透彻理解为什么一定要用
泛型类】
3-4【TS泛型类】泛型定义+格式【究竟该怎样定义泛型才精准无偏差?】
3-5 【TS泛型类】详细讲解+透彻总结object为什么不能替代类上的泛型?
imoc
3-6【TS泛型类】详细讲解+透彻总结any为什么不能替代类上的泛型?
3-7【TS泛型类】美团外卖美食通用分页类的实现【通用类，移植即用】[共4节]

3-1TS泛型到底有多重要?【重要程度超乎想象】
1.Vue3源码充斥着大量的TS泛型。懂TS泛型是读懂Vue3源码不可逾越的环节。
⒉前端各种技术的声明文件【d.ts文件】TS泛型更是随处可见【例如:小到一个Array，ES6的Set,Map，稍微复杂点的例如: Vue3应用的声明文件，Vuex底层的声明文件，React组件声明文件, axios声明文件，这样的例子举不胜举。】
3.现在采用TS整合前端框架的大中项目越来越多，而TS泛型必然成了你必须攻克的核心技能。
如果你近几
年在公司做过稍微大点的项目，你的感触会特别深刻。
4.后端Nodejs和TS整合的频次也越来越高，优秀的Nestjs框架就完全采用TS开发。5.TS语法是晋级高级前端工程师，拿更高薪水
面试加分不可逾越的学习环节，而泛型语法更是重重之重，
—句我能熟练解说Vue3源码中的TypeScrip
t语法会为你的面试加分许多。


慕课网TS高级课程
3-2 +3-3【TS泛型类】TypeScript泛
型重构简易版的Java的ArrayList 【
透彻理解
为什么一定要用泛型类】
为什么要用泛型类【好处】
好处1:编译期对类上调用方法或属性时的泛型类型进行安全检查(类型安全检查)，不符合泛型实际参
数类型(泛
型实参类型)就编译通不过，防止不符合条件的数据增加进来。
好处2:一种泛型类型被具体化成某种数据类型后，
该数据类型的变量获取属性和方法时会有自动提示，这无疑
提高代码开发效率和减少出错率。
放置讲完后编码的区域


3-4 [TS泛型类]泛型类定义+格式【究竟该怎样给泛型下定义才精准无偏差?】
泛型一种参数化数据类型，具有以下特点的数据类型叫泛型:
特点一:定义时不明确使用时必须明确成某种具体数据类型的数据类型。
特点二:编译期间进行数据类型安全检查的数据类型。|特别注意:
1.类型安全检查发生在编译期间
2.泛型是参数化的数据类型，使用时明确化后的数据类型就是参数的值


火*3-5【TS泛型类】详细讲解+透彻总结object为什么不能替代类上的泛型?
原因一︰编译期间object无法进行类型安全检查，而泛型在编译期间可以进行类型安全检查
object 接受也只能接受所有的object类型的变量，比如有Customer、Student、Dog类的实例都是对象类型，或者自己定义的对象，都可以传递给object类型的方法参数或属性，但如果我们只希望添加Customer类的对象，当添加其他类的对象必须出现编译错误，但是 object无法做到，就只能用泛型了。
原因二: object类型数据无法接受非object类型的变量，只能接受object类型的变量，泛型能轻松做到正因为object 接受也只能接受所有的object类型的变量，那么如果有一个集合类[数组封装类]有一个add方法，允许每次添加指定类型的变量到add方法的参数，比如:我们第一轮的希望添加10次字符串类型的变量，第二轮的希望添加10次整数类型变量，第三轮的希望添加10次顾客类型的变量，泛型轻松做到。object类型数据无法接受任意非 object类型的变量，object 只能接受所有的object类型的变量。
原因三: object类型数据获取属性和方法时无自动提示
一种泛型类型被具体化成某种数据类型后，该数据类型的变量获取属性和方法时会有自动提示，提高代码开发效率和减少出错率，但在 object类型的变量无法获取数据类型的属性和方法,降低了体验感和开发效率。吉

3-6【TS泛型类】详细讲解+透彻总结any为什么不能替代类上的泛型?
原因一:编译期间any 无法进行类型安全检查，而泛型在编译期间可以进行类型安全检查
我们学过: any是所有类型的父类，也是所有类型的子类如果我们现在是一个宠物店类，希望只能添加Dog类，当调用add方法添加Customer、Student类必定出现编译错误，从而保证了类型安全检查，但是any类型无法保证类型安全检查，可以为任意类型，包括string,number，boolean，null,undefined，never,void，unknown 基础数据类型和数组，类，接口类型，type类型的变量全部能接受，不会进行无法进行类型安全检查。

原因二: any扩大数据类型的属性后没有编译错误导致潜在错误风险，而泛型却有效的避免了此类问题发生any类型可以获取任何属性和任意方法而不会出现编译错误，因为any可以代表任意数据类型来获取任意属性和任意方法，但是泛型类型被具体化成某种数据类型后，该数据类型的变量调用该数据类型之外的属性和方法时，出现编译错误，这也减少了代码隐藏潜在错误的风险。|
原因三: any类型数据获取属性和方法时无自动提示，泛型有自动提示
彩蛋: any类型可以获取任何属性和任意方法而不会出现编译错误，因为any可以代表任意数据类型的任意属性和任意方法:【any 的这个特性是一把双刃剑，当我们需要这么使用。它给我们带来方便但是大多岁渥


3-7【TS泛型类】一美团外卖美食通用分页类的实现【通用类，移植即用】[共4节]分页类课程安排:1.理解Dao 2.分页类实现 3.泛型改写分页类4.T extends object在分页类中的使用分页类准备:理解Dao:

DAO【数据访问层】理解:
定义: Node]S或其他后端语言（例如JAVA )中的数据访问层【就是很多类的合集，每一个类就是一个Dao类】简单点说:DAO层的每一个类一般是后端数据表中一个实体的增删改查操作【方法】的封装类。
完成了什么:页面上的某个功能操作需要的数据都来自某个DAO类的一个或者多个方法返回的结果。
【先经
过Service,Service大家先暂时不用管】。


十二、泛型的作用是？
如何使用泛型？
如何确定对象类型？
泛型的默认值是什么？如何设置？
Object，object和unknown的区别？

（一）、泛型是参数化的类型，定义时不确定类型，使用（new 一个对象，调用函数）的时候确定类型（传入类型参数）

泛型一种参数化数据类型，具有以下特点的数据类型叫泛型:
特点一:定义时不明确使用时必须明确成某种具体数据类型的数据类型。【泛型的宽泛】特点二:编译期间进行数据类型安全检查的数据类型。【泛型的严谨】

（二）泛型在对象 class a<T> T为类型变量，对象中所有为T的类型都可以用T代替，而使用时例如:new a<一个真是类型>()
（三）、类型可以用type 类型={xx:string} instance xxx{}  或者typeof 对象，TS的typeof可以识别对象类型
    let stuone1 = { stuname: "wnagwu", age: 23 }

    let arr17 = new ArrayList1<{stuname: string;age: number;}>()
    let arr18 = new ArrayList1<typeof stuone1>()

（四）、泛型的默认值是unknown，设置默认值为 class A<T=any> 或者class A<T=number>，class A<T={}>意思是如果不传入泛型类型，默认为any，默认为number
（五）、Object和unknown一样都是所有类型的父类（任意类型可以给他赋值），但是Object有自己的方法属性等，object这只是对象类型，是所有对象的父类，但是他没有方法和属性，他只有赋值类的对象和属性
