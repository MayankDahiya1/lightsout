import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {Hollywood, Bollywood, About} from './container';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Search from "./container/Search/Search";
function App() {
  return (
   <>
   
   <BrowserRouter>
   {/* Navbar */}
   <Navbar/>
    <Routes>
    {/* Routers  */}
    <Route path="/" element={<Hollywood/>}/>
    <Route path="/bollywood" element={<Bollywood/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
   </>

  );
}

export default App;
