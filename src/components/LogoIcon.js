import Path from '../assets/imgs/Logos/Dark - Icon.png'
import Path2 from '../assets/imgs/Logos/Light - Icon.png'
import {Link} from "react-router-dom"
const LogoIcon = (props)=>{ 
    return(
        <>        {(props.ver===0)?
           
            <img src={Path2} alt="Logo" style={{width:"117px"}}/>
            :
            <img src={Path} alt="Logo" style={{width:"117px"}}/>
        }</>

    )}
export default LogoIcon;