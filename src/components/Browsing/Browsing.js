import './browsing.css';
import NavBar from "../FrequentlyUsed/NavBar"
import Footer from "../FrequentlyUsed/Footer"
import Landing from './Landing'
import Community from './Community';
import Group from './Group';
import About from './About';
import NewsPage from './NewsPage';
import NewsItem from './NewsItem';
import { Route, Routes } from 'react-router-dom';
function Browsing(props) {
    var loggedin = true;

    return (
        <>
            <NavBar loggedin={loggedin} />
            <Routes>
                <Route path='/' Component={Landing} />
                <Route path='/About' Component={About} />
                <Route path='/Community' Component={Community} />
                <Route path='/Group/:group_id' Component={Group} />
                <Route path='/News' Component={NewsPage} />
                <Route path='/News/:News_id' Component={NewsItem} />

            </Routes>
            <Footer loggedin={loggedin} />
        </>


    )


}
export default Browsing