import './index.css';
import { Routes, Route, Link } from "react-router-dom";
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
import Browsing from './components/Browsing/Browsing';
import Landing from './components/Browsing/Landing';
import About from './components/Browsing/About';
import Community from './components/Browsing/Community';
import MyProfile from './components/Profile/MyProfile';
import Group from "./components/Browsing/Group"
import NewsPage from './components/Browsing/NewsPage';
import EditProfilePage from './components/Profile/editProfile/EditProfilePage';
function App() {
  return (
    <Routes>
      <Route exact path='/signup' Component={SignUpPage} />
      <Route exact path='/login' Component={LogInPage} />
      <Route exact path="/" Component={Browsing}>
        <Route path='/' Component={Landing} />
        <Route path='/About' Component={About} />
        <Route path='/Community' Component={Community} />
        <Route path='/Group/:id' Component={Group}/>
        <Route path='/News' Component={NewsPage} />
      </Route>
      <Route exact path="/u/myprofile" Component={MyProfile} />
      <Route exact path="/u/myprofile/edit" Component={EditProfilePage} />
    </Routes>


  );
}

export default App;
