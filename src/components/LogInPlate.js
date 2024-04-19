import React, { useState } from 'react';
import Stage from './LogInPlateStage'
import { Link } from 'react-router-dom';

function LogInPlate() {
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
        marginTop: "-30px"

    }
    const botalt = {
        fontFamily: "inter_eduventure",
        fontWeight: "800",
        textTransform: "uppercase",
        fontSize: "11pt",
        marginTop: "36px",
        color: "#000033",
        cursor: "Pointer"
    }

    var emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    var passwrodRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;
    const [form, formthing] = useState('')
    const [currentInfo, setcurrentInfo] = useState('inputForm')
    const [stage, setStage] = useState(0)
    const [headText, setheadText] = useState("What's Your Email?")
    const [detailText, setdetailText] = useState("used to sign in.")
    const [userData, setUserData] = useState({ Email: "", password: "" })
    const [passwordVis, setpasswordVis] = useState("password")

    const handleInput = (e) => {
        e.preventDefault();
        formthing(e.target.value)
    }
    const handleClick = () => { //handles clicks based on stage
        switch (stage) {
            case 0:
                handleClick_Email()
                break
            case 1:
                handleClick_password()
                break
            default:
                break
        }
    }

    const handleClick_Email = () => {
        if (emailRegex.test(form)) { //validating that the email is in correct form
            setcurrentInfo('inputForm')
            setUserData({
                ...userData,
                Email: form
            })
            advanceStage()
        }
        else {//missing proper visual feedback
            setcurrentInfo('inputFormFalse')
            console.log("Nah that aint it")
        }
    }

    const handleClick_password = () => {
        if (passwrodRegex.test(form)) {
            setcurrentInfo('inputForm')
            setUserData({
                ...userData,
                password: form
            })
            advanceStage()
        }
        else {         //missing proper visual feedback
            setcurrentInfo('inputFormFalse')
            console.log("bad password")
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
                setheadText("What's Your Email?")
                setdetailText("use your address to log in")
                break
            case 1:
                setheadText("Type in your password")
                setdetailText("your pass key!")
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
            <div style={{ paddingTop: "38px" }}>
                <Stage stage={stage} />
                <div style={{ textAlign: "center", marginTop: "-10px", marginBottom: "50px" }}>
                    <h1 style={head}>{headText}</h1>
                    <h3 style={detail}>{detailText}</h3>
                </div>
            </div>
            {(stage === 0) ? <input type="text" placeholder="EMail" className={currentInfo} value={form} onChange={handleInput} onKeyDown={(e) => { if (e.key === "Enter") handleClick() }} />
                : <div style={{ display: "flex", alignItems: "center" }}>
                    <input type={passwordVis} placeholder="Password" className={currentInfo} value={form} onChange={handleInput} onKeyDown={(e) => { if (e.key === "Enter") handleClick() }} />
                    {(passwordVis === "password") ? <img style={{ zIndex: "1", cursor: "pointer" }} src={require('../assets/icons/ShowPassword.png')} onClick={setpasswordVis_click} alt='show password' />
                        : <img style={{ zIndex: "1", cursor: "pointer" }} src={require('../assets/icons/HidePassword.png')} onClick={setpasswordVis_click} alt='hide password' />}
                </div>}

            <div style={{ textAlign: "center", marginTop: "360px" }}>
                <button className="proceedbtn" onClick={handleClick}><img src={require('../assets/icons/Arrow.png')} alt={"→"} /></button>
                <Link to="/signup">
                    <h4 style={botalt}>Don't have an account?</h4></Link>
            </div>
        </div >);
}
export default LogInPlate