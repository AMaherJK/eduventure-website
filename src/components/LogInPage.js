import '../index.css';
import BigMessageSign from "./Decoratives/BigMessageSign"
import Logo from "./logoNwordmark";
import LogInPlate from './Authentication/LogInPlate';
function SignUpPage(props) {
     return (
          <div className="LogIndev">
               <Logo ver={1}/>
               <LogInPlate />
               <BigMessageSign message={["Log in to", "your","account"]} />
          </div>);
}
export default SignUpPage;