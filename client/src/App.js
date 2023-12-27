
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Landing from './pages/hero';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Landing/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>

      </Routes>
      </Router>
    
  );
}

export default App;
