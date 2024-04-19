function LogInPlateStage(props) {
    const current={height:"10px",width:"100px", backgroundColor:"#FF3399",marginLeft: "5px", float:"left", transition:"all 0.5s ease-in"}
    const current2={height:"10px",width:"100px", backgroundColor:"#FF3399", marginLeft: "10px", float:"left", transition:"all 0.5s ease-in"}
    const past={height:"10px",width:"100px", backgroundColor:"#66CCCC",marginLeft: "5px", float:"left", transition:"all 0.5s ease-in"}
    const wait={height:"10px",width:"100px", backgroundColor:"#ECECEC", marginLeft: "10px", float:"left", transition:"all 0.5s ease-in"}

    if (props.stage == 0){
        return (
            <div style={{ height: "10px", width: "210px", margin: "auto",display: "flex", alignItems: "center" }}>
                <div style={current}></div>
                <div style={wait}></div>
            </div>);}
    else{
        return (
            <div style={{ height: "10px", width: "210px", margin: "auto",display: "flex", alignItems: "center" }}>
                <div style={past}></div>
                <div style={current2}></div>
            </div>);
    }
}

export default LogInPlateStage