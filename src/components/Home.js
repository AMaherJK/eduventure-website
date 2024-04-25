import '../index.css';
import NavBar from "./NavBar"
import Footer from "./Footer"
function Home(props) {
    var loggedin=true;


    return (
        <div className="HomePageDiv">
            <NavBar loggedin={loggedin}/>
            <div className='landing'>
                <p>An educational RPG<br />To help you sharpen your mind</p>
                <img src={require("../assets/imgs/Dark - WordMark.png")} alt="logo" /> <br />
                <button className='PlayBtn'>Play now</button>
            </div>
            <Footer loggedin={loggedin}/>
        </div>
    )
}
export default Home