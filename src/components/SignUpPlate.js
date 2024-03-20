import '../index.css';
import Stage from './SignUpPlateStage'
import Arrow from '../assets/icons/Arrow.png'
function SignUpPlate(){
    const head={
        fontFamily:"inter_eduventure",
        fontWeight:"900",
        textTransform:"uppercase",
        fontSize:"30pt",
        color:"#000033"
    }
    const detail={
        fontFamily:"inter_eduventure",
        fontWeight:"400",
        textTransform:"lowercase",
        fontSize:"18pt",
        color:"#000033",
        marginTop:"-30px"

    }
    const botalt={
        fontFamily:"inter_eduventure",
        fontWeight:"800",
        textTransform:"uppercase",
        fontSize:"11pt",
        marginTop:"36px",
        color:"#000033",

    }
    return(
    <div className="platebox">
        <div style={{paddingTop:"38px"}}>
            <Stage stage={1}/>
            <div style={{  textAlign:"center", marginTop:"-10px",marginBottom:"50px"}}>
                <h1 style={head}>What's Your Email?</h1>
                <h3 style={detail}>used to sign in.</h3>
            </div>
        </div>
        <input type="text" placeholder="EMail" className="inputForm"></input>
        <div style={{textAlign:"center", marginTop:"360px"}}>
            <button className="proceedbtn"><img src={Arrow} alt={""}/></button>
            <h4 style={botalt}>already have an account?</h4>
        </div>
    </div>);
};
export default SignUpPlate;