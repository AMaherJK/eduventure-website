import "./Loader.css"
function Loader(){
    return(
    <div className="LoaderContainer">
        <h1 className="hold">hold on, please</h1>
        <img src={require("../../assets/imgs/Logos/Dark - Icon.png")} style={{width:"20%"}} className="logoimgloading"/>
    </div>)
}
export default Loader