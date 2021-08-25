import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light'); //its says whether dark mode on OR off
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
       type: type
    })
setTimeout(() => {
    setAlert(null)
}, 850);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3a2801';
      showAlert("Dark mode has enabled" , "success");
      document.title='Text Convertor - Dark Mode';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has enabled" , "success");
      document.title='Text Convertor - Light Mode';
    }
  }
  return (
   <>
<Navbar title="TextConvertor" abouttext="About Us" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>

</div>



</>
  );
}

export default App;
