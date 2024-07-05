import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import User from "./pages/User";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/page1" element={<Main/>} />
                <Route path="/page2" element={<Menu/>} />
                <Route path="/page3" element={<User/>} />
                <Route path="*" element={<Main/>} />
            </Routes>
        </Router>
    );
};

export default App;