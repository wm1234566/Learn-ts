/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-03 20:06:45
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-11 15:14:17
 * @FilePath: \JavaScript\Ts\src\3函数重载.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE//
 */
/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-03 20:06:45
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-11 14:56:11
 * @FilePath: \JavaScript\Ts\src\3函数重载.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 函数重载

/*真实应用需求：
有一个获取微信消息发送接口消息查找函数，
根据传入的参数从数组中查找数据，如果入参为数字， 就认为消息 id，
然后从从后端数据源中找对应 id 的数据并返回，否则当成类型，
返回这一类型的全部消息。
*/
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
      return messages.find((meg)=>value=== meg.id)  // 不能将类型“Message | undefined”分配给类型“Message | Message[]”。
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
//  (2)当参数为数字返回一个值的时候，不会提示
// getMessage(1).sendmessage() 他依然认为返回类型为Message|Array<Message>|undefined

//TS没有办法运行之前根据传递的值来推导方法最终返回的数据的

// 2.强行转换
 let msg=(<Message>getMessage(1)).sendmessage;
 //（1）注意只能是联合内型中有的才可以
 // (2)使用断言

 