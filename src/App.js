import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
