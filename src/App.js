import { Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navbar';
import About from './Pages/About';
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';
import Contact from './Pages/Contact';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
