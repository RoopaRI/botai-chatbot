import "./NewChat.css"
import logo from "../assets/logo.png";
import pen from "../assets/editIcon.png";
import PropTypes from "prop-types";

const NewChat = ({ onClick }) => {
  return (
    <div>
        <button className="newChat" onClick={onClick}>
            <img className="logo" src={logo} alt=""/>
            <span className="text">New Chat</span>
            <img className="editIcon" src={pen} alt="" />
        </button>
    </div>
  )
}

NewChat.propTypes = {
  onClick: PropTypes.func
}

export default NewChat;