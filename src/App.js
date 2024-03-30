import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import { useStateContext } from './GlobalContext/ContextProvider';
import User from './components/User/User';
import Web from './pages/Web';
import ImageGPT from './pages/ImageGPT';



function App() {
  const currentUser = useStateContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={currentUser !== null ? <Landing/> : <LoginPage/>}/>
          <Route path = '/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/GPT' element={currentUser !== null ? <Home/> : <LoginPage/>}/>
          <Route path='/user' element={currentUser !== null ? <User/> : <LoginPage/>}/>
          <Route path='/Translate' element={currentUser !== null ? <Web/> : <LoginPage/>}/>
          <Route path='/img' element={currentUser !== null ? <ImageGPT/> : <LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
