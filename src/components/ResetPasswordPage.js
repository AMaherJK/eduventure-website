import '../index.css';
import ResetPasswordPlate from "./Authentication/ResetPasswordPlate";
import BigMessageSign from "./Decoratives/BigMessageSign";
import Logo from "./logoNwordmark";
import { useParams } from 'react-router-dom';
function ResetPasswordPage(props) {
     const { user_id } = useParams();
     return (
          <div className="LogIndev">
               <Logo ver={1} />
               <ResetPasswordPlate user_id={user_id} />
               <BigMessageSign message={["Reset","Your", "Password"]} />
          </div>);
}
export default ResetPasswordPage;