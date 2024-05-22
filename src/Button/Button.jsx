import PropTypes from "prop-types";
import "./Button.css"
export default function ButtonBTN ({ text, onClick }) {
  return (
    <button className="btn" variant="contained" onClick={onClick}>{text}</button>
  )
}
ButtonBTN.propTypes = {
    text: PropTypes.string.isRequired, // Require question prop of type string
    onClick: PropTypes.func, // Require question prop of type string
    
  };
