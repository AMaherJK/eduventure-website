import './browsing.css'
import { useParams } from 'react-router-dom'
import NewsPrevItem from './MiniComponents/NewsPrevItem'
// import newsService from '../../../../EduVenturee-master/EduVenturee-master/';
function NewsPage(props) {
    var LatestNews = [{ imgPath: require("../../assets/imgs/StockImgs/stockimg2.png"), Date: "25/4/2024", Type: "Community", Title: "Eduventure ComingEduventure Coming Soon!" },
        { imgPath: require("../../assets/imgs/StockImgs/stockimg3.png"), Date: "12/3/2024", Type: "Event News", Title: "Summer event update and changes" },
        { imgPath: require("../../assets/imgs/StockImgs/stockimg1.png"), Date: "7/12/2023", Type: "Update Log", Title: "Eduventure V2.3 changelog" },{ imgPath: require("../../assets/imgs/StockImgs/stockimg1.png"), Date: "7/12/2023", Type: "Update Log", Title: "Eduventure V2.3 changelog" },{ imgPath: require("../../assets/imgs/StockImgs/stockimg1.png"), Date: "7/12/2023", Type: "Update Log", Title: "Eduventure V2.3 changelog" },{ imgPath: require("../../assets/imgs/StockImgs/stockimg1.png"), Date: "7/12/2023", Type: "Update Log", Title: "Eduventure V2.3 changelog" },{ imgPath: require("../../assets/imgs/StockImgs/stockimg1.png"), Date: "7/12/2023", Type: "Update Log", Title: "Eduventure V2.3 changelog" }]
    // var x=newsService()

    const xyz=()=>{
        // console.log(x)
    }
    return(
        <div className='NewsPageContainer' onClick={xyz}>
            <div className='NewsContainerP'>
            {LatestNews.map((item, index) => (
                    <NewsPrevItem key={index} item={item} />))}

            </div>
        </div>

    )


}
export default NewsPage
