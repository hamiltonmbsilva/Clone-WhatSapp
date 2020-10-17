//import { Divider } from '@material-ui/core';
import React from 'react';
import './ChatListItem.css';

export default ({onClick, active}) => {
    return (
        <div 
            className={`chatListItem ${active?'active':''}`}
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsRX6QzCX2rxKzfmn7VlsMYA0TYTW5Nt6o5g&usqp=CAU" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">
                        Nome da pessoa
                    </div>
                    <div className="chatListItem--date">
                        20:42
                    </div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Opa, tudo bem? </p>
                    </div>
                </div>
            </div>
        </div>
    );
}