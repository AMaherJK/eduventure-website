import './Buttons.css';
import { Link } from "react-router-dom"
function LogInButton() {
    return (
        <Link to="/login">
            <button className="logInBtn">Log in</button>
        </Link>);
}
export default LogInButton;