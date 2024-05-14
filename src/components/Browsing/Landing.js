import './browsing.css'
function Landing(){
    return(                
    <div className='landing'>
        <p>An educational RPG<br />To help you sharpen your mind</p>
        <img src={require("../../assets/imgs/Logos/Dark - WordMark.png")} alt="logo" /> <br />
        <button className='PlayBtn'>Play now</button>
    </div>
)
}
export default Landing