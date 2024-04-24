import Path from '../assets/imgs/Dark - Icon.png'
import Path2 from '../assets/imgs/Light - Icon.png'
import {Link} from "react-router-dom"
const LogoIcon = (props)=>{ 
    return(<Link to="/">
    {(props.ver===0)?<img src={Path2} alt="Logo" style={{width:"117px"}}/>:<img src={Path} alt="Logo" style={{width:"117px"}}/>}
    </Link>
);};
export default LogoIcon;