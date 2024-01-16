import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import PageLogin from './pages/PageLogin';
import PageCategory from './pages/PageCategory'
import PageDetailProduct1 from './pages/PageDetailProduct';
import PageDetailProduct2 from './pages/PageDetailProduct2';
import PageDetailProduct3 from './pages/PageDetailProduct3';
import PageTransaction from './pages/PageTransaction';
import Styling from './components/hoc/HiegherComp';
import WrappedComp from './components/hoc/WrappedComp';

function App() {
  const [count, setCount] = useState(0);


  return (
    <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/detailProduct1" element={<PageDetailProduct1/>} />
          <Route path="/detailProduct2" element={<PageDetailProduct2/>} />
          <Route path="/detailProduct3" element={<PageDetailProduct3/>} />
          <Route path="/transaction" element={<PageTransaction/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PageLogin />} />
          <Route path="/category" element={<PageCategory />} />
        </Routes>
    </Router>
  );
}

export default App;
