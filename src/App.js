import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import Stepper from "./pages/steppert";

function App() {
  return (
    <Router>
    <Navbar />

    <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/stepper" element={<Stepper />} />       
    </Routes>
    <Footer />
</Router>
);
}

export default App;
