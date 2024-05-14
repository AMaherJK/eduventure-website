import './editProfile.css'
import React, { useState } from 'react';
import Logo from "../../logoNwordmark";
import Footer from "../../FrequentlyUsed/Footer"
import EditableTab from './EditableTab';
function EditProfilePage() {
    var userInfo = { imgPath: require("../../../assets/imgs/StockImgs/stockimg2.png"),themeID:3, name: "Mahmoud Hassan", tag: "Speed demon", uID: "folan_123",uDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor cursus felis non bibendum. In tristique, augue mattis euismod pulvinar, orci ligula semper ipsum, sed mollis dolor odio vel nunc. Proin et ipsum at nisi venenatis placerat. Cras id aliquet urna. Integer varius, justo eget rhoncus maximus, lacus felis hendrerit." }
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
                        <div onClick={() => setActiveTab(3)} className={activeTab === 3 ? 'tabActive' : 'tab'}>Favorite Group</div>
                        <div onClick={() => setActiveTab(4)} className={activeTab === 4 ? 'tabActive' : 'tab'}>Showcase</div>
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