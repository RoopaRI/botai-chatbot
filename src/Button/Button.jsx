import Button from '@mui/material/Button';
import PropTypes from "prop-types";
import "./Button.css"
const ButtonBTN = ({ text, onClick }) => {
  return (
    <Button className="btn" variant="contained" onClick={onClick}>{text}</Button>
  )
}
ButtonBTN.propTypes = {
    text: PropTypes.string.isRequired, // Require question prop of type string
    onClick: PropTypes.func, // Require question prop of type string
    
  };
export default ButtonBTN;