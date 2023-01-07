import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Superheros from './components/Superheros';
import Nav from './components/Nav';
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import RQSuperHero from './components/RQSuperHero';
import RQSuperheros from './components/RQSuperheros';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/superheros' element={<Superheros />} />
          <Route path='/RQsuperheros' element={<RQSuperheros />} />
          <Route path='/RQSuperHero/:id' element={<RQSuperHero />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
    </QueryClientProvider>
  );
}
export default App;