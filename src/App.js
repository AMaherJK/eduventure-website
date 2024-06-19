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
import NewsItem from './components/Browsing/NewsItem'
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
          <Route path='/Community' Component={Community} />
          <Route path='/Group/:group_id' Component={Group} />
          <Route path='/News' Component={NewsPage} />
          <Route path='/News/:News_id' Component={NewsItem} />
        </Route>
        <Route exact path="/u/myprofile" Component={MyProfile} />
        <Route exact path="/u/myprofile/edit" Component={EditProfilePage} />
      </Routes>

  );
}

export default App;
