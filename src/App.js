// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar.js';
import Alert from './Component/Alert.js';
import React, {useState} from 'react'
import About from './Component/About.js';
import Textarea from './Component/Textarea.js';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);


  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const togglemode = () => {
    if (mode === "light"){
      setmode("dark");
    document.body.style.backgroundColor="black"
    document.title='Text Util Dark'
    showAlert("dark mode has enabled","success")
    }
    else {
      setmode("light");
      document.body.style.backgroundColor="white"
      document.title='Text Util Home'
      showAlert("light mode is enabled","primary")
  }
}
  return (
    <>
      <Navbar title="Text Utils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <BrowserRouter>
      <Routes>


      <Route exact path="/" element={<Textarea mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about"   element={<About  mode={mode}/>}/>
           
         
         
        
          
        </Routes>


      </BrowserRouter>
      {/* <Textarea mode={mode} showAlert={showAlert}/> */}
      
      
     
    </>
  );
}

export default App;
