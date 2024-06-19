import React, { useState } from 'react';
import Stage from './Decoratives/LogInPlateStage'
function LogInPlate(props) {
    //#region some local style
    const head = {
        fontFamily: "inter_eduventure",
        fontWeight: "900",
        textTransform: "uppercase",
        fontSize: "30pt",
        color: "#000033"
    }
    const detail = {
        fontFamily: "inter_eduventure",
        fontWeight: "400",
        textTransform: "lowercase",
        fontSize: "18pt",
        color: "#000033",
        textAlign: "center"

    }
    const botalt = {
        fontFamily: "inter_eduventure",
        fontWeight: "800",
        textTransform: "uppercase",
        fontSize: "11pt",
        marginTop: "3rem",
        color: "#000033",
        cursor: "pointer"
    }
    //#endregion
    var passwrodRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;
    const [form, formthing] = useState('')
    const [currentInfo, setcurrentInfo] = useState('inputForm')
    const [stage, setStage] = useState(0)
    const [headText, setheadText] = useState("Reset Password")
    const [detailText, setdetailText] = useState(`change ${props.user_id}'s password`);
    const [userData, setUserData] = useState()
    const [passwordVis, setpasswordVis] = useState("password")

    const handleInput = (e) => {
        e.preventDefault();
        formthing(e.target.value)
    }
    const handleClick = () => { //handles clicks based on stage
        switch (stage) {
            case 0:
                NewPassword()
                break
            case 1:
                ConfirmPassword()
                break
            default:
                break
        }
    }
    const NewPassword = () => {
        if (passwrodRegex.test(form)) {
            setcurrentInfo('inputForm')
            setUserData(form)
            advanceStage()
        }
        else {
            setcurrentInfo('inputFormFalse')
        }
    }
    const ConfirmPassword = () => {
        if (userData === form) {
            setcurrentInfo('inputForm')
            console.log("PASSWORD RESET")
            advanceStage()
        }
        else {         //missing proper visual feedback
            setcurrentInfo('inputFormFalse')
            console.log("password")
        }
    }
    const advanceStage = () => {
        console.log(userData)
        console.log(stage)
        formthing("")
        if (stage < 2) {
            setStage(stage + 1);
            updatecontents();
        }
    }
    const updatecontents = () => {
        switch (stage + 1) {
            case 0:
                setheadText("Reset Password")
                setdetailText(`change ${props.user_id} password`);
                break
            case 1:
                setheadText("Confirm The Password")
                setdetailText(`change ${props.user_id} password`);

                break
            default:
                break
        }

    }
    const setpasswordVis_click = () => { //toggles password visibility & manages eye icon
        if (passwordVis === "password")
            setpasswordVis("text")
        else
            setpasswordVis("password")
    }

    return (
        <div className="platebox">
            <div style={{ width: "100%", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <div style={{ paddingTop: "3rem" }}>
                    <Stage stage={stage} />
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <h1 style={head}>{headText}</h1>
                        <h3 style={detail}>{detailText}</h3>
                    </div>
                </div>
                {(stage === 0) ?
                    <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", width: "85%" }}>
                            <input type={passwordVis} placeholder="Password" className={currentInfo} value={form} onChange={handleInput} onKeyDown={(e) => { if (e.key === "Enter") handleClick() }} />
                            {(passwordVis === "password") ? <img style={{ zIndex: "1", cursor: "pointer" }} src={require('../../assets/imgs/icons/ShowPassword.png')} onClick={setpasswordVis_click} alt='show password' />
                                : <img style={{ zIndex: "1", cursor: "pointer" }} src={require('../../assets/imgs/icons/HidePassword.png')} onClick={setpasswordVis_click} alt='hide password' />}
                        </div>
                        {(false) ? <h4 className='visualFeedbackInputForm'>We have sent an email to <span style={{ color: "#ff3399" }}>{userData.Email}</span>, check it to reset your password</h4> : <></>}
                    </div>
                    :
                    <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", width: "85%" }}>
                            <input type={passwordVis} placeholder="Password" className={currentInfo} value={form} onChange={handleInput} onKeyDown={(e) => { if (e.key === "Enter") handleClick() }} />
                            {(passwordVis === "password") ? <img style={{ zIndex: "1", cursor: "pointer" }} src={require('../../assets/imgs/icons/ShowPassword.png')} onClick={setpasswordVis_click} alt='show password' />
                                : <img style={{ zIndex: "1", cursor: "pointer" }} src={require('../../assets/imgs/icons/HidePassword.png')} onClick={setpasswordVis_click} alt='hide password' />}
                        </div>
                        {(false) ? <h4 className='visualFeedbackInputForm'>We have sent an email to <span style={{ color: "#ff3399" }}>{userData.Email}</span>, check it to reset your password</h4> : <></>}
                    </div>}
            </div>
            <div style={{ textAlign: "center", justifySelf: "end" }}>
                <button className="proceedbtn" onClick={handleClick}><img src={require('../../assets/imgs/icons/Arrow.png')} alt={"→"} /></button>
                {(stage === 0) ? <h4 style={botalt}>&nbsp;</h4> : <h4 style={botalt}>&nbsp;</h4>}
            </div>
        </div >);
}
export default LogInPlate