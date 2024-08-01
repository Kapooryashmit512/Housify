import { useState } from 'react'
import './chat.scss'

function Chat(){
    const [chat,setChat]=useState(true)
    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Yashmit Kapoor</span>
                    <p>
                    Hi there! Just wanted to let you know everything is coming along ! 
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Yashmit Kapoor</span>
                    <p>
                    Hi there! Just wanted to let you know everything is coming along ! 
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Yashmit Kapoor</span>
                    <p>
                    Hi there! Just wanted to let you know everything is coming along ! 
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Yashmit Kapoor</span>
                    <p>
                    Hi there! Just wanted to let you know everything is coming along ! 
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Yashmit Kapoor</span>
                    <p>
                    Hi there! Just wanted to let you know everything is coming along ! 
                    </p>
                </div>
            </div>
            {chat &&(
            <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        Yashmit Kapoor
                    </div>
                    <span className="close" onClick={()=>setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Imp</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Imp</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Imp</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Imp</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Imp</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Imp</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea name="" id=""></textarea>
                    <button>Send</button>
                    </div>            

            </div>)}
        </div>
    )
}

export default Chat