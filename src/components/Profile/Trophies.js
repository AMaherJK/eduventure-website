import Logo from "../logoNwordmark";
function Trophie() {
    const Trophies = [
        require("../../assets/imgs/aaa/Trophies/icon1.png"),
        require("../../assets/imgs/aaa/Trophies/icon2.png"),
        require("../../assets/imgs/aaa/Trophies/icon3.png"),
        require("../../assets/imgs/aaa/Trophies/icon4.png"),
        require("../../assets/imgs/aaa/Trophies/icon5.png"),
        require("../../assets/imgs/aaa/Trophies/icon6.png"),
        require("../../assets/imgs/aaa/Trophies/icon7.png"),
        require("../../assets/imgs/aaa/Trophies/icon8.png"),
        require("../../assets/imgs/aaa/Trophies/icon9.png"),
        require("../../assets/imgs/aaa/Trophies/icon10.png"),
        require("../../assets/imgs/aaa/Trophies/icon11.png"),
        require("../../assets/imgs/aaa/Trophies/icon12.png"),]
    var userInfo = {imgPath: require("../../assets/imgs/StockImgs/stockimgdefault.png"),themeID:3, name: "AMaherJK"}

    return (<div style={{height:"100vh", backgroundColor:"#000033"}}>
            <Logo ver={0} />
                <div className="header">
                    <img src={userInfo.imgPath} className="headerUserPic" style={{marginLeft:"25rem"}}/>
                    <h1 style={{marginLeft:"5%"}}>{userInfo.name}</h1>
                </div>
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap: "2rem", backgroundColor: "#000033", justifyContent:"space-around" }}>
            {Trophies.map((Trophies, index) => (
                <img key={index} src={Trophies} style={{ border: "2px solid #fff" }} />
            ))}
        </div>
    </div>

    )
}
export default Trophie