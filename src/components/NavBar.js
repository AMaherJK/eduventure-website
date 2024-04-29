import '../index.css';
import SignUpButton from "./SignUpButton";
import LogoIcon from "./LogoIcon";
import SearchIcon from "./SearchIcon";
import UserImgPath from "../assets/imgs/stockimg1.jpg";
import { NavLink } from 'react-router-dom';
function NavBar(props) {
    const seperator = { height: "90px", width: "10px", backgroundColor: "#FF3399", borderRadius: "10px" }


    return (
        <ul className="NavigationBar">
            <li><LogoIcon /></li>
            <li>About</li>
            <li>Community</li>
            <li>Leaderboards</li>
            <li>More</li>
            <li className="RightsectionNavBar">
                <SearchIcon />
                <div style={seperator}></div>
                {(!props.loggedin) ?
                    <SignUpButton /> :
                    <>
                        <div className='SettingsBtn'><img src={require("../assets/icons/Settings.png")}/></div>
                        <div className='profilePicNavBarcontainer'>
                            <NavLink to="/u/myprofile">
                            <img src={UserImgPath} className='userImg'/>
                            </NavLink>

                        </div>
                    </>}
            </li>

        </ul>


    )
}
export default NavBar;