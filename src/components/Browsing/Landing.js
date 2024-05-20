import './browsing.css'
import HeadlineNews from './MiniComponents/HeadlineNews'
import TheLatest from './MiniComponents/TheLatest'
import ShopSection from './MiniComponents/ShopSection'
function Landing(){
    var Headline=[{Title:"Map Explorer",imgPath:require('../../assets/imgs/StockImgs/stockimg1.png'),textPreview:"Embark on a visual journey with our innovative Map Explorer! Discover engaging content, interactive features, and educational wonders seamlessly integrated into a dynamic map interface. Explore the world of knowledge with Map Explorer!"},]
    return(                
    <div className='landing'>
        <p>An educational RPG<br />To help you sharpen your mind</p>
        <img src={require("../../assets/imgs/Logos/Dark - WordMark.png")} alt="logo" /> <br />
        <button className='PlayBtn'>Play now</button>
        <HeadlineNews Headline={Headline}/>
        <TheLatest/>        
        <ShopSection/>

    </div>
)
}
export default Landing