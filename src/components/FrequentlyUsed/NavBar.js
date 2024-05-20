import './FUS.css';
import SignUpButton from "../Buttons/SignUpButton";
import LogoIcon from "../LogoIcon";
import SearchIcon from "./SearchIcon";
import UserImgPath from "../../assets/imgs/StockImgs/stockimg2.png";
import { Link, NavLink } from 'react-router-dom';
function NavBar(props) {
    const seperator = { height: "90px", width: "10px", backgroundColor: "#FF3399", borderRadius: "10px" }
    return (
        <ul className="NavigationBar">
            <NavLink to="/"><li><LogoIcon /></li></NavLink>
            <NavLink to="/About"><li>About</li></NavLink>
            <NavLink to="/Community"><li>Community</li></NavLink>
            <NavLink to="/Battle"><li>Battle</li></NavLink>
            <NavLink to="/Shop"><li>Shop</li></NavLink>
            <NavLink to="/More"><li>More</li></NavLink>

            <li className="RightsectionNavBar">
                <SearchIcon />
                <div style={seperator}></div>
                {(!props.loggedin) ?
                    <SignUpButton /> :
                    <>
                        <div className='SettingsBtn'><img src={require("../../assets/imgs/icons/Settings.png")}/></div>
                        <div className='profilePicNavBarcontainer'>
                            <NavLink to="/u/myprofile">
                            <img src={UserImgPath} className='userImgNavBar'/>
                            </NavLink>

                        </div>
                    </>}
            </li>

        </ul>


    )
}
export default NavBar;