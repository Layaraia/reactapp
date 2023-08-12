import Welcome from "./components/WelcomeMessage";
import Input from "./components/Input";
import InputText from "./components/InputText";
import { useState } from "react";

function App() {
  const [value, setValue] = useState ("")
  return (
  <div className="App">
    <span>{value}</span>
    <Welcome/> 
    <InputText/> 
    <Input setValue = {setValue}/>
  </div>
  )
}

export default App;
