import "./previews.css"
import { Link } from "react-router-dom"
function Grouppreview(props){
    return(
        <Link to={`/Group/${props.info.GroupID}`} className="groupContainer">
            <img src={props.info.imgPath}/>
            <div className="GroupDetails">
                <h1>{props.info.GroupName}</h1>
                <h2>{props.info.GroupMembersCount} Members</h2>
            </div>
        </Link>
    )
}
export default Grouppreview