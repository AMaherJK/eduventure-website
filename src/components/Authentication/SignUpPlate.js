import React, { useState, useEffect } from 'react';
import Stage from './Decoratives/SignUpPlateStage'
import { Link,useNavigate } from 'react-router-dom';
import Loader from './Loader';
function SignUpPlate() {
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

    }
    const botalt = {
        fontFamily: "inter_eduventure",
        fontWeight: "800",
        textTransform: "uppercase",
        fontSize: "11pt",
        marginTop: "3rem",
        color: "#000033",
    }
    //#endregion

    var emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    var usernameRegex = /^[0-9A-Za-z-]{6,24}$/;
    var passwrodRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;
    const [form, formthing] = useState('')
    const [currentInfo, setcurrentInfo] = useState('inputForm')
    const [stage, setStage] = useState(0)
    const [headText, setheadText] = useState("What's Your Email?")
    const [detailText, setdetailText] = useState("used to sign in.")
    const [userData, setUserData] = useState({ Email: "", bDay: "", username: "", password: "" })
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
                handleClick_Birthdate()
                break
            case 2:
                handleClick_Username()
                break
            case 3:
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

    const handleClick_Birthdate = () => {
        setUserData({
            ...userData,
            bDay: form
        })
        advanceStage()
    }

    const handleClick_Username = () => {
        if (usernameRegex.test(form)) { //validating that the username is in correct form
            setcurrentInfo('inputForm')
            setUserData({
                ...userData,
                username: form
            })
            advanceStage()
        }
        else { //missing proper visual feedback
            setcurrentInfo('inputFormFalse')
            console.log("bad username")

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
        if (stage < 3) {
            setStage(stage + 1);
            updatecontents();
        }
    }

    const updatecontents = () => {
        switch (stage + 1) {
            case 0:
                setheadText("What's Your Email?")
                setdetailText("used to sign in.")
                break
            case 1:
                setheadText("When were you born?")
                setdetailText("Let’s find out how old you are.")
                break
            case 2:
                setheadText("Choose username")
                setdetailText("Must be unique.")
                break
            case 3:
                setheadText("Set your password")
                setdetailText("make sure it’s a good one!")
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
        <>
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
                {(stage === 0) ?
                    <div className='inputFormContainer'>
                        <input type="text" placeholder="eduventure@example.com" className={currentInfo} value={form} onChange={handleInput} onKeyDown={(e) => { if (e.key === "Enter") handleClick() }} />
                        {(currentInfo === 'inputForm') ? <h4>&nbsp;</h4> : <h4 className='visualFeedbackInputForm'>Please enter a valid email</h4>}
                    </div>
                    : (stage === 1) ? <input type="date" className={currentInfo} value={form} onChange={handleInput} max="2015-01-31" min="1930-01-31" onKeyDown={(e) => { if (e.key === "Enter") handleClick() }} />
                        : (stage === 2) ?
                            <div className='inputFormContainer'>
                                <input type="text" placeholder="Username" className={currentInfo} value={form} onChange={handleInput} onKeyDown={(e) => { if (e.key === "Enter") handleClick() }} />
                                {(currentInfo === 'inputForm') ? <h4>&nbsp;</h4> : <h4 className='visualFeedbackInputForm'>Please enter a valid username, letters, numbers & dash "-" are accepted</h4>}
                            </div>
                            : 
                            <div className='inputFormContainer'>
                                <div style={{ display: "flex", alignItems: "center", width: "85%" }}>
                                    <input type={passwordVis} placeholder="Password" className={currentInfo} value={form} onChange={handleInput} onKeyDown={(e) => { if (e.key === "Enter") handleClick() }} />
                                    {(passwordVis === "password") ? <img style={{ zIndex: "1", cursor: "pointer" }} src={require('../../assets/imgs/icons/ShowPassword.png')} onClick={setpasswordVis_click} alt='show password' />
                                        : <img style={{ zIndex: "1", cursor: "pointer" }} src={require('../../assets/imgs/icons/HidePassword.png')} onClick={setpasswordVis_click} alt='hide password' />}
                                    </div>
                                    {(currentInfo === 'inputForm') ? <h4>&nbsp;</h4> : <h4 className='visualFeedbackInputForm'>Please enter a password that has 8-24 characters, with at least one uppercase letter, one lowercase letter, and one number.</h4>}

                            </div>}
            </div>
            <div style={{ textAlign: "center" }}>
                <button className="proceedbtn" onClick={handleClick}><img src={require('../../assets/imgs/icons/Arrow.png')} alt={"→"} /></button>
                {(stage === 0) ? <Link to="/login"><h4 style={botalt}>already have an account?</h4></Link> : <h4 style={botalt}>&nbsp;</h4>}
            </div>
        </div >}</>);
};
export default SignUpPlate;