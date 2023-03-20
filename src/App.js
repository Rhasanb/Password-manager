
import {
  Routes,
  Route
  } from "react-router-dom";
import './App.css';
import Button from "./components/Button/Button";
import Generator from "./components/Generator/Generator";


import Reports from "./components/Reports/Reports";
import Send from "./components/Send/Send";


import Singin from "./components/Signin/Signin";
import Singup from "./components/Signout/Signup";
import Tools from "./components/Tools/Tools";
import Vault from "./components/Vault/Vault";



function App() {
  return (
  
  
        
    <Routes>



        <Route path="/generator" element={<Generator />} />
        
        <Route path="/vault" element={<Vault />} />
        <Route path="/" element={<Vault />} />
        <Route path="/send" element={<Send/>} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/signin" element={<Singin />} />
        <Route path="/logout" element={<Button />} />


       
        
      </Routes>
    
      

  );
}

export default App;
