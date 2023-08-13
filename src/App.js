import Welcome from "./components/WelcomeMessage";
import Input from "./components/Input";
import InputText from "./components/InputText";
import { useState } from "react";
import TextAfterINput from "./components/TextAfterInput";

function App() {
  const [value, setValue] = useState ("")
  return (
  <div className="App">
    <Welcome/> 
    <InputText/> 
    <Input setValue = {setValue}/>
    <TextAfterINput value = {value}/>
  </div>
  )
}

export default App;
