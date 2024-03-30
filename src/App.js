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

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path = '/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/GPT' element={<Home/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/Translate' element={<Web/>}/>
          <Route path='/img' element={ <ImageGPT/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
