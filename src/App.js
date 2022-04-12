import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About/About';
import Footer from './pages/Common/Footer/Footer';
import Header from './pages/Common/Header/Header';
import Home from './pages/Home/Home/Home';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
