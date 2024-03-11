function SignUpPlateStage(props){

    const current={height:"10px",width:"110px", backgroundColor:"#FF3399",marginLeft: "5px", float:"left"}
    const current2={height:"10px",width:"110px", backgroundColor:"#FF3399",float:"left", marginLeft: "10px"}
    const wait={height:"10px",width:"110px", backgroundColor:"#ECECEC", marginLeft: "10px", float:"left"}
    if(props.stage===1){
        return(
            <div style={{height:"10px",width:"480px", margin:"auto",}}>
                <div style={current}></div>
                <div style={wait}></div>
                <div style={wait}></div>
                <div style={wait}></div>
            </div>);   }
    if(props.stage===2){
        return(
            <div style={{height:"10px",width:"480px", margin:"auto"}}>
                <div style={current}></div>
                <div style={current2}></div>
                <div style={wait}></div>
                <div style={wait}></div>
            </div>);   }
    if(props.stage===3){
        return(
            <div style={{height:"10px",width:"480px", margin:"auto"}}>
                <div style={current}></div>
                <div style={current2}></div>
                <div style={current2}></div>
                <div style={wait}></div>
            </div>);   }
    if(props.stage===4){
        return(
            <div style={{height:"10px",width:"480px", margin:"auto"}}>
                <div style={current}></div>
                <div style={current2}></div>
                <div style={current2}></div>
                <div style={current2}></div>
            </div>);   }
    else return;

}
export default SignUpPlateStage;