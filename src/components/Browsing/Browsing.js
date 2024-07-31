import './browsing.css';
import NavBar from "../FrequentlyUsed/NavBar"
import Footer from "../FrequentlyUsed/Footer"
import Landing from './Landing'
import Community from './Community';
import Group from './Group';
import About from './About';
import NewsPage from './NewsPage';
import NewsItem from './NewsItem';
import Leaderboards from './Leaderboards';
import PostsGrouped from './MiniComponents/Community Stuff/PostsGrouped'
import { Route, Routes } from 'react-router-dom';
function Browsing(props) {
    var loggedin = true;

    return (
        <>
            <NavBar loggedin={loggedin} />
            <Routes>
                <Route path='/' Component={Landing} />
                <Route path='/About' Component={About} />
                <Route path='/Community' Component={Community}/>
          <Route path="/Community/:type" Component={PostsGrouped}/>
                <Route path='/Group/:group_id' Component={Group} />
                <Route path='/News' Component={NewsPage} />
                <Route path='/News/:News_id' Component={NewsItem} />
                <Route path='/Leaderboards' Component={Leaderboards} />
            </Routes>
            <Footer loggedin={loggedin} />
        </>


    )


}
export default Browsing