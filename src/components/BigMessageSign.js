import '../index.css';
function BigMessageSign(props){
    console.log(props.message.length)
    if(props.message.length===2){
        return(
            <h1 className="BigMessageSignStyle">
                {props.message[0]}<br/> {props.message[1]}<span style={{color:"#FF3399"}}>!</span>
            </h1>

        );}
    else if(props.message.length===3){
        return(
            <h1 style={{color:"#000033", fontSize:"110pt"}} className="BigMessageSignStyle" >
                {props.message[0]}<br/>{props.message[1]}<br/>{props.message[2]}<span style={{color:"#FF3399"}}>!</span>
            </h1>
        ); 
    }
}
export default BigMessageSign;