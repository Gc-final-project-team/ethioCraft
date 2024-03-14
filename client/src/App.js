
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Landing from './pages/hero';
import ThemeSwitcher from './pages/ThemeSwitcher';
import Ecommerse from './pages/ecommerce/ecommerce';
import Sell from './pages/ecommerce/sell.craft';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Landing/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/dark' element={<ThemeSwitcher/>}></Route>
    <Route path='/ecommerse' element={<Ecommerse/>}></Route>
    <Route path='/sell' element={<Sell/>}></Route>

      </Routes>
      </Router>
    
  );
}

export default App;
