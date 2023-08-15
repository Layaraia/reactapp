import Welcome from "./components/Welcome";
import ButtonWithText from "./components/buttoncomponent/ButtonWithText";
/*import { NAV } from "./const/nav";*/
import "./global.css";
import { MAGE } from "./const/MAGE";

function App() {
  return (
    <div className="container">
      <div>
        <img src={MAGE} alt="cool mage" />
      </div>
      <div>
        <Welcome />
        <ButtonWithText />
        {/*{NAV.map(item=>(<div>{item.title}</div>))}*/}
      </div>
    </div>
  );
}

export default App;
