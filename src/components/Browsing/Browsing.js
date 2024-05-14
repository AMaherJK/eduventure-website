import './browsing.css';
import NavBar from "../FrequentlyUsed/NavBar"
import Footer from "../FrequentlyUsed/Footer"
import Landing from './Landing'
import About from './About';
import { Route, Routes } from 'react-router-dom';
function Browsing(props) {
    var loggedin = true;

    return (
        <>
            <NavBar loggedin={loggedin} />
            <Routes>
                <Route path='/' Component={Landing} />
                <Route path='/About' Component={About} />
            </Routes>
            <Footer loggedin={loggedin} />
        </>


    )


}
export default Browsing