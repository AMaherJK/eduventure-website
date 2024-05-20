import './NPC.css'
function NPC(props){
    var Name=props.info.Name
    var SubText=props.info.SubText
    var ImgID=props.info.ImgID

    return(
        <div className='NPC'>
        <div className='NPCPhotoContainer'>
            {(ImgID===0)?<div className='NPCPhoto npc1'/>:
             (ImgID===1)?<div className='NPCPhoto npc2'/>:
                         <div className='NPCPhoto npc3'/>}
        </div>
        <div className='NameTitlePlateNPC'>
            <h1>{Name}</h1>
            <h2>{SubText}</h2>
        </div>
    </div>
    )
}
export default NPC