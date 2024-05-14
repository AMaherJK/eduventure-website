import '../browsing.css'
import './TeamMembers.css'
import AMaher from '../../../assets/imgs/Decoratives/DevPhoto/AhmedMaher.png'
function TeamMember(props){
    var Name=props.TMinfo.Name
    var JobDesc=props.TMinfo.JobDesc
    var ImgID=props.TMinfo.ImgID
    return(
        <div className='TeamMember'>
        <div className='PhotoContainer'>
            {
            (ImgID===0)?<div className='DevPhoto AMaher'/>:
            (ImgID===1)?<div className='DevPhoto ASaad'/>:
            (ImgID===2)?<div className='DevPhoto AAShraf'/>:
            (ImgID===3)?<div className='DevPhoto FMoustafa'/>:
            (ImgID===4)?<div className='DevPhoto AMaher'/>:
            (ImgID===5)?<div className='DevPhoto MMohamed'/>:
            <div className='DevPhoto MSalah'/>
        
        }
        </div>
        <div className='NameTitlePlate'>
            <h1>{Name}</h1>
            <h2>{JobDesc}</h2>
        </div>
    </div>

    )
}
export default TeamMember