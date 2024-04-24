import SignUpButton from "./SignUpButton";
import LogoIcon from "./LogoIcon";
import SearchIcon from "./SearchIcon";
function NavBar(props){
    const seperator={height:"90px",width:"10px",backgroundColor:"#FF3399",borderRadius:"10px"}

    return(
        <ul className="NavigationBar">
            <li><LogoIcon/></li>
            <li>About</li>
            <li>Community</li>
            <li>Leaderboards</li>
            <li>More</li>
            <li className="NavBttn">
                <SearchIcon/>
                <div style={seperator}></div>
                <SignUpButton/>
            </li>
        </ul>


    )
}
export default NavBar;