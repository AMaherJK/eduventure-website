import './Buttons.css';
import { Link } from "react-router-dom"
function SignUpButton() {

    return (
        <Link to="/signup">
            <button className="signUpBtn" >Sign up</button>
        </Link>
    );
}
export default SignUpButton;
