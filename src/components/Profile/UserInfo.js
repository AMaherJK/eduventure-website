import './userInfo.css'
function UserInfo(props) { 
    //#region var
    var userImg = props.info.imgPath
    var userName = props.info.name
    var userTag = props.info.tag
    var userID = props.info.uID
    var userLevel = props.info.Level
    var xp=props.info.xp
    var Levelxp=1000
    var levelCompletion=xp/Levelxp
    //#endregion
    return (
        <div className='fullInfoBox'>
            <img src={userImg} className='userImgStyle' alt='profile pic' />
            <div className='infobox-text'>
                <h1 className='userNameStyle'>{userName}</h1>
                <h1 className='userTagStyle'>{userTag}</h1>
                <h1 className='userIDStyle'>{userID}</h1>
                <p className='userDescriptionStyle'>{props.info.desc}</p>
                <div className='bottomsectionStyle'>
                    <h1 className='userLevelStyle'>Level {userLevel}</h1>
                    <div className='progressBar' style={{'--width':levelCompletion}} />
                </div>
                <p className='XPRemaining'>{Levelxp-xp} XP remaining to reach Level {userLevel+1}</p>
            </div>
        </div>
    )
}
export default UserInfo;