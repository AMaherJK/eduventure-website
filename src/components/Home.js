import '../index.css';
import NavBar from "./NavBar"
import Footer from "./Footer"
function Home(props) {

    return (
        <div className="HomePageDiv">
            <NavBar />
            <div className='landing'>
                <p>An educational RPG<br />To help you sharpen your mind</p>
                <img src={require("../assets/imgs/Dark - WordMark.png")} alt="logo" /> <br />
                <button className='PlayBtn'>Play now</button>
            </div>
            <Footer/>
        </div>
    )
}
export default Home