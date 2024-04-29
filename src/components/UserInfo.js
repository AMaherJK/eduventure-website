import '../index.css';
function UserInfo(props) { 
    //#region var
    var userImg = props.info.imgPath
    var userName = props.info.name
    var userTag = props.info.tag
    var userID = props.info.uID
    var userLevel = 23
    var xp=300
    var Levelxp=700
    var levelCompletion=xp/Levelxp
    //#endregion
    //#region Style constants
    const userImgStyle = {height: "297px", width: "297px", borderRadius: "20px", objectFit: "Cover"}
    const userNameStyle = { fontFamily: "Kufam_eduventure", color: "#FFFFFF", fontSize: "50pt" }
    const userTagStyle = { fontFamily: "Inter_eduventure", color: "#FF3399", fontSize: "35pt", marginTop: "-20px" }
    const userIDStyle = { fontFamily: "Inter_eduventure", color: "#ADFFFF", fontSize: "15pt", fontWeight: "400" }
    const userDescriptionStyle = { fontFamily: "Inter_eduventure", color: "#FFFFFF", fontSize: "10pt", marginTop: "15px" }
    const XPRemaining = { fontFamily: "Inter_eduventure", color: "#FFFFFF", fontSize: "10pt", marginTop: "-10px", textAlign:"right" }
    const bottomsectionStyle={display: "flex", alignItems: "center", gap:"10px", marginTop:"-5px"}
    const userLevelStyle = { fontFamily: "Inter_eduventure", color: "#FFFFFF", fontSize: "35pt", marginTop: "0px" } 
    //#endregion
    return (
        <div className='fullInfoBox'>
            <img src={userImg} style={userImgStyle} alt='profile pic' />
            <div className='infobox'>
                <h1 style={userNameStyle}>{userName}</h1>
                <h1 style={userTagStyle}>{userTag}</h1>
                <h1 style={userIDStyle}>{userID}</h1>
                <p style={userDescriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor cursus felis non bibendum. In tristique, augue mattis euismod pulvinar, orci ligula semper ipsum, sed mollis dolor odio vel nunc. Proin et ipsum at nisi venenatis placerat. Cras id aliquet urna. Integer varius, justo eget rhoncus maximus, lacus felis hendrerit.</p>
                <div style={bottomsectionStyle}>
                    <h1 style={userLevelStyle}>Level {userLevel}</h1>
                    <div className='progressBar' style={{'--width':levelCompletion}} />
                </div>
                <p style={XPRemaining}>{Levelxp-xp} XP remaining to reach Level {userLevel+1}</p>
            </div>
        </div>


    )
}
export default UserInfo;