import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Superheros from './components/Superheros';
import RQSuperheros from './components/RQSuperheros';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/superheros' element={<Superheros />} />
        <Route path='/RQsuperheros' element={<RQSuperheros />} />
      </Routes>
    </div>
  );
}
export default App;