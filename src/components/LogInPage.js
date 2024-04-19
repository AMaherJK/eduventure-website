import '../index.css';
import SignUpPlate from "./SignUpPlate";
import BigMessageSign from "./BigMessageSign"
import Logo from "./logoNwordmark";
import LogInPlate from './LogInPlate';
function SignUpPage(props) {
     return (
          <div className="LogIndev">
               <Logo ver={1}/>
               <LogInPlate />
               <BigMessageSign message={["Log in to", "your","account"]} />
          </div>);
}
export default SignUpPage;