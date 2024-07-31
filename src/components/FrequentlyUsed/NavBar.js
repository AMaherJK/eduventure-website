import './FUS.css';
import SignUpButton from "../Buttons/SignUpButton";
import LogoIcon from "../LogoIcon";
import SearchIcon from "./SearchIcon";
import UserImgPath from "../../assets/imgs/StockImgs/stockimg2.png";
import { Link, NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../Authentication/Loader';
function NavBar(props) {
    const seperator = { height: "90px", width: "10px", backgroundColor: "#FF3399", borderRadius: "10px" }
    const [logstatus,setLogstatus]=useState(true)
    const [togglesetting,settogglesetting]=useState(false)
    function toggleS(){
        settogglesetting(!togglesetting)
    }
    const navigate = useNavigate();

    const [Loading, setLoading] = useState(false)
    useEffect(() => {
        if(Loading){
        setTimeout(() => {
            setLoading(false)
            navigate("/");
        }, 800);}
    },);


    return (
        <>{(Loading)?<Loader/>:
        <ul className="NavigationBar">
            <NavLink to="/"><li className="navbarItem"><LogoIcon /></li></NavLink>
            <NavLink to="/About"><li className="navbarItem">About</li></NavLink>
            <NavLink to="/Community"><li className="navbarItem">Community</li></NavLink>
            <NavLink to="/News"><li className="navbarItem">News</li></NavLink>
            <NavLink to="/Leaderboards"><li className="navbarItem">Leaderboards</li></NavLink>

            <li className="RightsectionNavBar">
                <SearchIcon />
                <div style={seperator}></div>
                {(!logstatus) ?
                    <SignUpButton /> :
                    <>
                        <div className='SettingsBtn' onClick={()=>toggleS()}><img src={require("../../assets/imgs/icons/Settings.png")}/>
                        </div>
                        {(togglesetting)?
                        <div className='dropdownSetting'>
                                <Link to="/u/myprofile" className='itemdds'>Profile</Link>
                                <Link to="/Settings" className='itemdds'>Settings</Link>
                                <Link to="/" onClick={()=>{setLogstatus(false); setLoading(true)}} className='itemdds'>Log Out</Link>
                            </div>
:<></>}
                        <div className='profilePicNavBarcontainer'>
                            <NavLink to="/u/myprofile">
                            <img src={require("../../assets/imgs/StockImgs/stockimgdefault.png")} className='userImgNavBar'/>
                            </NavLink>

                        </div>
                    </>}
            </li>

        </ul>

        }</>
    )
}
export default NavBar;