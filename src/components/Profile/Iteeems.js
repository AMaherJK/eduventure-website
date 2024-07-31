import Logo from "../logoNwordmark";
function Iteeems() {
    const itemsArray = [
        require("../../assets/imgs/aaa/Items/Icon1.png"),
        require("../../assets/imgs/aaa/Items/Icon2.png"),
        require("../../assets/imgs/aaa/Items/Icon3.png"),
        require("../../assets/imgs/aaa/Items/Icon4.png"),
        require("../../assets/imgs/aaa/Items/Icon5.png"),
        require("../../assets/imgs/aaa/Items/Icon6.png"),
        require("../../assets/imgs/aaa/Items/Icon7.png"),
        require("../../assets/imgs/aaa/Items/Icon8.png"),
        require("../../assets/imgs/aaa/Items/Icon9.png"),
        require("../../assets/imgs/aaa/Items/Icon10.png"),
        require("../../assets/imgs/aaa/Items/Icon11.png"),
        require("../../assets/imgs/aaa/Items/Icon12.png"),
        require("../../assets/imgs/aaa/Items/Icon13.png"),
        require("../../assets/imgs/aaa/Items/Icon14.png"),
        require("../../assets/imgs/aaa/Items/Icon15.png"),
        require("../../assets/imgs/aaa/Items/Icon16.png"),
        require("../../assets/imgs/aaa/Items/Icon17.png"),
        require("../../assets/imgs/aaa/Items/Icon18.png"),
        require("../../assets/imgs/aaa/Items/Icon19.png"),
        require("../../assets/imgs/aaa/Items/Icon20.png"),
        require("../../assets/imgs/aaa/Items/Icon21.png"),
        require("../../assets/imgs/aaa/Items/Icon22.png"),
        require("../../assets/imgs/aaa/Items/Icon23.png"),
        require("../../assets/imgs/aaa/Items/Icon24.png"),
        require("../../assets/imgs/aaa/Items/Icon25.png"),
        require("../../assets/imgs/aaa/Items/Icon26.png"),
        require("../../assets/imgs/aaa/Items/Icon27.png"),
        require("../../assets/imgs/aaa/Items/Icon28.png"),
        require("../../assets/imgs/aaa/Items/Icon29.png"),
        require("../../assets/imgs/aaa/Items/Icon30.png"),
        require("../../assets/imgs/aaa/Items/Icon31.png"),
        require("../../assets/imgs/aaa/Items/Icon32.png"),
        require("../../assets/imgs/aaa/Items/Icon33.png"),
        require("../../assets/imgs/aaa/Items/Icon34.png"),
        require("../../assets/imgs/aaa/Items/Icon35.png"),
        require("../../assets/imgs/aaa/Items/Icon36.png"),
        require("../../assets/imgs/aaa/Items/Icon37.png"),
        require("../../assets/imgs/aaa/Items/Icon38.png"),
        require("../../assets/imgs/aaa/Items/Icon39.png"),
        require("../../assets/imgs/aaa/Items/Icon40.png"),
        require("../../assets/imgs/aaa/Items/Icon41.png"),
        require("../../assets/imgs/aaa/Items/Icon42.png"),
        require("../../assets/imgs/aaa/Items/Icon43.png"),
        require("../../assets/imgs/aaa/Items/Icon44.png"),
        require("../../assets/imgs/aaa/Items/Icon45.png"),
        require("../../assets/imgs/aaa/Items/Icon46.png"),
        require("../../assets/imgs/aaa/Items/Icon47.png"),
        require("../../assets/imgs/aaa/Items/Icon48.png"),
    ];
    var userInfo = {imgPath: require("../../assets/imgs/StockImgs/stockimgdefault.png"),themeID:3, name: "AMaherJK"}

    return (<>
            <Logo ver={0} />
                <div className="header">
                    <img src={userInfo.imgPath} className="headerUserPic" style={{marginLeft:"25rem"}}/>
                    <h1 style={{marginLeft:"5%"}}>{userInfo.name}</h1>
                </div>
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap: "2rem", backgroundColor: "#000033", justifyContent:"space-around" }}>
            {itemsArray.map((itemsArray, index) => (
                <img key={index} src={itemsArray} style={{ border: "2px solid #fff", width:"200px" }} />
            ))}
        </div>
    </>

    )
}
export default Iteeems