import './userInfo.css'
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
    return (
        <div className='fullInfoBox'>
            <img src={userImg} className='userImgStyle' alt='profile pic' />
            <div className='infobox-text'>
                <h1 className='userNameStyle'>{userName}</h1>
                <h1 className='userTagStyle'>{userTag}</h1>
                <h1 className='userIDStyle'>{userID}</h1>
                <p className='userDescriptionStyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor cursus felis non bibendum. In tristique, augue mattis euismod pulvinar, orci ligula semper ipsum, sed mollis dolor odio vel nunc. Proin et ipsum at nisi venenatis placerat. Cras id aliquet urna. Integer varius, justo eget rhoncus maximus, lacus felis hendrerit.</p>
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