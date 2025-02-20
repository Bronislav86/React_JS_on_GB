import React, {useState} from 'react';

const MessageList = () => {

    const [messageList, setMessageList] = useState([
        {id: 1, text: "Message 1"},
        {id: 2, text: "Message 2"},
        {id: 3, text: "Message 3"}
    ])
    return (
            <div>
                <ul className="MessageList">
                    {messageList.map((item) => (
                    <li className="MessageList-text" key={item.id}>{item.text}</li>
                        ))}
                </ul>
            </div>
    );
};

export default MessageList;