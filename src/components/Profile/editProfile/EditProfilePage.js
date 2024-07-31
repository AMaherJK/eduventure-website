import './editProfile.css'
import React, { useState } from 'react';
import Logo from "../../logoNwordmark";
import Footer from "../../FrequentlyUsed/Footer"
import EditableTab from './EditableTab';
function EditProfilePage() {
    var userInfo = { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault.png"),themeID:3, name: "AMaherJK", tag: "Novice", uID: "AMaherJK",uDescription:"" }
    const [Tab, ToggleTab] = useState('tabActive')
    const [activeTab, setActiveTab] = useState(0);


    return (
        <div className="editPageDiv">
            <Logo ver={0} />
            <div className="pageContents">
                <div className="header">
                    <img src={userInfo.imgPath} className="headerUserPic" />
                    <h1 style={{marginLeft:"5%"}}>{userInfo.name}</h1>
                </div>
                <div className='EDITbody'>
                    <div className='SideBarContainer'>
                        <div onClick={() => setActiveTab(0)} className={activeTab === 0 ? 'tabActive' : 'tab'}>General</div>
                        <div onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'tabActive' : 'tab'}>Avatar</div>
                        <div onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'tabActive' : 'tab'}>Theme</div>
                    </div>
                    <EditableTab stage={activeTab} info={userInfo}/>

                </div>
            </div>
            <div style={{width:"100%", height:"150px"}}/>
            <Footer loggedin={true}/>
        </div>


    )

}
export default EditProfilePage;