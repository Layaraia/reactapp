import Welcome from "./components/Welcome";
import ButtonWithText from "./components/buttoncomponent/ButtonWithText";
import "./global.css";

function App() {
  return (
    <div className="Container">
      <Welcome />
      <ButtonWithText />
    </div>
  );
}

export default App;
