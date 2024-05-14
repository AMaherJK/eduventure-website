import './browsing.css';
import NavBar from "../FrequentlyUsed/NavBar"
import Footer from "../FrequentlyUsed/Footer"
function Home(props) {
    var loggedin = true;  
    return (
        <div>
            <NavBar loggedin={loggedin} />
            <div className='landing'>
                <p>An educational RPG<br />To help you sharpen your mind</p>
                <img src={require("../../assets/imgs/Logos/Dark - WordMark.png")} alt="logo" /> <br />
                <button className='PlayBtn'>Play now</button>
                <div style={{height:"500px", width:"100%"}}/> {/* for vision */}
            </div>
            <Footer loggedin={loggedin} />
        </div>
    )
}
export default Home