import "./CombinedSheet.css"
import NewsPrevItem from "./NewsPrevItem"
function TheLatest() {
    var LatestNews = [{ imgPath: require("../../../assets/imgs/StockImgs/stockimg2.png"), Date: "25/4/2024", Type: "Community", Title: "Eduventure Coming Soon!" },
                      { imgPath: require("../../../assets/imgs/StockImgs/stockimg3.png"), Date: "12/3/2024", Type: "Event News", Title: "Summer event update and changes" },
                      { imgPath: require("../../../assets/imgs/StockImgs/stockimg1.png"), Date: "7/12/2023", Type: "Update Log", Title: "Eduventure V2.3 changelog" }]
    return (
        <div className="TheLatest">
            <div className="Title">
                <h1>The Latest</h1>
                <h4>Go to news page</h4>
            </div>
            <div className="NewsContainer">
                {LatestNews.map((item, index) => (
                    <NewsPrevItem key={index} item={item} />))}
            </div>
        </div>
    )
}
export default TheLatest