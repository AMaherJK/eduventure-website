import '../index.css';
import Footer from './Footer'
import Logo from "./logoNwordmark";
import UserSubjectLevels from './UserSubjectLevels'
import UserInfoBox from './UserInfo'
import { NavLink } from 'react-router-dom';
function MyProfile(props) {
    var userInfo = { imgPath: require("../assets/imgs/stockimg1.jpg"), name: "Mahmoud Hassan", tag: "Speed demon", uID: "folan_123" }
    var userLevelStats = [["Programming", 25, 30, 100], ["Mathematics ", 12, 60, 100], ["Problem Solving", 41, 80, 200], ["History", 7, 90, 100]]

    return (
        <div style={{ backgroundColor: "#000033", display: "flex", justifyContent: "center" }}>
            <Logo ver={0} />
            <div className='Profilecontents' />
            <div className='Profile'>
                <UserInfoBox info={userInfo} />
                <div style={{marginTop:"30px"}}>
                {userLevelStats.map((stat, index) => (
                    <UserSubjectLevels key={index} stats={stat} />))}</div>
                <div className='personalizedContent'>
                    <div className='profileShowcase'>
                        <div className='achievementShowcase'></div>
                        <div className='achievementShowcase'></div>
                        <div className='achievementShowcase'></div>
                    </div>
                    <div className='profileSideinfo'>
                        <NavLink to="/u/myprofile/achievemnts" className='profileSideinfotext'><h3>achievements </h3><h1>83</h1></NavLink>
                        <NavLink to="/u/myprofile/achievemnts" className='profileSideinfotext'><h3>Items </h3><h1>112</h1></NavLink>
                        <NavLink to="/u/myprofile/achievemnts" className='profileSideinfotext'><h3>Guides </h3><h1>3</h1></NavLink>
                        <NavLink to="/u/myprofile/achievemnts" className='profileSideinfotext'><h3>Trophies </h3><h1>7</h1></NavLink>
                        <NavLink to="/u/myprofile/achievemnts" className='profileSideinfotext'><h3>Groups </h3><h1>4</h1></NavLink>
                        <NavLink to="/u/myprofile/achievemnts" className='profileSideinfotext'><h3>Friends </h3><h1>12</h1></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default MyProfile