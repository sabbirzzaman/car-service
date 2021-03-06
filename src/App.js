import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About/About';
import Footer from './pages/Common/Footer/Footer';
import Header from './pages/Common/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFounded from './pages/NotFounded/NotFounded';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path='login' element={<Login></Login>}></Route>
                <Route path='register' element={<Register></Register>}></Route>
                <Route path='*' element={<NotFounded></NotFounded>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
