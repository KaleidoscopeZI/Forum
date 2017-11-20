﻿// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { MessageResponseState } from '../States/MessageResponseState';
import { MessageProps } from '../Props/MessageProps';
import { MessageSystembox } from './MessageSystembox';
import * as Utility from '../Utility';

/**
 * 我的私信，包括最近联系人列表和聊天窗口两个组件
 */
export class MessageSystem extends React.Component<{}, MessageResponseState> {

    render() {
        //给我的回复添加选中样式
        $('.message-nav > div').removeClass('message-nav-focus');
        $('#system').addClass('message-nav-focus');
        return <div>这里是系统消息</div>;
    }
    /*constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    async componentWillMount() {
        let token = Utility.getLocalStorage("accessToken");

        //创建一个数组存储回复信息
        const people: MessageProps[] = [];
        let data = [];

        let startPage = -49;
        do {
            startPage += 49;
            //获取到最近50条收到的消息
            const response = await fetch('https://api.cc98.org/Message?filter=receive', {
	            headers: {
		            Range: `bytes=${startPage}-${startPage + 49}`,
		            Authorization: token
	            }
            });
            data = await response.json();
            //从最近50条消息中获取回复信息，并存储在people中
            for (let i in data) {
                if (data[i].title == '系统消息' || (!data[i].senderName)) {
                    people.push({ id: data[i].id, senderName: data[i].senderName, receiverName: data[i].receiverName, title: data[i].title, content: data[i].content, isRead: data[i].isRead, sendTime: data[i].sendTime, chatPortraitUrl: '', myPortraitUrl: '' });
                }
            }
        } while (data.length % 50 == 0); //保证取完所有的回复信息


        //通过联系人姓名查询到联系人头像并存储到people中
        for (let i in people) {
            const response = await fetch(`https://api.cc98.org/User/Name/${people[i].senderName}`); //Stardust*这个带特殊符号的用户名会查询失败
            const person = await response.json();
            people[i].chatPortraitUrl = person.portraitUrl;
        }
        this.setState({ data: people });
    }

    coverMessageSystem = (item: MessageProps) => {
        return <MessageSystembox id={item.id} senderName={item.senderName} receiverName={item.receiverName} title={item.title} content={item.content} isRead={item.isRead} sendTime={item.sendTime} chatPortraitUrl={item.chatPortraitUrl} myPortraitUrl={item.myPortraitUrl} />;
    };

	render() {
        //给我的回复添加选中样式
        $('.message-nav > div').removeClass('message-nav-focus');
        $('#system').addClass('message-nav-focus');
        return <div className="message-system">{this.state.data.map(this.coverMessageSystem)}</div>;
    }
}

//查找数组arr中是否存在元素的名字为obj
function contains(arr, obj) {
    let i = arr.length;
    while (i--) {
        if (arr[i].name === obj) {
            return true;
        }
    }
    return false;
    */
}