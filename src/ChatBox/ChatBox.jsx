// import { Box } from "@mui/material";
import PropTypes from "prop-types";
import "./ChatBox.css";
import userDP from "../assets/dp.png";
import AIDP from "../assets/logo.png";


const ChatBox = ({ messages }) => {
    console.log(messages)
  return (
    <div className="main">
      {/* <div className="top-heading">Bot AI</div>
      <p className="subHeading"> How Can I help You</p> */}
      <div className="chats">
      {messages.map((message, index) => (
        <div className="chatCard" key={index} >
            <div>
                <img src={messages.sender==='user'? userDP : AIDP} alt="" width={65} height={69} />
            </div>
        
            <div className="chat" >
                <h2>{messages.sender === "user"? 'You' : 'Bot AI'}</h2>
                <p className="message">{message.message}</p>
                <p className="clock">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
        </div>
      ))} 
      </div> 
    </div>
  );
};
ChatBox.propTypes = {
  // question: PropTypes.string.isRequired, // Require question prop of type string
  // response: PropTypes.string.isRequired, // Require response prop of type string  
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      sender: PropTypes.oneOf(['user', 'bot']).isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ChatBox;