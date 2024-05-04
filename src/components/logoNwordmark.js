import Path from '../assets/imgs/Logos/Dark - Horizontal.png'
import Path2 from '../assets/imgs/Logos/Light - Horizontal.png'
import {Link} from "react-router-dom"
const logoNwordmark = (props)=>{ 
    return(<Link to="/">
    {(props.ver===0)?<img src={Path} alt="Logo" style={{width:"406px", position:"absolute",top:"0",left:"11px"}}/>:<img src={Path2} alt="Logo" style={{width:"406px", position:"absolute",top:"0",left:"11px"}}/>}
    </Link>
);};
export default logoNwordmark;