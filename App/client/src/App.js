import React from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView.jsx";
import { smooth } from './utils/smooth.js';
import { link } from './utils/link.js';

const App = () => {
  useEffect(() => {
    smooth();
    link();
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App