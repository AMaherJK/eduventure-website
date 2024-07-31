import './index.css';
import { Routes, Route } from "react-router-dom";
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
import ResetPasswordPage from './components/ResetPasswordPage';
import Browsing from './components/Browsing/Browsing';
import Landing from './components/Browsing/Landing';
import About from './components/Browsing/About';
import Community from './components/Browsing/Community';
import MyProfile from './components/Profile/MyProfile';
import Group from "./components/Browsing/Group"
import NewsPage from './components/Browsing/NewsPage';
import PostsGrouped from './components/Browsing/MiniComponents/Community Stuff/PostsGrouped'
import achievements from './components/Profile/achievements';
import NewsItem from './components/Browsing/NewsItem'
import Iteeems from './components/Profile/Iteeems';
import Trophie from './components/Profile/Trophies';
import Leaderboards from './components/Browsing/Leaderboards';
import EditProfilePage from './components/Profile/editProfile/EditProfilePage';
function App() {
  return (
      <Routes>
        <Route exact path='/signup' Component={SignUpPage} />
        <Route exact path='/login' Component={LogInPage} />
        <Route exact path='/ResetPassword/:user_id' Component={ResetPasswordPage} />
        <Route exact path="/" Component={Browsing}>
          <Route path='/' Component={Landing} />
          <Route path='/About' Component={About} />
          <Route path='/Community' Component={Community}/>
          <Route path="/Community/:type" Component={PostsGrouped}/>
          <Route path='/Group/:group_id' Component={Group} />
          <Route path='/News' Component={NewsPage} />
          <Route path='/News/:News_id' Component={NewsItem} />
          <Route path='/Leaderboards' Component={Leaderboards} />

        </Route>
        <Route exact path="/u/myprofile" Component={MyProfile} />
        <Route exact path="/u/myprofile/edit" Component={EditProfilePage} />
        <Route exact path="/u/myprofile/achievements" Component={achievements} />
        <Route exact path="/u/myprofile/Items" Component={Iteeems} />
        <Route exact path="/u/myprofile/Trophies" Component={Trophie} />
      </Routes>

  );
}

export default App;
