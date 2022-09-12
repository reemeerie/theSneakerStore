import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CartProvider } from "./context/CartContext"
import Cart from './pages/Cart';
import Form from './components/Form';

function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/cart/form' element={<Form/>}/>
        </Routes>
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
