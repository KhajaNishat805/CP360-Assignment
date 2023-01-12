
import './App.css';
import LoginForm from './Component/LoginForm';
import { BrowserRouter as Router , Routes, Route, useNavigate } from 'react-router-dom';
import "./Component/styles.css";
import { Home } from './Component/Home'
import { useEffect } from 'react';
function App() {
  const navigate= useNavigate()
  useEffect(()=>{
    navigate('/', {replace:true})
  },[])
  return (
   <>
   
   
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
   
   </>
  );
}

export default App;
