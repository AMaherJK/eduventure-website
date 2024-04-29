import './App.css';
import './index.css';
import SignUpButton from "./components/SignUpButton";
import LogInButton from "./components/LogInButton";
import { Routes, Route, Link } from "react-router-dom";
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
import HomePage from './components/Home';
import MyProfile from './components/MyProfile'
function App() {
  return (
    <Routes>
      <Route exact path='/signup' Component={SignUpPage} />
      <Route exact path='/login' Component={LogInPage} />
      <Route exact path="/" Component={HomePage}/>
      <Route exact path="/u/myprofile" Component={MyProfile}/>
    </Routes>


  );
}

export default App;
