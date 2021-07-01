
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Routes from "./Routes";

function App() {
  const [colors, setColors] = useState([]);
  return (
    <div className="App">
    <BrowserRouter>
      <Routes colors={colors}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
