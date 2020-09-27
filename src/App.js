import React from 'react';
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default () => {
  return(
    <div className="app-window">
      <div className="sidebar">
          <header>
            <img className="header--avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsRX6QzCX2rxKzfmn7VlsMYA0TYTW5Nt6o5g&usqp=CAU" alt="Avatar" />            
            <div className="header-bottons">
              <div className="header--btn">
                <DonutLargeIcon style={{color:'#919191'}} />
              </div>
              <div className="header--btn">
                <ChatIcon style={{color:'#919191'}} />
              </div>
              <div className="header--btn">
                <MoreVertIcon style={{color:'#919191'}} />
              </div>            
            </div>
          </header>

          <div className="search">
            ...
          </div>

          <div className="chatlist">
            ...
          </div>
      </div>

      <div className="contentarea">
        ...
      </div>
    </div>
  );
}