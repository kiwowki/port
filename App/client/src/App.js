import React from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView.jsx";
import { smooth, scrollToTopImmediate } from './utils/smooth.js';
import { link } from './utils/link.js';

const App = () => {
  useEffect(() => {
    link();
    smooth(() => {
      setTimeout(() => {
        scrollToTopImmediate();
      }, 100); // 렌더링 이후로 약간 지연
    });
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