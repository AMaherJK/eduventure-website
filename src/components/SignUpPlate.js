import '../index.css';
import Stage from './SignUpPlateStage'
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

    return(
    <div className="platebox" style={{marginLeft:"50px"}}>
        <div style={{paddingTop:"38px"}}>
            <Stage stage={1}/>
            <div style={{  textAlign:"center", marginTop:"-10px",marginBottom:"50px"}}>
                <h1 style={head}>What's Your Email?</h1>
                <h3 style={detail}>used to sign in.</h3>
            </div>
        </div>
        <input type="text" placeholder="EMail" className="inputForm"></input>
    </div>);
};
export default SignUpPlate;