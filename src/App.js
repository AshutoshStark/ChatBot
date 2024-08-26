import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './components/User/User';
import Web from './pages/Web';
import ImageGPT from './pages/ImageGPT';
import News from './components/news/News';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<News/>}/>
          <Route path='/img' element={<ImageGPT/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
