import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Superheros from './components/Superheros';
import RQSuperheros from './components/RQSuperheros';
import Nav from './components/Nav';
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

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
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
    </QueryClientProvider>
  );
}
export default App;