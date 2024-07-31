import './browsing.css'
import HeadlineNews from './MiniComponents/HeadlineNews'
import TheLatest from './MiniComponents/TheLatest'
import ShopSection from './MiniComponents/ShopSection'
import LogInButton from '../Buttons/LogInButton'
import SignUpButton from '../Buttons/SignUpButton'
import { useState } from 'react'
function Landing(){
    var Headline=[{Title:"Map Explorer",imgPath:require('../../assets/imgs/StockImgs/map.png'),textPreview:"Embark on a visual journey with our innovative Map Explorer! Discover engaging content, interactive features, and educational wonders seamlessly integrated into a dynamic map interface. Explore the world of knowledge with Map Explorer!"},]
    const [ModalVis,ToggleModalVis]=useState(false)
    return(                
    <div className='landing'>
        {(ModalVis)?
        <div className='modal' onClick={()=>ToggleModalVis(false)}>
        <div className='popuuup'>
            <div className='popuuupcontents'>
        <SignUpButton/>
        <LogInButton/>
        </div>
        </div>
    </div>
        :<></>}
   
        <p>An educational RPG<br />To help you sharpen your mind</p>
        <img src={require("../../assets/imgs/Logos/Dark - WordMark.png")} alt="logo" /> <br />
        <button className='PlayBtn' onClick={()=>ToggleModalVis(true)}>Play now</button>
        <div style={{padding:"20px"}}></div>
        <HeadlineNews Headline={Headline}/>
        <TheLatest/>        
        <div style={{padding:"100px"}}></div>
    </div>
)
}
export default Landing