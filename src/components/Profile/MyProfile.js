import './profile.css'
import Footer from '../FrequentlyUsed/Footer'
import Logo from "../logoNwordmark";
import UserSubjectLevels from './UserSubjectLevels'
import UserInfoBox from './UserInfo'
import ProfileShowcase from './profileShowcase'
import Grouppreview from './Grouppreview';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
function MyProfile(props) {
    var userInfo = { imgPath: require("../../assets/imgs/StockImgs/stockimgdefault.png"), name: "AMaherJK", tag: "Novice", uID: "AMaherJK",desc:"",Level:1,xp:5 }
    var userLevelStats = [["Mathematics ", 1, 0, 100], ["History", 1, 0, 100]]
    const [friendRequestSent, setRequest]=useState(false)
    const [friend,setFriend]=useState(true)
    var userGroups=[
        {GroupName:"The EC Community", GroupMembersCount:"12", imgPath:require("../../assets/imgs/Decoratives/GroupImgs/1.png"),GroupID:"1"},
        {GroupName:"HH Society", GroupMembersCount:"4", imgPath:require("../../assets/imgs/Decoratives/GroupImgs/2.png"),GroupID:"2"},
        {GroupName:"Igor Clan", GroupMembersCount:"5", imgPath:require("../../assets/imgs/Decoratives/GroupImgs/3.png"),GroupID:"3"},
        {GroupName:"JJ House", GroupMembersCount:"3", imgPath:require("../../assets/imgs/Decoratives/GroupImgs/4.png"),GroupID:"4"}
    ]
    var achievements = [
        { Name: "Welcome to Eduventure!", Description: "Complete the tutorial.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 1.jpg") },
        { Name: "Social Life!", Description: "Talk to an NPC.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 2.jpg") },
        { Name: "First Timer!", Description: "Achieve your first quest.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 3.jpg") },
        { Name: "Historian!", Description: "Win the History puzzle.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 8.jpg" )},
        { Name: "Marco... POLO!", Description: "Win the History puzzle 5 times.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 9.jpg") },
        { Name: "Adventurer!", Description: "Visit the 6 biomes.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 10.jpg" )},
        { Name: "Gallop!", Description: "Ride a horse for the first time.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 11.jpg") },
        { Name: "Quick Travel!", Description: "Use a portal for the first time.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 12.jpg") },
        { Name: "Time Flies!", Description: "Pass a day in game.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 13.jpg" )},
        { Name: "Novice Explorer!", Description: "Reach level 5.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 14.jpg" )},
        { Name: "Trailblazer!", Description: "Reach level 10.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 15.jpg" )},
        { Name: "Maverick!", Description: "Reach level 15.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 16.jpg" )},
        { Name: "True Contender!", Description: "Reach level 20.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 17.jpg") },
    ];
    var itemsArray = [
        require("../../assets/imgs/aaa/Items/Icon1.png"),
        require("../../assets/imgs/aaa/Items/Icon8.png"),
        require("../../assets/imgs/aaa/Items/Icon9.png"),
        require("../../assets/imgs/aaa/Items/Icon10.png"),
        require("../../assets/imgs/aaa/Items/Icon11.png"),
        require("../../assets/imgs/aaa/Items/Icon12.png"),
        require("../../assets/imgs/aaa/Items/Icon13.png"),
        require("../../assets/imgs/aaa/Items/Icon14.png"),
        require("../../assets/imgs/aaa/Items/Icon15.png"),
        require("../../assets/imgs/aaa/Items/Icon16.png"),
        require("../../assets/imgs/aaa/Items/Icon17.png"),
        require("../../assets/imgs/aaa/Items/Icon18.png"),
        require("../../assets/imgs/aaa/Items/Icon19.png"),
        require("../../assets/imgs/aaa/Items/Icon20.png"),
        require("../../assets/imgs/aaa/Items/Icon21.png"),
        require("../../assets/imgs/aaa/Items/Icon22.png"),
        require("../../assets/imgs/aaa/Items/Icon23.png"),
        require("../../assets/imgs/aaa/Items/Icon24.png"),
        require("../../assets/imgs/aaa/Items/Icon25.png"),
        require("../../assets/imgs/aaa/Items/Icon26.png"),
        require("../../assets/imgs/aaa/Items/Icon27.png"),
        require("../../assets/imgs/aaa/Items/Icon28.png"),
        require("../../assets/imgs/aaa/Items/Icon29.png"),
        require("../../assets/imgs/aaa/Items/Icon30.png"),
        require("../../assets/imgs/aaa/Items/Icon31.png"),
        require("../../assets/imgs/aaa/Items/Icon32.png"),
        require("../../assets/imgs/aaa/Items/Icon33.png"),
        require("../../assets/imgs/aaa/Items/Icon34.png"),
        require("../../assets/imgs/aaa/Items/Icon35.png"),
        require("../../assets/imgs/aaa/Items/Icon36.png"),
        require("../../assets/imgs/aaa/Items/Icon37.png"),
        require("../../assets/imgs/aaa/Items/Icon38.png"),
        require("../../assets/imgs/aaa/Items/Icon39.png"),
        require("../../assets/imgs/aaa/Items/Icon40.png"),
        require("../../assets/imgs/aaa/Items/Icon41.png"),
        require("../../assets/imgs/aaa/Items/Icon42.png"),
        require("../../assets/imgs/aaa/Items/Icon43.png"),
        require("../../assets/imgs/aaa/Items/Icon44.png"),
        require("../../assets/imgs/aaa/Items/Icon45.png"),
        require("../../assets/imgs/aaa/Items/Icon46.png"),
        require("../../assets/imgs/aaa/Items/Icon47.png"),
        require("../../assets/imgs/aaa/Items/Icon48.png"),
    ];    
    const Trophies = [
        require("../../assets/imgs/aaa/Trophies/icon1.png"),
        require("../../assets/imgs/aaa/Trophies/icon2.png"),
        require("../../assets/imgs/aaa/Trophies/icon8.png"),
        require("../../assets/imgs/aaa/Trophies/icon9.png"),
        require("../../assets/imgs/aaa/Trophies/icon10.png"),
        require("../../assets/imgs/aaa/Trophies/icon11.png"),
        require("../../assets/imgs/aaa/Trophies/icon12.png"),
    ]
        return (
        <div className='profileContainer'>
            <Logo ver={0} />
            {/* {(!friendRequestSent)?<div className='AddAsFriendBTN' onClick={()=>setRequest(true)}>Send Friend Request</div>
            :<div className='AddAsFriendBTN sentBTN'>your request is sent</div>} */}
                        <NavLink to="/u/myprofile/edit"><div className='editBtn'><img src={require("../../assets/imgs/icons/Edit.png")} alt='edit'/></div></NavLink>
{/* 
            {(friend)?
            <>
            <div className='editBtn'><img src={require("../../assets/imgs/icons/chat.png")} style={{width:"90px"}}/></div>
                <div className='editBtn secondone'><img src={require("../../assets/imgs/icons/Unfriend.png")} style={{width:"90px"}} onClick={()=>setFriend(false)}/></div></>
            :<>{(!friendRequestSent)?<div className='AddAsFriendBTN' onClick={()=>setRequest(true)}>Send Friend Request</div>
            :<div className='AddAsFriendBTN sentBTN'>your request is sent</div>}</>} */}
            <div className='Profile'>
                <UserInfoBox info={userInfo} />
                <div style={{ marginTop: "30px" }}>
                    {userLevelStats.map((stat, index) => (
                        <UserSubjectLevels key={index} stats={stat} />))}
                </div>
                <div className='personalizedContent'>

                    <div className='profileShowcase'>
                        <ProfileShowcase typeID={0} achievements={achievements}/>
                        <ProfileShowcase typeID={1} items={itemsArray}/>
                        <ProfileShowcase typeID={2} trophies={Trophies}/>
                    </div>
                    <div className='profileSideinfo'>
                        <NavLink to="/u/myprofile/achievements" className='profileSideinfotext'><h3>achievements </h3><h1>{achievements.length}</h1></NavLink>
                        <NavLink to="/u/myprofile/Items" className='profileSideinfotext'><h3>Items </h3><h1>{itemsArray.length}</h1></NavLink>
                        <NavLink to="/u/myprofile/Trophies" className='profileSideinfotext'><h3>Trophies </h3><h1>{Trophies.length}</h1></NavLink>
                        <NavLink to="/u/myprofile/groups" className='profileSideinfotext'><h3>Groups </h3><h1>{userGroups.length}</h1></NavLink>
                        <Grouppreview info={userGroups[0]}/>
                        <Grouppreview info={userGroups[1]}/>
                        <Grouppreview info={userGroups[2]}/>
                        <NavLink to="/u/myprofile/achievemnts" className='profileSideinfotext'><h3>Friends </h3><h1>12</h1></NavLink>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )

}
export default MyProfile