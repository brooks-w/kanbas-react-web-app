//import React from 'react';
//import logo from './logo.svg';
// import './App.css';
import HelloWorld from './hello';
import Labs, {Add} from './Labs';
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Kanbas from './Kanbas';

function App() {
  return (
  <>
  <HashRouter>
    <div>
  <Routes>
          <Route path="/" element={<Navigate to="/Labs/a3"/>}/>
          <Route path="/Labs/*" element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/hello" element={<HelloWorld/>}/>
    </Routes>
    </div>
  </HashRouter>
  </>
  );

}

export default App;
