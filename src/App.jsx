import Alert from "./components/Alert";
import './App.css'
  import React, {useState, useEffect} from 'react';


function App() {
   const [alert, setAlert] = useState(true);

 
  return (
    <>
   {alert ? <Alert message={"Our privacy policy has changed Successfully"} type={true} background={"bg-teal-100"} border={"border-teal-500"} /> : null }
    </>
  )
}

export default App
