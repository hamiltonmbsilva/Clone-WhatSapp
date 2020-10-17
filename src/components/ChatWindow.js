import React from 'react';
import './ChatWindow.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default () => {
    return (
        <div className="chatWindow">
           <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsRX6QzCX2rxKzfmn7VlsMYA0TYTW5Nt6o5g&usqp=CAU" alt="" />
                    <div className="chatWindow--name">Nome do usuario</div>
                </div>
                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>
                </div>
           </div>
           <div className="chatWindow--body">

           </div>
           <div className="chatWindow--footer">

           </div>
        </div>
    );
}