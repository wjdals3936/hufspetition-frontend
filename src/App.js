import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Notice from './pages/notice';
import Hotboard from "./pages/hot-board";
import Freeboard from "./pages/free-board";
import Petition from "./pages/petition";
import Endpetition from "./pages/end-petition";
import Schoolintroduction from "./pages/school-introduction";
import QA from "./pages/q&a";

function App() {
    return (
        <Router>
            <Navbar />
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/notice' exact element={<Notice />} />
            <Route path='/hot-board' exact element={<Hotboard />} />
            <Route path='/free-board' exact element={<Freeboard />} />
            <Route path='/petition' exact element={<Petition />} />
            <Route path='/end-petition' exact element={<Endpetition />} />
            <Route path='/school-introduction' exact element={<Schoolintroduction />} />
            <Route path='/q&a' exact element={<QA />} />
        </Routes>
        </Router>
    );
    
}

export default App;