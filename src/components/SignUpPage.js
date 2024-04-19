import '../index.css';
import SignUpPlate from "./SignUpPlate";
import BigMessageSign from "./BigMessageSign"
import Logo from "./logoNwordmark";
import {Link} from "react-router-dom";
function SignUpPage(props) {
     return (
          <div className="SignUpdev">
               <Logo ver={0}/>
               <SignUpPlate />
               <BigMessageSign message={["Create an", "account"]} />
          </div>);
}
export default SignUpPage;