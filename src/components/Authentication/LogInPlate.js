import React, { useEffect, useState, } from 'react';
import Stage from './Decoratives/LogInPlateStage'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
function LogInPlate() {
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

    var emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    var passwrodRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;
    const [form, formthing] = useState('')
    const [currentInfo, setcurrentInfo] = useState('inputForm')
    const [stage, setStage] = useState(0)
    const [PasswordModalState, setPasswordModalState] = useState(false)
    const [headText, setheadText] = useState("What's Your Email?")
    const [detailText, setdetailText] = useState("used to sign in.")
    const [userData, setUserData] = useState({ Email: "", password: "" })
    const [passwordVis, setpasswordVis] = useState("password")
    const navigate = useNavigate();
    const [Loading, setLoading] = useState(false)
    useEffect(() => {
        if(Loading){
        setTimeout(() => {
            setLoading(false)
            navigate("/");
        }, 2000);}
    },);
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
            setLoading(true)
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
    const ToggleForgotPasswordModal = () => {
        setPasswordModalState(!PasswordModalState)
        console.log(PasswordModalState)
    }

    return (<>
        {(Loading)?<Loader/>:
        <div className="platebox">
            <div style={{ width: "100%", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <div style={{ paddingTop: "3rem" }}>
                    <Stage stage={stage} />
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <h1 style={head}>{headText}</h1>
                        <h3 style={detail}>{detailText}</h3>
                    </div>
                </div>
                {(stage === 0) ? <input type="text" placeholder="eduventure@example.com" className={currentInfo} value={form} onChange={handleInput} onKeyDown={(e) => { if (e.key === "Enter") handleClick() }} />
                    :
                    <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", width: "85%" }}>
                            <input type={passwordVis} placeholder="Password" className={currentInfo} value={form} onChange={handleInput} onKeyDown={(e) => { if (e.key === "Enter") handleClick() }} />
                            {(passwordVis === "password") ? <img style={{ zIndex: "1", cursor: "pointer" }} src={require('../../assets/imgs/icons/ShowPassword.png')} onClick={setpasswordVis_click} alt='show password' />
                                : <img style={{ zIndex: "1", cursor: "pointer" }} src={require('../../assets/imgs/icons/HidePassword.png')} onClick={setpasswordVis_click} alt='hide password' />}
                        </div>
                        {(PasswordModalState) ? <h4 className='visualFeedbackInputForm'>We have sent an email to <span style={{ color: "#ff3399" }}>{userData.Email}</span>, check it to reset your password</h4> : <></>}

                    </div>}
            </div>
            <div style={{ textAlign: "center", justifySelf: "end" }}>
                {(stage === 0) ? <button className="proceedbtn" onClick={handleClick}><img src={require('../../assets/imgs/icons/Arrow.png')} alt={"→"} /></button> :
                <button className="proceedbtn" onClick={handleClick}><img src={require('../../assets/imgs/icons/Arrow.png')} alt={"→"} /></button>}
                {(stage === 0) ? <Link to="/signup"><h4 style={botalt}>Don't have an account?</h4></Link> : <h4 style={botalt} onClick={ToggleForgotPasswordModal}>Forgot your password?</h4>}
            </div>
        </div >
    }</>);
}
export default LogInPlate