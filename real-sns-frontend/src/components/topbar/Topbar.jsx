import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    <div className='topbarConteiner'>
        <div className="topbarLeft">
            <span className="logo">Real SNS</span>    
        </div>
        <div className="topbarCenter">
            <div className="serchbar">
                <SearchIcon className="serchIcon"/>
                <input 
                className='serchInput'
                type="text" 
                placeholder='探し物はなんですか'
                />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarIconItem">
                <ChatIcon className=''/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <NotificationsIcon className=''/>
                <span className="topbarIconBadge">2</span>
            </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className='topbarImg'/>
    </div>
  )
}
