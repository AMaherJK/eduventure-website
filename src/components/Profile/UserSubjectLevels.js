function UserSubjectLevels(props){

    var subject=props.stats[0]
    var level=props.stats[1]
    var xp=props.stats[2]
    var Levelxp=props.stats[3]
    var levelCompletion=xp/Levelxp
    const pStyle = { fontFamily: "Inter_eduventure", color: "#FFFFFF", fontSize: "1.389vw", textTransform:"uppercase",margin:"0"}
    return(
        <div className='UserSubjectLevelsContainer'>
            <p style={pStyle}>{subject} · Level {level}</p>
            <div className='subjectlevelprogress' style={{'--width':levelCompletion}} />
        </div>
    )
}
export default UserSubjectLevels