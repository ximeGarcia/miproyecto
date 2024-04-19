import React from "react";
import {FiSend} from "react-icons/fi";
import WebSocket from "ws";


function ChatWebSocket(){
    const[mensaje, setMensaje]=useState('');

    useEffect(()=>{
const newSocket =
new WebSocket('localhost:8085');
    },[]);
    return(
        <div className="chat">
            <div className="chat-header">
                Titulo
            </div>
            {/*bucle que muestre mensajes*/}
            <div className="chat-message">
                mensaje
            </div>
            <div className="chat-sender">
                <input className="chatt-send"></input>
                <FiSend/>

            </div>

        </div>
    );
}
export default ChatWebSocket