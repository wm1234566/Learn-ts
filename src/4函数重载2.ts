
(function () {

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

    function getMessage(id: number): Message // 重载签名

    function getMessage(msgType: MessageType): Message[] //重载签名

    function getMessage(value: any): Message | Array<Message> | undefined {

        if (typeof value === "number") {
            return messages.find((meg) => value === meg.id)  // 不能将类型“Message | undefined”分配给类型“Message | Message[]”。
            //不能将类型“undefined”分配给类型“Message | Message[]”。ts(2322)
        }
        else {
            return messages.filter((msg) => msg.type === value)
        }

    }
    console.log(getMessage("audio"))


    getMessage(1).sendmessage
    // getMessage("image").find(())



})();


    (function () {

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

        

        function getMessage(id: number): Message // 重载签名
        function getMessage(msgType: MessageType, readRecordCount: number): Message[] //重载签名
        function getMessage(value: number|MessageType, readRecordCount: number=1): Message | Array<Message> | undefined {
            if (typeof value === "number") {
                return messages.find((meg) => value === meg.id)  // 不能将类型“Message | undefined”分配给类型“Message | Message[]”。
                //不能将类型“undefined”分配给类型“Message | Message[]”。ts(2322)
            }
            else {
                return messages.filter((msg) => msg.type === value).splice(0, readRecordCount)
            }
        }
        console.log(getMessage("audio", 3))

        getMessage(1).sendmessage
        // getMessage("image").find(())


    })()

