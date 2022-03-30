import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home';
import About from './components/About';
import ManteHabilit from './components/ManteHabilit';
import Ventas from './components/Ventas';
import Cirrus from './components/Cirrus';
import NotFound from './components/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/mantyhabilit" element={<ManteHabilit/>}/>
      <Route path="/ventas" element={<Ventas/>}/>
      <Route path="/cirrus" element={<Cirrus/>}/>
      <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
