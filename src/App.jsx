import { useState } from "react";

import "./App.css";
import Home from "./Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkoute from "./redux/Checkout";
import Product from "./Product";
function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/checkout" element={<Checkoute/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
