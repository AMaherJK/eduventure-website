function SignUpPlateStage(props){

    const current={height:"10px",width:"110px", backgroundColor:"#FF3399",marginLeft: "5px", float:"left", transition:"all 0.5s ease-in"}
    const current2={height:"10px",width:"110px", backgroundColor:"#FF3399", marginLeft: "10px", float:"left", transition:"all 0.5s ease-in"}
    const past={height:"10px",width:"110px", backgroundColor:"#66CCCC",marginLeft: "5px", float:"left", transition:"all 0.5s ease-in"}
    const past2={height:"10px",width:"110px", backgroundColor:"#66CCCC",marginLeft: "10px", float:"left", transition:"all 0.5s ease-in"}
    const wait={height:"10px",width:"110px", backgroundColor:"#ECECEC", marginLeft: "10px", float:"left", transition:"all 0.5s ease-in"}
    if(props.stage===0){
        return(
            <div style={{height:"10px",width:"480px", margin:"auto",}}>
                <div style={current}></div>
                <div style={wait}></div>
                <div style={wait}></div>
                <div style={wait}></div>
            </div>);   }
    if(props.stage===1){
        return(
            <div style={{height:"10px",width:"480px", margin:"auto"}}>
                <div style={past}></div>
                <div style={current2}></div>
                <div style={wait}></div>
                <div style={wait}></div>
            </div>);   }
    if(props.stage===2){
        return(
            <div style={{height:"10px",width:"480px", margin:"auto"}}>
                <div style={past}></div>
                <div style={past2}></div>
                <div style={current2}></div>
                <div style={wait}></div>
            </div>);   }
    if(props.stage===3){
        return(
            <div style={{height:"10px",width:"480px", margin:"auto"}}>
                <div style={past}></div>
                <div style={past2}></div>
                <div style={past2}></div>
                <div style={current2}></div>
            </div>);   }
    else return;

}
export default SignUpPlateStage;