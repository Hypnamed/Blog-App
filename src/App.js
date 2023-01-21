import { Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navbar';
import About from './Pages/About';
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
      </Routes>
    </div>
  );
}

export default App;
