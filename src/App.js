import './App.css';
import './index.css';
import SignUpButton from "./components/SignUpButton";
import LogInButton from "./components/LogInButton";
import { Routes, Route, Link } from "react-router-dom";
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
function App() {
  return (
    <Routes>
      <Route exact path='/signup' Component={SignUpPage} />
      <Route exact path='/login' Component={LogInPage} />
    </Routes>
  );
}

export default App;
