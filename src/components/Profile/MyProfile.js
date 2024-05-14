import './profile.css'
import Footer from '../FrequentlyUsed/Footer'
import Logo from "../logoNwordmark";
import UserSubjectLevels from './UserSubjectLevels'
import UserInfoBox from './UserInfo'
import ProfileShowcase from './profileShowcase'
import { NavLink } from 'react-router-dom';
function MyProfile(props) {
    var userInfo = { imgPath: require("../../assets/imgs/StockImgs/stockimg2.png"), name: "Mahmoud Hassan", tag: "Speed demon", uID: "folan_123" }
    var userLevelStats = [["Programming", 25, 70, 100], ["Mathematics ", 12, 60, 100], ["Problem Solving", 41, 80, 200], ["History", 7, 90, 100]]

    return (
        <div className='profileContainer'>
            <Logo ver={0} />
            <NavLink to="/u/myprofile/edit"><div className='editBtn'><img src={require("../../assets/imgs/icons/Edit.png")} alt='edit'/></div></NavLink>
            <div className='Profile'>
                <UserInfoBox info={userInfo} />
                <div style={{ marginTop: "30px" }}>
                    {userLevelStats.map((stat, index) => (
                        <UserSubjectLevels key={index} stats={stat} />))}
                </div>
                <div className='personalizedContent'>

                    <div className='profileShowcase'>
                        <ProfileShowcase typeID={0} />
                        <ProfileShowcase typeID={1} />
                        <ProfileShowcase typeID={2} />
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
            <Footer />

        </div>
    )

}
export default MyProfile