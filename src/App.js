import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";




function App() {
  const [mode,setMode]=useState("light")
  const [btn,setBtn]=useState("Enable dark mode")
  const [alert,setAlert]=useState(null)

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)

  }, 2000);
}

  const toggleMood=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#808080"
      setBtn("disable dark mode")
      showAlert("Success","Dark mode has been enabled")
      setInterval(() => {
        document.title = "textUtils - DarkMode"
        
      }, 2000);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      setBtn("enable dark mode")
      showAlert("Success","light mode has been enabled")
      setInterval(() => {
        document.title = "amazing - lightMode"
        
      }, 1500);
    }
  
  }
  return (
   <>
  {/* <Router> */}
      <Navbar title="textUtils"  darkmode={btn} mode={mode} toggleMood={toggleMood} />
    <Alert alert={alert}/>
    <div className="container my-5">
    {/* <Routes> */}
          {/* <Route path="/about"> */}
      <TextForm mode={mode} showAlert={showAlert} />
            <About />
          {/* </Route> */}
          {/* <Route path="/TextForm">             */}
          {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
        
    </>
  );
}

export default App;
