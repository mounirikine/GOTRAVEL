import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from './pages/Login';
import Main from "./pages/Main";

function App() {
  return (
    <>
      <div className="w-full">
        <Header />
        <Routes>
        <Route path='/gooo' element={<Login />} />
        <Route path='/' element={<Main />} />
      </Routes>
        <Footer />
      </div>

     
    </>
  );
}

export default App;