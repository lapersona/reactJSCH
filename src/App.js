import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home';
import About from './components/About';
import ManteHabilit from './components/ManteHabilit';
import Ventas from './components/Ventas';
import Cirrus from './components/Cirrus';
import NotFound from './components/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/mantyhabilit" element={<ManteHabilit/>}/>
      <Route path="/ventas" element={<Ventas/>}/>
      <Route path="/cirrus" element={<Cirrus/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
