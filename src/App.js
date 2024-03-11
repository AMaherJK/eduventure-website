import logo from './logo.svg';
import './App.css';
import './index.css';
import SignUpButton from "./components/SignUpButton";
import LogInButton from "./components/LogInButton";
import SignUpPlate from"./components/SignUpPlate";
function App() {
  return (
    <>
      <SignUpButton /><br/><br/><br/><br/>
      <LogInButton/><br/><br/>
      <SignUpPlate/>
    </>
  );
}

export default App;
