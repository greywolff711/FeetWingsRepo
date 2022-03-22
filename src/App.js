import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Faqs from "./pages/FAQ";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Products from "./pages/Products";
import Smartyarn from "./pages/smartyarn";
import TOC from "./pages/TOC";
import DisplayCareer from "./components/DisplayCareer"


function App() {
  return(
    <BrowserRouter>
    <Routes> 
       
       <Route exact path="/" element={<Home/>} />
       <Route  path="/products" element={<Products/>} />
       <Route  path="/faq" element={<Faqs/>} />
       <Route  path="/smartyarn" element={<Smartyarn/>} />
       <Route  path="/contact" element={<Contact/>} />
       <Route  path="/about" element={<About/>} />
       <Route  path="/privacy" element={<Privacy/>} />
       <Route  path="/toc" element={<TOC/>} />
       <Route  path="/career" element={<Career/>} />
       <Route  path="/careerdisplay" element={<DisplayCareer/>} />

        </Routes>

   </BrowserRouter>
  );

}

export default App;
