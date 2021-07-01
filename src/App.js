
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Routes from "./Routes";
import { v4 as uuidv4, v4 } from 'uuid';

function App() {
  const [colors, setColors] = useState([]);

  const addColor = color => {
    let newColor = {...color, id: v4() };
  
    setColors(colors => [...colors, newColor]);
  }

  return (
    <div className="App">
    <BrowserRouter>
      <Routes colors={colors} addColor={addColor}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
