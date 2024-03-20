import './App.css';
import './index.css';
import SignUpButton from "./components/SignUpButton";
import LogInButton from "./components/LogInButton";
import SignUpPlate from"./components/SignUpPlate";
import BigMessageSign from "./components/BigMessageSign"
import Logo from "./components/logoNwordmark";
function App() {
  return (
    <>
    <div className="Maindev">
      <Logo/>
      <SignUpPlate />
      <BigMessageSign/>
      
    </div>
    </>
  );
}

export default App;
