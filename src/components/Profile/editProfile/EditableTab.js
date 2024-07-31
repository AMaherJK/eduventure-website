import './editProfile.css'
import React, { useState } from 'react';

function EditableTab(props) {
    var stage = props.stage
    const [name, setName] = useState(props.info.name)
    const [uID, setuID] = useState(props.info.uID)
    const [uDescription, setuDescription] = useState(props.info.uDescription)
    const [descCount, setdescCount] = useState(uDescription.length)

    const [uImg, setuImg] = useState(props.info.imgPath)
    const [activeTheme, setActiveTheme] = useState(props.info.themeID);


    const handleInput_Name = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }
    const handleInput_Username = (e) => {
        e.preventDefault();
        setuID(e.target.value)
    }
    const handleInput_uDescription = (e) => {
        e.preventDefault();
        setuDescription(e.target.value)
        setdescCount(e.target.value.length)
    }
    switch (stage) {
        case 0:
            return (
                <div className='Editablesection'>
                    <h1>General Settings</h1>
                    <p>This is where you can change your profile name or your username to help your friends find you.<br />Plus, you get to pick a cool title you've earned from the menu below!<br />Your profile name represents you in EduVenture! and can be shared with other users. On the other hand, your username is unique to you, so exercise caution when considering changes, as it is exclusive to you.</p>
                    <div>
                        <div className='Title_n_seperator'>
                            <h2 className='titleText'>Name</h2>
                            <div className='titleUnderline' />
                        </div>
                        <div>
                            <h3 className='descTitle'>Profile Name</h3>
                            <input className='inputBox' type='text' value={name} onChange={handleInput_Name} />
                        </div>
                        <div>
                            <h3 className='descTitle'>Username</h3>
                            <input className='inputBox' type='text' value={uID} onChange={handleInput_Username} />
                        </div>
                        <div className='Title_n_seperator'>
                            <h2 className='titleText'>Title</h2>
                            <div className='titleUnderline' />
                        </div>
                        <input className='inputBox' type='text' value="Speed Demon" style={{ margin: "2% 0 0 0" }} />
                        <div className='Title_n_seperator'>
                            <h2 className='titleText'>About me</h2>
                            <div className='titleUnderline' />
                        </div>
                        <textarea rows="6" className='inputBoxBIG' type='text' value={uDescription} onChange={handleInput_uDescription} style={{ margin: "2% 0 0 0" }} />
                        <p style={{ width: "100%", textAlign: "right" }}>{descCount}/350 Characters</p>
                    </div>
                </div>)
        case 1:
            return (
                <div className='Editablesection'>
                    <h1 className='Header'>Avatar Settings</h1>
                    <p>Choose your avatar</p>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: "5%" }}>
                        <div><img src={uImg} className='Editimg1' /> <p>256px</p></div>
                        <div><img src={uImg} className='Editimg2' /> <p>128px</p></div>
                        <div><img src={uImg} className='Editimg3' /> <p>64px</p></div>
                    </div>
                    <button className='UploadBtn'>Upload your avatar</button>
                    <p style={{ width: "45%" }}>Upload a file from your device. Image should be square, at least 512px x 512px.</p>
                </div>)
        case 2:
            return (
                <div className='Editablesection'>
                    <h1 className='Header'>Profile Theme</h1>
                    <p>Customize your profile and how it looks to others.</p>
                    <div className='ThemeSelectorContainer'>
                        <div className='theme-item'><div onClick={() => setActiveTheme(0)} className={activeTheme===0? 'theme theme1 activeTheme':'theme theme1'}/><h4>Aurora</h4></div>
                        <div className='theme-item'><div onClick={() => setActiveTheme(1)} className={activeTheme===1? 'theme theme2 activeTheme':'theme theme2'}/><h4>Borealis</h4></div>
                        <div className='theme-item'><div onClick={() => setActiveTheme(2)} className={activeTheme===2? 'theme theme3 activeTheme':'theme theme3'}/><h4>Darkest night</h4></div>
                        <div className='theme-item'><div onClick={() => setActiveTheme(3)} className={activeTheme===3? 'theme theme4 activeTheme':'theme theme4'}/><h4>Brightest Day</h4></div>
                        <div className='theme-item'><div onClick={() => setActiveTheme(4)} className={activeTheme===4? 'theme theme5 activeTheme':'theme theme5'}/><h4>Ignition</h4></div>
                        <div className='theme-item'><div onClick={() => setActiveTheme(5)} className={activeTheme===5? 'theme theme6 activeTheme':'theme theme6'}/><h4>Floral</h4></div>
                    </div>
                    <button className='UploadBtn' onClick={{}}>Try it out!</button>
                </div>
            )
    }


}
export default EditableTab;